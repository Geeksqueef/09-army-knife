(function() {
  'use strict';

  const panels = {};
  let activePanel = null;
  let nextZ = 300;

  const panelConfigs = {
    'fairy-rings': { title: 'Fairy Ring Codes', src: './fairy-rings.html', width: 800, height: 500 },
    'skill-calc': { title: 'Skill Calculator', src: './skillcalculator.html', width: 700, height: 500 },
    'charm-drop': { title: 'Charm Drop Rates', src: './charmdrop.html', width: 900, height: 550 },
    'shop-viewer': { title: 'Shop Inventories', src: './shopsearch.html', width: 900, height: 550 },
    'droptables': { title: 'Drop Tables', src: './droptables/index.html', width: 1000, height: 650 },
    'npc-viewer': { title: 'NPC Viewer', src: './npc/index.html', width: 900, height: 600 },
    'npc-3d': { title: '3D NPC Viewer', src: './3DNpc/09NPC3d.html', width: 900, height: 600 }
  };

  function getPanel(id) {
    if (!panels[id]) {
      panels[id] = createPanel(id);
    }
    return panels[id];
  }

  function createPanel(id) {
    const cfg = panelConfigs[id];
    if (!cfg) return null;

    const panel = document.createElement('div');
    panel.className = 'dashboard-panel';
    panel.id = 'panel-' + id;
    panel.style.width = cfg.width + 'px';
    panel.style.height = cfg.height + 'px';
    panel.style.left = Math.max(20, (window.innerWidth - cfg.width) / 2) + 'px';
    panel.style.top = Math.max(60, (window.innerHeight - cfg.height) / 2) + 'px';
    panel.style.zIndex = ++nextZ;

    panel.innerHTML = `
      <div class="dashboard-panel-header">
        <h3>${cfg.title}</h3>
        <button class="close-btn" aria-label="Close">&times;</button>
      </div>
      <div class="dashboard-panel-body">
        <iframe src="${cfg.src}" title="${cfg.title}"></iframe>
      </div>
    `;

    document.body.appendChild(panel);

    const header = panel.querySelector('.dashboard-panel-header');
    const closeBtn = panel.querySelector('.close-btn');

    header.addEventListener('mousedown', function(e) {
      if (e.target === closeBtn) return;
      bringToFront(id);
      startDrag(e, panel);
    });

    panel.addEventListener('mousedown', function() {
      bringToFront(id);
    });

    closeBtn.addEventListener('click', function() {
      closePanel(id);
    });

    return panel;
  }

  function bringToFront(id) {
    const panel = panels[id];
    if (!panel) return;
    if (activePanel === panel) return;
    panel.style.zIndex = ++nextZ;
    activePanel = panel;
  }

  function startDrag(e, panel) {
    const startX = e.clientX;
    const startY = e.clientY;
    const rect = panel.getBoundingClientRect();
    const startLeft = rect.left;
    const startTop = rect.top;

    function onMouseMove(ev) {
      let newLeft = startLeft + (ev.clientX - startX);
      let newTop = startTop + (ev.clientY - startY);
      const maxLeft = window.innerWidth - panel.offsetWidth;
      const maxTop = window.innerHeight - panel.offsetHeight;
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));
      panel.style.left = newLeft + 'px';
      panel.style.top = newTop + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  window.openPanel = function(id) {
    const panel = getPanel(id);
    if (!panel) return;
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
    const mapFrame = document.getElementById('map-frame');
    if (mapFrame && mapFrame.contentWindow) {
      mapFrame.contentWindow.postMessage({ type: 'dashboardMaximizeToggled' }, '*');
    }
  };

  window.openWiki = function() {
    window.open('https://cdn.2009scape.org/wiki/doku.php?id=start', '_blank');
  };

  window.openRsWikiReader = function() {
    window.open('https://github.com/AdamLantz/2009scape-wiki-reader', '_blank');
  };

  // Message routing from tool iframes
  window.addEventListener('message', function(event) {
    if (!event.data) return;
    const data = event.data;

    if (data.type === 'navigateTo' && data.x && data.y) {
      const mapFrame = document.getElementById('map-frame');
      if (mapFrame && mapFrame.contentWindow) {
        mapFrame.contentWindow.postMessage(data, '*');
      }
      closePanel('fairy-rings');
    }

    if (data.type === 'closePopup') {
      // Find which panel the message came from and close it
      for (const id in panels) {
        const iframe = panels[id].querySelector('iframe');
        if (iframe && iframe.contentWindow === event.source) {
          closePanel(id);
          break;
        }
      }
    }

    if (data.type === 'openNpcViewer' && data.npcId) {
      openPanel('npc-viewer');
    }
  });
})();
