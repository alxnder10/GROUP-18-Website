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

## Project Structure

```
src/
  App.jsx                 # all page sections
  App.css                 # all page styles, organized by section
  index.css                # global reset / base styles
  data/team.json           # about copy, stats, team roster, partner NGO, contact info
  components/
    FaultyTerminal.jsx     # WebGL (ogl) shader background used in the hero
    FaultyTerminal.css
public/
  images/                  # team member photos
```

Team, About, Partner and Contact content is data-driven from `src/data/team.json` — edit that file to update copy, add team members, or fill in contact details without touching component code.

## Sections

1. **Hero** — full-viewport `FaultyTerminal` WebGL background, "WE ARE GROUP.18" intro, CTA to the Team section.
2. **About** — who GROUP.18 is, stats bar.
3. **Team** — grid of ~10 members (name, roll no, role, bio, photo, socials). Empty slots render as open placeholders until filled in `team.json`.
4. **Partner NGO** — spotlight on our community partner, [Sparkling Wings](https://sparklingwingsngo.org/), a Mumbai-based NGO focused on education, women empowerment, animal welfare, environmental protection, and poverty alleviation.
5. **Contact** — email and social links, sourced from `team.json` (renders a placeholder until real contact details are added).

## Recent Changes

- Removed the "Apps & Projects" section (ExamSaathi download card) and its nav link — not currently part of the site's scope.
- Added the **Partner NGO** section spotlighting Sparkling Wings, with program tags, quick stats, and a link to their site.
- Added the **Contact** section with an email link and optional social icons (GitHub / Instagram / LinkedIn), driven by `team.json`.
