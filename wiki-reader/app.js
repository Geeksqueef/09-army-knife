/**
 * 2009Scape Wiki Reader - Engine v1.7 (Accuracy & Sanitization)
 * Protected by AGPL-3.0
 */

const WIKI_API = "https://runescape.wiki/api.php";
const DOKU_BASE = "https://cdn.2009scape.org/wiki/doku.php";

// --- State Management ---
// localStorage entries can be malformed by a prior buggy write, manual edit,
// quota-error partial write, or browser-extension tampering. Parsing happens at
// module top level (the file is loaded as <script type="module">), so an
// uncaught throw here would silently brick the whole panel — none of the
// handlers below would ever wire up. Wrap the parse and fall back to empty.
function loadJSON(key, fallback) {
    try {
        const parsed = JSON.parse(localStorage.getItem(key));
        return parsed || fallback;
    } catch {
        return fallback;
    }
}
let bookmarks = loadJSON('wiki_bookmarks', []);
let history = loadJSON('wiki_history', []);
let currentSideTab = 'bookmarks';
let activeSearchMode = 'wiki-search';

const changelog = [
    { version: "v1.7", date: "2026-04-04", note: "Accuracy Fix: HUD now validates article titles against search queries to prevent incorrect quest data." },
    { version: "v1.6", date: "2026-04-04", note: "Clean Console: CDN switched to Portal Mode to bypass CORS blocks." },
    { version: "v1.4", date: "2026-04-04", note: "Quest Runner HUD: Automated requirement extraction from 2011 archives." }
];

// --- DOM Elements ---
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const findTextInput = document.getElementById('find-text');
const themeBtn = document.getElementById('theme-toggle');
const settingsToggle = document.getElementById('settings-toggle');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const refDateInput = document.getElementById('ref-date');
const refDisplay = document.getElementById('ref-display');
const resultsArea = document.getElementById('results-area');
const sideList = document.getElementById('side-list');
const earliestExtras = document.getElementById('earliest-extras');
const questHud = document.getElementById('quest-hud');

// --- Initialization & Theme ---
themeBtn.onclick = () => {
    const isLight = document.body.classList.toggle('light-mode');
    themeBtn.innerText = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeBtn.innerText = '🌙';
}

// --- Navigation ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        activeSearchMode = btn.dataset.tab;
        
        const isEarliest = activeSearchMode === 'find-earliest';
        earliestExtras.classList.toggle('hidden', !isEarliest);
        searchInput.placeholder = isEarliest ? "Article title..." : "Search archives...";
        resultsArea.innerHTML = "";
        questHud.classList.add('hidden');
    };
});

const switchSideTab = (tab, element) => {
    currentSideTab = tab;
    document.querySelectorAll('.side-tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    renderSidebar();
};

document.getElementById('show-bookmarks').onclick = (e) => switchSideTab('bookmarks', e.target);
document.getElementById('show-history').onclick = (e) => switchSideTab('history', e.target);
document.getElementById('show-changelog').onclick = (e) => switchSideTab('changelog', e.target);

// --- Core Search Logic ---

async function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) { searchInput.classList.add('error-shake'); return; }
    
    searchInput.classList.remove('error-shake');
    questHud.classList.add('hidden');
    resultsArea.innerHTML = `<p style="color:var(--accent); font-size: 11px;">Scanning Gielinor...</p>`;

    if (activeSearchMode === 'wiki-search') {
        await performDualSearch(query);
    } else {
        const text = findTextInput.value.trim();
        if (!text) { findTextInput.classList.add('error-shake'); return; }
        await performFindEarliest(query, text);
    }
}

// Section dividers in the results column share one styling spec; only the
// accent color and whether they need top spacing differ. `label` is a trusted
// in-file constant at every call site.
function sectionHeaderHTML(label, colorVar, topGap = false) {
    const margins = topGap ? 'margin-top: 25px; margin-bottom: 10px;' : 'margin-bottom: 10px;';
    return `<h3 style="font-size: 11px; color: var(${colorVar}); text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 4px; ${margins}">${label}</h3>`;
}

