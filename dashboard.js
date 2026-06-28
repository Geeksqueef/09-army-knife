(function() {
  'use strict';

  const panels = {};
  let activePanel = null;
  let nextZ = 300;
  // Onboarding tip; dismissed (and forgotten) the first time a panel opens.
  let maximizeHint = document.querySelector('.maximize-hint');

  const panelConfigs = {
    'fairy-rings': { title: 'Fairy Ring Codes', src: './fairy-rings.html', width: 800, height: 500 },
    'skill-calc': { title: 'Skill Calculator', src: './skillcalculator.html', width: 700, height: 500 },
    'charm-drop': { title: 'Charm Drop Rates', src: './charmdrop.html', width: 900, height: 550 },
    'shop-viewer': { title: 'Shop Inventories', src: './shopsearch.html', width: 900, height: 550 },
    'droptables': { title: 'Drop Tables', src: './droptables/index.html', width: 1000, height: 650 },
    'npc-viewer': { title: 'NPC Viewer', src: './npc/index.html', width: 900, height: 600 },
    'wiki-reader': { title: 'RS Wiki Reader', src: './wiki-reader/index.html', width: 1000, height: 700 }
  };

  // Minimum sizes for resizable panels; matches the CSS floor so resize
  // handles can never shrink a panel below its styled minimum.
  const MIN_PANEL_W = 300;
  const MIN_PANEL_H = 200;
  const RESIZE_DIRS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

  const MAXIMIZE_GLYPH = '⛶';
  const RESTORE_GLYPH = '❐';

  // Edge/corner snap (tiling) thresholds. EDGE: how close to a left/right edge
  // the cursor must be to arm a snap. CORNER: within that edge band, how close
  // to the top/bottom of the map view turns a half-snap into a quarter-snap.
  const SNAP_EDGE = 28;
  const SNAP_CORNER = 150;

  // How far the cursor must move after pressing the header before it counts as a
  // drag. Below this, the press is treated as a plain click so the header still
  // receives click/dblclick (double-click vertically maximizes the panel).
  const DRAG_THRESHOLD = 4;

  // Lowest top a panel may occupy: just below the toolbar's measured height
  // plus a small gap. The toolbar wraps to multiple rows on narrow viewports,
  // so its height is read live rather than hard-coded; the 44 is only a floor
  // for the rare case where it cannot be measured (e.g. zero-height/hidden).
  // Keeping panels below this means they never cover the toolbar.
  function minPanelTop() {
    const toolbar = document.querySelector('.dashboard-toolbar');
    const height = toolbar ? toolbar.getBoundingClientRect().height : 0;
    return Math.round(height || 44) + 8;
  }

  function getPanel(id) {
    if (!panels[id]) {
      panels[id] = createPanel(id);
    }
    return panels[id];
  }

  function createPanel(id) {
    const cfg = panelConfigs[id];
    if (!cfg) return null;

    const minTop = minPanelTop();
    const width = Math.min(cfg.width, window.innerWidth - 40);
    const height = Math.min(cfg.height, window.innerHeight - minTop - 40);

    const panel = document.createElement('div');
    panel.className = 'dashboard-panel';
    panel.id = 'panel-' + id;
    panel.style.width = width + 'px';
    panel.style.height = height + 'px';
    panel.style.left = Math.max(20, (window.innerWidth - width) / 2) + 'px';
    panel.style.top = Math.max(minTop, (window.innerHeight - height) / 2) + 'px';
    panel.style.zIndex = ++nextZ;

    panel.innerHTML = `
      <div class="dashboard-panel-header">
        <h3>${cfg.title}</h3>
        <div class="panel-header-actions">
          <button class="maximize-btn" aria-label="Maximize" title="Maximize">${MAXIMIZE_GLYPH}</button>
          <button class="close-btn" aria-label="Close">&times;</button>
        </div>
      </div>
      <div class="dashboard-panel-body">
        <iframe src="${cfg.src}" title="${cfg.title}"></iframe>
      </div>
      ${RESIZE_DIRS.map(function(dir) { return '<div class="resize-handle resize-' + dir + '" data-dir="' + dir + '"></div>'; }).join('')}
    `;

    document.body.appendChild(panel);

    const header = panel.querySelector('.dashboard-panel-header');
    const closeBtn = panel.querySelector('.close-btn');
    const maxBtn = panel.querySelector('.maximize-btn');

    header.addEventListener('mousedown', function(e) {
      if (e.target === closeBtn || e.target === maxBtn) return;
      bringToFront(id);
      startDrag(e, panel);
    });

    panel.addEventListener('mousedown', function() {
      bringToFront(id);
    });

    closeBtn.addEventListener('click', function() {
      closePanel(id);
    });

    maxBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      bringToFront(id);
      toggleMaximizePanel(panel);
    });

    // Double-clicking the header fills the panel vertically (full map-view
    // height, same width/x); double-clicking again restores it.
    header.addEventListener('dblclick', function(e) {
      if (e.target === closeBtn || e.target === maxBtn) return;
      toggleVerticalMaximizePanel(panel);
    });

    panel.querySelectorAll('.resize-handle').forEach(function(handle) {
      handle.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        e.preventDefault();
        bringToFront(id);
        startResize(e, panel, handle.dataset.dir);
      });
    });

    return panel;
  }

  // Single full-viewport overlay shown only during drag/resize. The embedded
  // iframes (panel bodies and the map background) otherwise swallow mousemove
  // events that fire over them, stalling any gesture that crosses their edge.
  // The overlay sits below the toolbar (z-index 10000) so toolbar clicks keep
  // working, but above every panel so the gesture keeps receiving events.
  let viewportOverlay = null;
  function getViewportOverlay() {
    if (!viewportOverlay) {
      viewportOverlay = document.createElement('div');
      viewportOverlay.className = 'drag-viewport-overlay';
      document.body.appendChild(viewportOverlay);
    }
    return viewportOverlay;
  }

  function setOverlayActive(active, cursor) {
    const overlay = getViewportOverlay();
    overlay.style.cursor = cursor || 'default';
    overlay.classList.toggle('active', active);
  }

  // CSS cursor that matches each resize direction so the user sees the right
  // double-headed arrow while dragging an edge or corner.
  function dirCursor(dir) {
    if (dir === 'ne' || dir === 'sw') return 'nesw-resize';
    if (dir === 'nw' || dir === 'se') return 'nwse-resize';
    if (dir === 'n' || dir === 's') return 'ns-resize';
    return 'ew-resize';
  }

  function bringToFront(id) {
    const panel = panels[id];
    if (!panel) return;
    if (activePanel === panel) return;
    panel.style.zIndex = ++nextZ;
    activePanel = panel;
  }

  // The usable "map view" rectangle: the whole viewport below the toolbar.
  // Maximize fills it; tiling carves halves/quarters out of it.
  function mapViewRect() {
    const top = minPanelTop();
    return { left: 0, top: top, width: window.innerWidth, height: window.innerHeight - top };
  }

  // Classify the cursor position into one of six named tile zones, or null
  // when not in a snap region. Zones: 'L'/'R' (full-height halves), and
  // 'TL'/'TR'/'BL'/'BR' (quarter quadrants). Named (not just rect-valued) so
  // the snap can be recomputed on window resize — see snapZoneRect below.
  function classifySnapZone(clientX, clientY) {
    const view = mapViewRect();
    const W = window.innerWidth;
    const H = window.innerHeight;
    const side = clientX <= SNAP_EDGE ? 'L' : (clientX >= W - SNAP_EDGE ? 'R' : null);
    if (!side) return null;
    if (clientY <= view.top + SNAP_CORNER) return 'T' + side;
    if (clientY >= H - SNAP_CORNER) return 'B' + side;
    return side;
  }

  // The rectangle for a named tile zone relative to the current map view.
  // Used both at snap time (via classifySnapZone → snapZoneRect) and on
  // window resize to reflow an already-tiled panel into the new zone rect.
  function snapZoneRect(zone) {
    const view = mapViewRect();
    const W = window.innerWidth;
    const halfW = Math.round(W / 2);
    const halfH = Math.round(view.height / 2);
    const isLeft = zone === 'L' || zone === 'TL' || zone === 'BL';
    const x0 = isLeft ? 0 : halfW;
    const w = isLeft ? halfW : W - halfW;
    if (zone === 'TL' || zone === 'TR') {
      return { left: x0, top: view.top, width: w, height: halfH };
    }
    if (zone === 'BL' || zone === 'BR') {
      return { left: x0, top: view.top + halfH, width: w, height: view.height - halfH };
    }
    return { left: x0, top: view.top, width: w, height: view.height };
  }

  function applyRect(panel, r) {
    panel.style.left = Math.round(r.left) + 'px';
    panel.style.top = Math.round(r.top) + 'px';
    panel.style.width = Math.round(r.width) + 'px';
    panel.style.height = Math.round(r.height) + 'px';
  }

  function captureRect(panel) {
    const rect = panel.getBoundingClientRect();
    return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
  }

  function setMaximized(panel, on) {
    panel._maximized = on;
    panel.classList.toggle('maximized', on);
    const btn = panel.querySelector('.maximize-btn');
    if (btn) {
      btn.innerHTML = on ? RESTORE_GLYPH : MAXIMIZE_GLYPH;
      btn.title = on ? 'Restore' : 'Maximize';
      btn.setAttribute('aria-label', on ? 'Restore' : 'Maximize');
    }
  }

  // Maximize fills the map view; restore returns to the pre-maximize rect.
  function toggleMaximizePanel(panel) {
    if (!panel._maximized) {
      // Only sample the restore rect while genuinely floating, so coming from a
      // tiled/vertical-fill state still restores to the original float size.
      if (!panel._tiled && !panel._vmaximized) {
        panel._restoreRect = captureRect(panel);
      }
      applyRect(panel, mapViewRect());
      setMaximized(panel, true);
      panel._tiled = false;
      panel._vmaximized = false;
    } else {
      if (panel._restoreRect) applyRect(panel, panel._restoreRect);
      setMaximized(panel, false);
    }
  }

  // Fill the panel to the full map-view height while keeping its current width
  // and x-position; double-clicking the header toggles this. Restores to the
  // pre-fill float rect on toggle-off.
  function toggleVerticalMaximizePanel(panel) {
    if (panel._vmaximized) {
      if (panel._restoreRect) applyRect(panel, panel._restoreRect);
      panel._vmaximized = false;
      return;
    }
    // Coming out of a maximized/tiled state, restore the float rect first so the
    // vertical fill keeps a sensible width/x rather than the full-width one.
    if ((panel._maximized || panel._tiled) && panel._restoreRect) {
      applyRect(panel, panel._restoreRect);
      setMaximized(panel, false);
      panel._tiled = false;
    } else {
      panel._restoreRect = captureRect(panel);
    }
    const view = mapViewRect();
    panel.style.top = Math.round(view.top) + 'px';
    panel.style.height = Math.round(view.height) + 'px';
    panel._vmaximized = true;
  }

  // Decide which tile region (if any) the cursor is hovering, given the live
  // pointer position. Returns the rect (or null) so the drag handler can
  // preview it; classifySnapZone is the source of truth for the zone name.
  function computeSnapZone(clientX, clientY) {
    const zone = classifySnapZone(clientX, clientY);
    return zone ? snapZoneRect(zone) : null;
  }

  // Translucent highlight that previews where a dragged panel will tile.
  let snapPreviewEl = null;
  function getSnapPreview() {
    if (!snapPreviewEl) {
      snapPreviewEl = document.createElement('div');
      snapPreviewEl.className = 'snap-preview';
      document.body.appendChild(snapPreviewEl);
    }
    return snapPreviewEl;
  }
  function showSnapPreview(rect) {
    const el = getSnapPreview();
    applyRect(el, rect);
    el.classList.add('active');
  }
  function hideSnapPreview() {
    if (snapPreviewEl) snapPreviewEl.classList.remove('active');
  }

  function startDrag(e, panel) {
    e.preventDefault();

    // A panel that is maximized, tiled, or vertically filled un-snaps back to
    // its floating size on the first actual drag movement (not a bare click),
    // repositioned so the header stays under the cursor — matching how OS
    // windows behave when you drag a maximized/snapped window loose.
    const wasExpanded = panel._maximized || panel._tiled || panel._vmaximized;
    if (!wasExpanded) {
      // Remember the current floating rect so a later snap/fill can restore it.
      panel._restoreRect = captureRect(panel);
    }

    let startX = e.clientX;
    let startY = e.clientY;
    const rect = panel.getBoundingClientRect();
    let startLeft = rect.left;
    let startTop = rect.top;

    const topLimit = minPanelTop();
    let pendingSnapRect = null;
    let pendingSnapZone = null;
    let popped = !wasExpanded; // floating panels need no pop
    // The drag (and its full-viewport overlay) only begins once the cursor
    // moves past DRAG_THRESHOLD. Activating the overlay on mousedown would put
    // it under the pointer for the following mouseup, stealing the header's
    // click/dblclick events and breaking double-click-to-maximize.
    let dragging = false;

    // Pop a maximized/tiled/vertical panel back to its floating size, centering
    // the header under the cursor and re-baselining the drag origin so the very
    // next translation produces no jump.
    function popToFloat(ev) {
      const prev = panel._restoreRect
        || { width: panel.offsetWidth / 2, height: panel.offsetHeight / 2 };
      const w = Math.max(MIN_PANEL_W, prev.width);
      const h = Math.max(MIN_PANEL_H, prev.height);
      startLeft = Math.max(0, ev.clientX - w / 2);
      startTop = Math.max(minPanelTop(), ev.clientY - 16);
      startX = ev.clientX;
      startY = ev.clientY;
      panel.style.width = w + 'px';
      panel.style.height = h + 'px';
      panel.style.left = startLeft + 'px';
      panel.style.top = startTop + 'px';
      setMaximized(panel, false);
      panel._tiled = false;
      panel._vmaximized = false;
    }

    function onMouseMove(ev) {
      if (!dragging) {
        if (Math.abs(ev.clientX - startX) < DRAG_THRESHOLD &&
            Math.abs(ev.clientY - startY) < DRAG_THRESHOLD) {
          return;
        }
        dragging = true;
        setOverlayActive(true, 'move');
      }
      if (!popped) {
        popped = true;
        popToFloat(ev);
      }
      let newLeft = startLeft + (ev.clientX - startX);
      let newTop = startTop + (ev.clientY - startY);
      const maxLeft = window.innerWidth - panel.offsetWidth;
      const maxTop = window.innerHeight - panel.offsetHeight;
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(topLimit, Math.min(newTop, maxTop));
      panel.style.left = newLeft + 'px';
      panel.style.top = newTop + 'px';

      // Preview an edge/corner tile when the cursor enters a snap zone.
      pendingSnapZone = classifySnapZone(ev.clientX, ev.clientY);
      pendingSnapRect = pendingSnapZone ? snapZoneRect(pendingSnapZone) : null;
      if (pendingSnapRect) showSnapPreview(pendingSnapRect); else hideSnapPreview();
    }

    function onMouseUp() {
      if (dragging) {
        setOverlayActive(false);
        hideSnapPreview();
        if (pendingSnapRect) {
          applyRect(panel, pendingSnapRect);
          // A tiled panel is not "maximized". Mark it tiled (not maximized) and
          // keep _restoreRect so grabbing the header drags it loose to the prior
          // float size. Remember the zone name so the resize handler can reflow
          // the panel back into the correct half/quarter on viewport changes.
          setMaximized(panel, false);
          panel._tiled = true;
          panel._tiledZone = pendingSnapZone;
        }
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  // Resize a panel from one of its eight edges/corners. `dir` is a string
  // containing any combination of 'n','s','e','w'; each axis is solved
  // independently so combined corners (e.g. 'ne') resize both axes at once.
  function startResize(e, panel, dir) {
    setOverlayActive(true, dirCursor(dir));
    const startX = e.clientX;
    const startY = e.clientY;
    const rect = panel.getBoundingClientRect();
    const startWidth = rect.width;
    const startHeight = rect.height;
    const startLeft = rect.left;
    const startTop = rect.top;
    const topLimit = minPanelTop();

    function onMouseMove(ev) {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      let newLeft = startLeft;
      let newTop = startTop;
      let newWidth = startWidth;
      let newHeight = startHeight;

      if (dir.indexOf('e') !== -1) {
        newWidth = Math.max(MIN_PANEL_W, Math.min(startWidth + dx, window.innerWidth - startLeft));
      }
      if (dir.indexOf('s') !== -1) {
        newHeight = Math.max(MIN_PANEL_H, Math.min(startHeight + dy, window.innerHeight - startTop));
      }
      if (dir.indexOf('w') !== -1) {
        let wDx = Math.min(dx, startWidth - MIN_PANEL_W);
        wDx = Math.max(wDx, -startLeft);
        newWidth = startWidth - wDx;
        newLeft = startLeft + wDx;
      }
      if (dir.indexOf('n') !== -1) {
        let nDy = Math.min(dy, startHeight - MIN_PANEL_H);
        nDy = Math.max(nDy, topLimit - startTop);
        newHeight = startHeight - nDy;
        newTop = startTop + nDy;
      }

      panel.style.left = newLeft + 'px';
      panel.style.top = newTop + 'px';
      panel.style.width = newWidth + 'px';
      panel.style.height = newHeight + 'px';
    }

    function onMouseUp() {
      setOverlayActive(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  // Open a panel. An explicit `src` (e.g. './npc/index.html?id=50') is an
  // authoritative deep-link request and always reloads the iframe, so the panel
  // lands on the requested target even if it was navigated since it last opened.
  // Toolbar buttons pass no src and leave the iframe in its current state.
  window.openPanel = function(id, src) {
    const panel = getPanel(id);
    if (!panel) return;
    if (src) {
      const iframe = panel.querySelector('iframe');
      if (iframe) iframe.setAttribute('src', src);
    }
    if (maximizeHint) {
      maximizeHint.style.display = 'none';
      maximizeHint = null;
    }
    panel.classList.add('active');
    bringToFront(id);
  };

  window.closePanel = function(id) {
    const panel = panels[id];
    if (!panel) return;
    panel.classList.remove('active');
    if (activePanel === panel) activePanel = null;
  };

  window.togglePanel = function(id) {
    const panel = panels[id];
    if (panel && panel.classList.contains('active')) {
      closePanel(id);
    } else {
      openPanel(id);
    }
  };

  window.toggleMaximizeMap = function() {
    document.body.classList.toggle('map-maximized');
  };

  window.openWiki = function() {
    window.open('https://cdn.2009scape.org/wiki/doku.php?id=start', '_blank');
  };

  // Tell the world-map iframe how far down to push its Leaflet controls so the
  // zoom (+/-) and legend buttons clear the fixed toolbar that overlays the map.
  // The toolbar can wrap to multiple rows, so the inset is measured live.
  function postMapTopInset() {
    const mapFrame = document.getElementById('map-frame');
    if (mapFrame && mapFrame.contentWindow) {
      mapFrame.contentWindow.postMessage({ type: 'setTopInset', value: minPanelTop() }, '*');
    }
  }

  // Keep maximized panels filling the map view, and re-push the map inset, when
  // the viewport (and thus the toolbar height/layout) changes.
  let resizeRaf = null;
  window.addEventListener('resize', function() {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(function() {
      resizeRaf = null;
      postMapTopInset();
      Object.keys(panels).forEach(function(id) {
        const panel = panels[id];
        if (!panel) return;
        if (panel._maximized) {
          applyRect(panel, mapViewRect());
        } else if (panel._vmaximized) {
          const view = mapViewRect();
          panel.style.top = Math.round(view.top) + 'px';
          panel.style.height = Math.round(view.height) + 'px';
        } else if (panel._tiled && panel._tiledZone) {
          // Reflow the tiled panel into its (possibly resized) zone so a
          // half-/quarter-snapped panel keeps matching its half/quarter.
          applyRect(panel, snapZoneRect(panel._tiledZone));
        }
      });
    });
  });

  // Push the inset once the map iframe has loaded (and again on a late ready
  // ping from the map itself, in case the load event was missed).
  (function wireMapInset() {
    const mapFrame = document.getElementById('map-frame');
    if (!mapFrame) return;
    if (mapFrame.contentWindow && mapFrame.contentDocument
        && mapFrame.contentDocument.readyState === 'complete') {
      postMapTopInset();
    }
    mapFrame.addEventListener('load', postMapTopInset);
  })();

  // Message routing from tool iframes
  window.addEventListener('message', function(event) {
    if (!event.data) return;
    const data = event.data;

    // The world map announces it is ready to receive its control inset.
    if (data.type === 'mapReady') {
      postMapTopInset();
    }

    // Use finite-number checks, not truthiness: 0 is a valid map coordinate.
    if (data.type === 'navigateTo' && Number.isFinite(data.x) && Number.isFinite(data.y)) {
      const mapFrame = document.getElementById('map-frame');
      if (mapFrame && mapFrame.contentWindow) {
        mapFrame.contentWindow.postMessage(data, '*');
      }
      closePanel('fairy-rings');
    }

    if (data.type === 'openNpcViewer') {
      // Deep-link to a specific NPC: prefer id, fall back to a name search.
      let src = './npc/index.html';
      if (data.npcId != null && data.npcId !== '') {
        src += '?id=' + encodeURIComponent(data.npcId);
      } else if (data.npcName) {
        src += '?search=' + encodeURIComponent(data.npcName);
      }
      openPanel('npc-viewer', src);
    }

    if (data.type === 'openDroptables') {
      // Open the drop tables panel, optionally filtered to the NPC's name.
      let src = './droptables/index.html';
      if (data.npcName) {
        src += '?search=' + encodeURIComponent(data.npcName);
      }
      openPanel('droptables', src);
    }
  });
})();
