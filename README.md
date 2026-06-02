# nocti.dev

Personal portfolio site with a terminal / CRT aesthetic — built with React (CDN), no build step required.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

---

<!-- Replace with an actual screenshot or GIF of the site -->
<!-- ![Preview](docs/preview.gif) -->

## Features

- **CRT effects** — scanlines, glow, flicker via CSS
- **Multiple themes** — Ayu and more via `data-theme` attribute
- **Neofetch-style** system info panel
- **Terminal commands** — interactive prompt UI
- **Zero build step** — React and Babel loaded from CDN; just open or serve

## Tech Stack

| Layer | Choice |
|-------|--------|
| UI | React 18 (CDN) |
| Transpilation | Babel Standalone |
| Styling | Vanilla CSS + CSS variables |
| Fonts | Fira Code (Google Fonts) |
| Server | Express 5 |

## Getting Started

### Node.js + Express (recommended)

```bash
git clone https://github.com/IgnacioToledoDev/personal-web.git
cd personal-web
npm install
npm start
# → http://localhost:3000
```

For development with auto-restart:

```bash
npm run dev
```

Set a custom port via env var:

```bash
PORT=8080 npm start
```

### Without Node.js

```bash
# Python
python -m http.server 3000

# npx
npx serve .
```

## Customization

All content lives in **`data.js`** — no framework config, no env vars. Edit it and refresh.

| Section | Key | What it controls |
|---------|-----|-----------------|
| Identity | `user`, `host`, `ascii` | Terminal prompt and ASCII banner |
| Neofetch | `neofetch.rows` | System info panel (OS, stack, langs…) |
| About | `about.lead`, `about.meta` | Bio text and meta tags |
| Projects | `projects[]` | Cards with name, description, tags, URL |
| Skills | `skills[]` | Skill groups with proficiency bars |
| Experience | `experience[]` | Work history entries |
| Links | `links[]` | Footer social / contact links |

**Themes** — change the `data-theme` attribute on `<html>` in `index.html`:

```html
<html lang="es" data-theme="ayu">
```

**CRT effects** — toggle classes on `<body>`:

```html
<body class="crt-scan crt-glow crt-flicker">
```

Remove any class to disable that specific effect.

## Project Structure

```
personal-web/
├── server.js         # Express server — serves static files on PORT (default 3000)
├── package.json      # npm scripts: start, dev
├── index.html        # Entry point — loads CDN scripts, sets theme
├── data.js           # All site content (edit this)
├── styles.css        # CRT effects, themes, layout
├── components.jsx    # Reusable UI components
├── app.jsx           # Main app logic and command handling
├── root.jsx          # React root mount
└── tweaks-panel.jsx  # Dev panel for live theme tweaks
```

## License

MIT — fork it, customize it, make it yours.