async function performDualSearch(query) {
    const date = refDateInput.value;
    try {
        const mwRes = await fetch(`${WIKI_API}?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=6&srprop=snippet&format=json&origin=*`).then(r => r.json());

        resultsArea.innerHTML = sectionHeaderHTML('Historical Archives', '--text-dim');
        
        if (mwRes.query?.search && mwRes.query.search.length > 0) {
            for (let s of mwRes.query.search) {
                const oldid = await fetchOldId(s.title, date);
                if (oldid) {
                    renderMWCard(s.title, date, oldid, s.snippet);
                    // Only fetch HUD data if the title matches our search intent
                    const qLower = query.toLowerCase();
                    const tLower = s.title.toLowerCase();
                    if (tLower.includes(qLower) || qLower.includes(tLower)) {
                        fetchQuestDetails(s.title, oldid);
                    }
                }
            }
        }
        
        resultsArea.insertAdjacentHTML('beforeend', sectionHeaderHTML('2009Scape CDN', '--cyan', true));
        renderCdnPortalCard(query);

        addHistory(query, date);
    } catch (e) {
        resultsArea.innerHTML = `<p class="validation-msg">API Error. Check your connection.</p>`;
    }
}

async function fetchOldId(title, date) {
    try {
        const res = await fetch(`${WIKI_API}?action=query&prop=revisions&titles=${encodeURIComponent(title)}&rvlimit=1&rvstart=${new Date(date).toISOString()}&rvdir=older&format=json&origin=*`).then(r => r.json());
        const page = Object.values(res.query.pages)[0];
        return page.revisions?.[0]?.revid || null;
    } catch { return null; }
}

async function fetchQuestDetails(title, oldid) {
    try {
        const res = await fetch(`${WIKI_API}?action=query&prop=revisions&revids=${oldid}&rvprop=content&format=json&origin=*`).then(r => r.json());
        const content = Object.values(res.query.pages)[0].revisions[0]['*'];
        parseQuestData(title, content);
    } catch (e) { console.warn("Quest HUD: Sanitization error."); }
}

function parseQuestData(title, text) {
    const reqsList = document.getElementById('hud-reqs');
    const itemsList = document.getElementById('hud-items');
    
    // Target common infobox fields
    const reqMatch = text.match(/\|reqs\s*=\s*([\s\S]*?)(?=\n\||}})/i) || text.match(/Requirements([\s\S]*?)\n\n/i);
    const itemMatch = text.match(/\|items\s*=\s*([\s\S]*?)(?=\n\||}})/i) || text.match(/Items needed([\s\S]*?)\n\n/i);

    if (reqMatch || itemMatch) {
        const rContent = formatWikiList(reqMatch ? reqMatch[1] : "");
        const iContent = formatWikiList(itemMatch ? itemMatch[1] : "");

        if (rContent !== "<li>Refer to archive</li>" || iContent !== "<li>Refer to archive</li>") {
            document.getElementById('hud-title').innerText = title;
            reqsList.innerHTML = rContent;
            itemsList.innerHTML = iContent;
            questHud.classList.remove('hidden');
        }
    }
}

