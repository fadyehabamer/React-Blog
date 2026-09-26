# React FEA Blog

[![CI](https://github.com/fadyehabamer/React-Blog/actions/workflows/ci.yml/badge.svg)](https://github.com/fadyehabamer/React-Blog/actions/workflows/ci.yml)

> Blog built with React.js and Fake Json Server

#### Features:
- View Posts
- Add new Post
- Delete exisiting posts
- Implement Fake Json server
- Fetch Data from Json server

**Live demo:** https://fea-reactblog.vercel.app

#### Note:
> The live deployment has no API behind it, so it shows an error instead of posts.
> Run the JSON server locally (below), or deploy one and set `VITE_API_URL`.

#### Getting started
Built with [Vite](https://vite.dev). Requires Node.js 22.12+ (the dev server and build also run on 20.19+; the Vitest test runner needs 22.12+).

```bash
npm install
# terminal 1: fake REST API on http://localhost:4000 backed by data/db.json
npx json-server@0.17.4 --watch data/db.json --port 4000
# terminal 2: the React app on http://localhost:3000
npm run dev
```

#### Configuration
| Variable | Default | Description |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:4000` | Base URL of the json-server API (put it in `.env.local` or your hosting provider's env settings; it is inlined at build time). See `.env.example`. |

> Vite only exposes variables prefixed with `VITE_`. The old Create React App name `REACT_APP_API_URL` is no longer read.

#### Scripts
| Command | Description |
| --- | --- |
| `npm run dev` (or `npm start`) | Start the Vite dev server on http://localhost:3000 |
| `npm test` | Run the Vitest / Testing Library tests (watch mode; `npm test -- --run` for a single run) |
| `npm run lint` | Lint with ESLint (flat config, CRA rule set) |
| `npm run build` | Production build into `build/` |
| `npm run preview` | Serve the production build locally |
