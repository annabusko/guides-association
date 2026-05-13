# Белорусская ассоциация экскурсоводов и гидов-переводчиков

Production website for the Belarusian Association of Tour Guides and Interpreters.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 16, Semantic UI React |
| State | Redux, react-redux |
| Routing | React Router DOM v5 (HashRouter) |
| i18n | i18next, react-i18next |
| Styles | SCSS (node-sass), Semantic UI CSS |
| Slider | react-slick |
| Email | emailjs-com |
| Build | Create React App (react-scripts 3) |

---

## Required Node Version

Node **14** (see `.nvmrc`).

Using nvm:
```bash
nvm install 14
nvm use
```

---

## Install

```bash
npm install
```

---

## Local Development

```bash
npm start
```

Opens at `http://localhost:3000` — uses `HashRouter` for all routing (e.g. `/#/history`).

---

## Build

```bash
npm run build
```

Outputs a static production bundle to the `build/` directory. No server is required at runtime.

---

## Deployment (cPanel static hosting)

This project is deployed as a static site on a cPanel server:

1. Run `npm run build` locally.
2. Upload the entire contents of the `build/` directory into `public_html/` on the cPanel server.
3. No `.htaccess` rewrite rules are needed — the app uses **HashRouter**, so all navigation happens client-side via URL hash fragments (`/#/page`). The server only ever serves `index.html`.

> **Important:** Do not change the router to BrowserRouter without also configuring server-side redirects. HashRouter is intentional and keeps deployment simple.

---

## SEO Notes

- All public URLs use hash-based routing (`/#/history`, `/#/board`, etc.) and must not be changed.
- The `build/` output is indexed by Google under the current URL structure. Changing routes or switching away from HashRouter would break existing search rankings.

---

## Running Tests

```bash
npm test
```

---

## Performance Recommendations (images)

These are not applied automatically — compress manually before deploying:

- **Slider images** (`src/assets/images/slider/*.jpg`): Full-width photos. Compress to ≤200 KB each. Use tools like [Squoosh](https://squoosh.app/) or `imagemin`.
- **Group/hero images** (`src/assets/images/different/*.jpg`): Page header backgrounds. Target ≤300 KB each.
- **Board & person photos** (`board/`, `people/`): Displayed at small sizes (~150 px). Target ≤50 KB each.

---

## Project Garbage

The file `bash.exe.stackdump` in the project root is a leftover Windows Bash crash dump. It is safe to delete:

```bash
rm bash.exe.stackdump
```