function formatWikiList(str) {
    if (!str || str.trim().length < 3) return "<li>Refer to archive</li>";
    
    return str.split(/[*#;]|\<br\s*\/?\>/i)
        .map(s => s.replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1')) // Handle [[Link|Display]]
        .map(s => s.replace(/\{\{[^}]*\}\}/g, '')) // Remove {{Templates}}
        // Also strip angle brackets so infobox <...> fragments aren't rendered
        // as HTML by the <li> consumer below.
        .map(s => s.replace(/[|'\][<>]/g, '').trim()) // Final cleanup
        .filter(s => s.length > 2)
        .map(s => `<li>${s}</li>`)
        .join('') || "<li>Refer to archive</li>";
}

// MediaWiki caps revisions at 500 per request for anonymous callers, so
// `rvlimit=max` resolves to 500 anyway — set it explicitly to make the cap
// obvious and ensure we never request an unbounded payload. The earliest-
// match scan is therefore bounded by this per-request revision cap.
const FIND_EARLIEST_RVLIMIT = 500;

async function performFindEarliest(title, text) {
    const startRev = document.getElementById('start-rev').value.trim();
    const useRegex = document.getElementById('regex-chk').checked;
    const raw = document.getElementById('raw-chk').checked;
    let matcher;
    try {
        matcher = useRegex ? new RegExp(text, raw ? '' : 'i') : null;
    } catch {
        resultsArea.innerHTML = `<p class="validation-msg">Invalid regular expression.</p>`;
        return;
    }

    try {
        const params = new URLSearchParams({
            action: 'query',
            prop: 'revisions',
            titles: title,
            rvlimit: String(FIND_EARLIEST_RVLIMIT),
            rvdir: 'newer',
            rvprop: 'ids|timestamp|content',
            format: 'json',
            origin: '*'
        });
        if (startRev) params.set('rvstartid', startRev);

        const res = await fetch(`${WIKI_API}?${params.toString()}`).then(r => r.json());
        const page = Object.values(res.query.pages)[0];
        const first = page.revisions?.find(r => {
            const content = r['*'] || '';
            if (matcher) return matcher.test(content);
            if (raw) return content.includes(text);
            return content.toLowerCase().includes(text.toLowerCase());
        });
        resultsArea.innerHTML = '';
        if (first) {
            const d = new Date(first.timestamp).toLocaleDateString();
            // Build with createElement/textContent so the article title and the
            // user-supplied search text can't inject markup if they contain
            // anything unexpected.
            const card = document.createElement('div');
            card.className = 'result-card';
            const h3 = document.createElement('h3');
            h3.textContent = title;
            const p = document.createElement('p');
            p.textContent = `"${text}" first appeared in rev ${first.revid} on ${d}`;
            card.appendChild(h3);
            card.appendChild(p);
            resultsArea.appendChild(card);
        } else {
            const note = document.createElement('p');
            note.className = 'subtitle';
            note.textContent = 'Search term not found in scanned history.';
            resultsArea.appendChild(note);
        }
    } catch {
        resultsArea.innerHTML = "Scan failed.";
    }
}

// --- UI Rendering ---

function renderMWCard(title, date, oldid, snippet) {
    const url = `https://runescape.wiki/w/${encodeURIComponent(title)}?oldid=${oldid}`;
    const isBook = bookmarks.some(b => b.oldid.toString() === oldid.toString());
    const card = document.createElement('div');
    card.className = 'result-card';

    // Title comes from the MediaWiki API and the user can navigate to it;
    // build the structure imperatively so it can never reach the HTML parser.
    // `snippet` is intentionally HTML (MediaWiki wraps matches in
    // <span class="searchmatch">…</span>), so it stays as innerHTML on a
    // dedicated element.
    const bookmarkBtn = document.createElement('button');
    bookmarkBtn.className = 'bookmark-btn' + (isBook ? ' active' : '');
    bookmarkBtn.innerHTML = '<svg class="bookmark-icon-svg" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>';
    bookmarkBtn.addEventListener('click', () => toggleBookmark(title, date, oldid, url, bookmarkBtn));

    const h3 = document.createElement('h3');
    h3.style.cursor = 'pointer';
    h3.textContent = title;
    h3.addEventListener('click', () => window.open(url, '_blank'));

    const snippetDiv = document.createElement('div');
    snippetDiv.className = 'search-snippet';
    snippetDiv.innerHTML = snippet + '...';

    card.appendChild(bookmarkBtn);
    card.appendChild(h3);
    card.appendChild(snippetDiv);
    resultsArea.appendChild(card);
}

function renderCdnPortalCard(q) {
    const url = `${DOKU_BASE}?do=search&id=${encodeURIComponent(q)}`;
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.borderLeft = "2px solid var(--cyan)";

    const h3 = document.createElement('h3');
    h3.style.color = 'var(--cyan)';
    h3.style.cursor = 'pointer';
    h3.textContent = `Search CDN for "${q}"`;
    h3.addEventListener('click', () => window.open(url, '_blank'));

    const p = document.createElement('p');
    p.style.cssText = 'font-size: 11px; color: var(--text-dim); margin-top: 5px;';
    p.textContent = 'Visit the community portal for direct 2009Scape guides.';

    card.appendChild(h3);
    card.appendChild(p);
    resultsArea.appendChild(card);
}

// --- Sidebar & Persistence ---

function renderSidebar() {
    if (currentSideTab === 'changelog') {
        // Changelog entries are hardcoded trusted constants in this file.
        sideList.innerHTML = changelog.map(c => `
            <div class="changelog-item"><span class="changelog-tag">${c.version}</span> <strong>${c.date}</strong><br>${c.note}</div>
        `).join('');
        return;
    }
    // Bookmarks/history store titles that originated from MediaWiki API
    // responses; rebuild the list with createElement/textContent so a
    // surprising title can't execute as markup.
    sideList.textContent = '';
    const data = currentSideTab === 'bookmarks' ? bookmarks : history;
    if (!data.length) {
        const empty = document.createElement('p');
        empty.className = 'subtitle';
        empty.style.padding = '10px';
        empty.textContent = 'Empty.';
        sideList.appendChild(empty);
        return;
    }
    data.forEach(i => {
        const wrap = document.createElement('div');
        wrap.className = 'side-item';

        const label = document.createElement('div');
        label.style.cssText = 'cursor:pointer; flex-grow:1;';
        const strong = document.createElement('strong');
        strong.textContent = i.title || i.query;
        const br = document.createElement('br');
        const small = document.createElement('small');
        small.textContent = i.date || '';
        label.appendChild(strong);
        label.appendChild(br);
        label.appendChild(small);
        label.addEventListener('click', () => quickReload(i.title || i.query));

        const del = document.createElement('button');
        del.textContent = '✕';
        del.style.cssText = 'background:none; border:none; color:var(--text-dim); cursor:pointer;';
        del.addEventListener('click', () => deleteItem(i.oldid || i.timestamp));

        wrap.appendChild(label);
        wrap.appendChild(del);
        sideList.appendChild(wrap);
    });
}

window.toggleBookmark = (title, date, oldid, url, btn) => {
    const idx = bookmarks.findIndex(b => b.oldid.toString() === oldid.toString());
    if (idx > -1) bookmarks.splice(idx, 1);
    else bookmarks.unshift({ title, date, oldid, url });
    localStorage.setItem('wiki_bookmarks', JSON.stringify(bookmarks));
    btn.classList.toggle('active');
    renderSidebar();
};

function addHistory(query, date) {
    history = [{ query, date, timestamp: Date.now() }, ...history.filter(h => h.query !== query)].slice(0, 15);
    localStorage.setItem('wiki_history', JSON.stringify(history));
    renderSidebar();
}

window.deleteItem = (id) => {
    if (currentSideTab === 'bookmarks') bookmarks = bookmarks.filter(b => b.oldid != id);
    else history = history.filter(h => h.timestamp != id);
    localStorage.setItem(currentSideTab === 'bookmarks' ? 'wiki_bookmarks' : 'wiki_history', JSON.stringify(currentSideTab === 'bookmarks' ? bookmarks : history));
    renderSidebar();
};

window.quickReload = (n) => { searchInput.value = n; handleSearch(); };

searchBtn.onclick = handleSearch;
searchInput.onkeypress = (e) => { if (e.key === 'Enter') handleSearch(); };
document.getElementById('close-hud').onclick = () => questHud.classList.add('hidden');
document.getElementById('reset-date').onclick = () => { document.getElementById('ref-date').value = "2011-04-01"; };
settingsToggle.onclick = () => settingsModal.classList.remove('hidden');
closeSettings.onclick = () => settingsModal.classList.add('hidden');

renderSidebar();