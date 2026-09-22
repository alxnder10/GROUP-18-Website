# GROUP.18 — Team Website

The official website for **GROUP.18**, a team of ~10 second-year engineering students who build, experiment, and ship projects together. Built as a dark, minimal, futuristic single-page site.

Live site deployed via **Vercel**, source on **GitHub**: [alxnder10/GROUP-18-Website](https://github.com/alxnder10/GROUP-18-Website).

## Tech Stack

- **React 19** + **Vite** (`react-dom`)
- **ogl** — lightweight WebGL library powering the animated hero background
- Plain CSS (no framework) — organized in `App.css` by section

## Getting Started

```bash
npm install
npm run dev      # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Documentation

Full docs — project structure, every section explained, the `team.json` content schema, styling conventions, and how to add a new section — live in **[DOCUMENTATION.md](DOCUMENTATION.md)**.

Quick summary: the site has six sections (Hero, About, Team, Partner NGO, Project Updates, Contact), and almost all content — team roster, partner info, roadmap, contact details — is data-driven from `src/data/team.json`, so most updates don't require touching component code.
