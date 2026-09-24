# React FEA Blog
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
> Run the JSON server locally (below), or deploy one and set `REACT_APP_API_URL`.

#### Getting started
Requires Node.js 14+.

```bash
npm install
# terminal 1: fake REST API on http://localhost:4000 backed by data/db.json
npx json-server@0.17.4 --watch data/db.json --port 4000
# terminal 2: the React app on http://localhost:3000
npm start
```

#### Configuration
| Variable | Default | Description |
| --- | --- | --- |
| `REACT_APP_API_URL` | `http://localhost:4000` | Base URL of the json-server API (put it in `.env.local` or your hosting provider's env settings; it is read at build time) |

#### Scripts
| Command | Description |
| --- | --- |
| `npm start` | Start the dev server |
| `npm test` | Run the Jest / Testing Library tests |
| `npm run build` | Production build into `build/` |
