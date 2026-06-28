# 20xxScape Wiki Reader 📜✨

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-red.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Platform: Web](https://img.shields.io/badge/Platform-Web-1a1714.svg)](https://github.com)
[![Status: Open Source](https://img.shields.io/badge/Community-2009Scape-gold.svg)](https://2009scape.org)

A lean, high-performance tool built for the **2009Scape** & **2011Scape** community. This reader allows you to travel back in time and view the RuneScape Wiki exactly as it appeared during the 2009-2011 era. No bloat, no trackers, just three files and raw MediaWiki power.

> [!IMPORTANT]
> **LEGAL PROTECTION:** This project is licensed under the **AGPL-3.0**. This is a "Copyleft" license. If you host this tool or a modified version of it as a web service, you **MUST** make your full source code available to your users. Closed-source "black box" forks are strictly prohibited.

## 🛠️ The Toolset

*   **Timeline Portal:** Search for any article and automatically find the exact `oldid` for a specific date (default: April 1, 2011).
*   **Find Earliest:** A forensic history scanner. Enter a keyword (like "shear" or "clue scroll") and the tool scans every version of a page from its creation to find the very first time that text appeared.
*   **Zero-Database Bookmarks:** Save historical revisions directly to your browser's `localStorage`. Your data never leaves your machine.
*   **Seashell Theme:** Includes a high-contrast dark mode (#1a1714) and a warm "Seashell" light mode toggle.
*   **Search History:** Keeps track of your recent research sessions for quick jumping between articles.

## 🚀 Deployment

This is a client-side application. You can host it for free on **GitHub Pages** in seconds:

1.  **Fork** this repo.
2.  Go to **Settings > Pages**.
3.  Set the source to **Deploy from a branch** and select `main`.
4.  Your portal is live at `https://<your-username>.github.io/<repo-name>/`.

## 📂 File Structure

*   `index.html` - The interface skeleton and "Find Earliest" controls.
*   `style.css` - The 2009Scape aesthetic, including the Cyan title highlights and Seashell theme.
*   `app.js` - The engine that talks to the RuneScape Wiki API and handles the time-travel logic.

## 🤝 Contributing

We value open tools for open games. If you improve the history-scanning algorithm or the UI:
1. Fork it.
2. Commit your changes.
3. Open a Pull Request.
4. Keep it open.

---
*Built for the 2009Scape & 2011scape Community. Protect the source.*
