/**
 * 2009Scape Wiki Reader - Engine v1.7 (Accuracy & Sanitization)
 * Protected by AGPL-3.0
 */

const WIKI_API = "https://runescape.wiki/api.php";
const DOKU_BASE = "https://cdn.2009scape.org/wiki/doku.php";

// --- State Management ---
let bookmarks = JSON.parse(localStorage.getItem('wiki_bookmarks')) || [];
let history = JSON.parse(localStorage.getItem('wiki_history')) || [];
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

async function performDualSearch(query) {
    const date = refDateInput.value;
    try {
        const mwRes = await fetch(`${WIKI_API}?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=6&srprop=snippet&format=json&origin=*`).then(r => r.json());
        
        resultsArea.innerHTML = `<h3 style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-bottom: 10px;">Historical Archives</h3>`;
        
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
        
        resultsArea.innerHTML += `<h3 style="font-size: 11px; color: var(--cyan); text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 25px; margin-bottom: 10px;">2009Scape CDN</h3>`;
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
        .map(s => s.replace(/[|'\]\[]/g, '').trim()) // Final cleanup
        .filter(s => s.length > 2)
        .map(s => `<li>${s}</li>`)
        .join('') || "<li>Refer to archive</li>";
}

async function performFindEarliest(title, text) {
    try {
        const res = await fetch(`${WIKI_API}?action=query&prop=revisions&titles=${encodeURIComponent(title)}&rvlimit=max&rvdir=newer&rvprop=ids|timestamp|content&format=json&origin=*`).then(r => r.json());
        const page = Object.values(res.query.pages)[0];
        const first = page.revisions?.find(r => (r['*'] || "").toLowerCase().includes(text.toLowerCase()));
        if (first) {
            const d = new Date(first.timestamp).toLocaleDateString();
            resultsArea.innerHTML = `<div class="result-card"><h3>${title}</h3><p>"${text}" first appeared in rev ${first.revid} on ${d}</p></div>`;
        } else { resultsArea.innerHTML = `<p class="subtitle">Search term not found in history.</p>`; }
    } catch { resultsArea.innerHTML = "Scan failed."; }
}

// --- UI Rendering ---

function renderMWCard(title, date, oldid, snippet) {
    const url = `https://runescape.wiki/w/${encodeURIComponent(title)}?oldid=${oldid}`;
    const isBook = bookmarks.some(b => b.oldid.toString() === oldid.toString());
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
        <button class="bookmark-btn ${isBook ? 'active' : ''}" onclick="toggleBookmark('${title.replace(/'/g, "\\'")}', '${date}', '${oldid}', '${url}', this)">
            <svg class="bookmark-icon-svg" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </button>
        <h3 onclick="window.open('${url}', '_blank')">${title}</h3>
        <div class="search-snippet">${snippet}...</div>
    `;
    resultsArea.appendChild(card);
}

function renderCdnPortalCard(q) {
    const url = `${DOKU_BASE}?do=search&id=${encodeURIComponent(q)}`;
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.borderLeft = "2px solid var(--cyan)";
    card.innerHTML = `
        <h3 onclick="window.open('${url}', '_blank')" style="color: var(--cyan)">Search CDN for "${q}"</h3>
        <p style="font-size: 11px; color: var(--text-dim); margin-top: 5px;">
            Visit the community portal for direct 2009Scape guides.
        </p>
    `;
    resultsArea.appendChild(card);
}

// --- Sidebar & Persistence ---

function renderSidebar() {
    if (currentSideTab === 'changelog') {
        sideList.innerHTML = changelog.map(c => `
            <div class="changelog-item"><span class="changelog-tag">${c.version}</span> <strong>${c.date}</strong><br>${c.note}</div>
        `).join('');
        return;
    }
    const data = currentSideTab === 'bookmarks' ? bookmarks : history;
    sideList.innerHTML = data.map(i => `
        <div class="side-item">
            <div onclick="quickReload('${(i.title || i.query).replace(/'/g, "\\'")}')" style="cursor:pointer; flex-grow:1;">
                <strong>${i.title || i.query}</strong><br><small>${i.date || ''}</small>
            </div>
            <button onclick="deleteItem('${i.oldid || i.timestamp}')" style="background:none; border:none; color:var(--text-dim); cursor:pointer;">✕</button>
        </div>
    `).join('') || `<p class="subtitle" style="padding:10px;">Empty.</p>`;
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