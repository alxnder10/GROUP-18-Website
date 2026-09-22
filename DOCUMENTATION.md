# GROUP.18 Website — Documentation

Full reference for how this site is built, how content is edited, and how to extend it. For a quick overview and setup commands, see [README.md](README.md).

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Styling | Plain CSS (no framework), organized by section in `App.css` |
| Hero background | [`ogl`](https://github.com/oframe/ogl) — lightweight WebGL, powers `FaultyTerminal` |
| Hosting | Vercel, auto-deploys on push to `main` |
| Repo | [alxnder10/GROUP-18-Website](https://github.com/alxnder10/GROUP-18-Website) |

There is no CMS, backend, or database. All content lives in one JSON file (`src/data/team.json`) and is read at build time.

---

## 2. Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
npm run lint       # ESLint
```

Pushing to `main` on GitHub triggers a Vercel deployment automatically — no manual deploy step.

---

## 3. Project Structure

```
src/
  main.jsx                  # React entry point, mounts <App />
  App.jsx                    # every page section, in one file
  App.css                    # every page style, organized by section (see below)
  index.css                  # global reset / base styles (html, body, #root)
  data/
    team.json                 # ALL editable content — see section 4
  components/
    FaultyTerminal.jsx         # WebGL shader background used in the hero — do not remove
    FaultyTerminal.css
  assets/                     # unused Vite template leftovers (react.svg, vite.svg, hero.png)
public/
  favicon.svg, icons.svg
  images/                     # team member photos + partner NGO logo
  app/ExamSaathi.apk           # leftover asset from a removed "Apps" section, currently unreferenced
```

`App.jsx` renders sections top-to-bottom inside a single `<main className="page">`. Each section is a `<section>` with its own `id` (used by nav anchor links) and its own CSS block in `App.css`.

---

## 4. Content Data (`src/data/team.json`)

This is the only file most content edits should touch. Editing it does not require touching any component code — React just maps over the values.

### `about`
```json
"about": { "lead": "...", "body": "..." }
```
Rendered in the About section as the bold lead line and the paragraph under it.

### `stats`
```json
"stats": [ { "value": "10", "label": "Members" }, ... ]
```
The three-number stat bar under the About text (Members / Love for community / Hands-On).

### `members`
Array of exactly 10 team member objects (grid is fixed at 10 slots):
```json
{
  "id": 1,
  "name": "Lance Dias",
  "rollNo": "11138",
  "role": "Developer",
  "bio": "...",
  "image": "/images/Lance.jpeg",
  "socials": { "github": "...", "linkedin": "..." }
}
```
- **Empty slot convention:** if `name` is `""`, the card renders as an open "TBD" placeholder with a dashed "Photo needed" box instead of breaking. This is how unfilled team slots are represented — **never invent a name**, leave the fields empty until the real person is added.
- `image` must point to a file that actually exists under `public/images/` (referenced as `/images/<file>`). A missing file silently renders a broken image icon — always confirm the file was added before setting this field.
- `socials.github` / `socials.linkedin` are optional — the icon row only renders whichever links are non-empty.
- Slot **10** is currently open.

### `partner`
The Partner NGO section content (currently [Sparkling Wings](https://sparklingwingsngo.org/)):
```json
{
  "name": "SPARKLING WINGS",
  "logo": "/images/sparkling-wings-logo.webp",
  "founder": "Pavan Keshari",
  "founded": "2017",
  "location": "Mumbai, India",
  "tagline": "...",
  "mission": "...",
  "body": "...",
  "programs": ["Education", "Women Empowerment", ...],
  "url": "https://sparklingwingsngo.org/"
}
```
`programs` renders as pill chips; `founded`, `location`, and `programs.length` populate the stats row automatically. `logo` is optional — if empty, no logo badge renders.

### `roadmap`
Powers the Project Updates section — a three-column Done / In Progress / Planned board:
```json
"roadmap": {
  "done":       [ { "title": "...", "note": "..." } ],
  "inProgress": [ { "title": "...", "note": "..." } ],
  "planned":    [ { "title": "...", "note": "..." } ]
}
```
Each array can hold any number of items. `note` is free text — used for dates, short descriptions, or `"Details to be announced"` when specifics aren't known yet. To move an item's status (e.g. Planned → In Progress), just cut/paste its object into the other array.

### `contact`
```json
"contact": { "email": "team18works@gmail.com", "instagram": "", "github": "" }
```
- If `email` is empty, the Contact section shows a dashed "EMAIL COMING SOON" placeholder instead of a broken `mailto:` link.
- `instagram` / `github` (and `linkedin`, if added) only render an icon if non-empty.

---

## 5. Sections Walkthrough

Numbering shown in the on-page labels (`01 — INTRODUCTION`, etc.) is cosmetic and must be kept sequential if sections are reordered.

| # | Section | id | Source of content |
|---|---|---|---|
| 01 | Hero | `#home` | Hardcoded copy in `App.jsx` + `FaultyTerminal` background |
| 02 | About | `#about` | `team.json` → `about`, `stats` |
| 03 | Team | `#team` | `team.json` → `members` |
| 04 | Partner NGO | `#partner` | `team.json` → `partner` |
| 05 | Project Updates | `#updates` | `team.json` → `roadmap` |
| 06 | Contact | `#contact` | `team.json` → `contact` |

The nav bar (`.navbar`) links to each section's `id` via `#anchor` links. When adding a new section, add its link there too.

### Hero
Full-viewport `FaultyTerminal` WebGL background (see section 6), with the "WE ARE GROUP.18" heading, intro label, description, and the "MEET THE TEAM" scroll button. **Do not remove or replace `FaultyTerminal`** — it's the site's signature visual element per the original design brief.

### About
Communicates who GROUP.18 is: ~10 second-year engineering students who build, experiment, and learn together.

### Team
Grid of member cards (photo, roll no, role, bio-on-hover, social icons). Fixed at 10 slots; unfilled ones render as open placeholders (see `members` above).

### Partner NGO
Spotlights Sparkling Wings, GROUP.18's community partner. Two-column layout: text content on the left, logo badge on the right (stacks on mobile).

### Project Updates
Three-column status board (Done / In Progress / Planned) tracking GROUP.18's own projects and activities — not the NGO's programs.

### Contact
Email link (or placeholder) and optional social icons, closes with a "GROUP.18 © 2026" footer note.

---

## 6. FaultyTerminal Component

`src/components/FaultyTerminal.jsx` + `.css` — a WebGL shader (via `ogl`) rendering an animated ASCII/digit-grid effect, used as the hero background. It supports mouse-reactive distortion and a page-load fade-in animation.

Key props currently used in the hero:
```jsx
<FaultyTerminal
  scale={1.2} gridMul={[2, 1]} digitSize={1.4} timeScale={0.3}
  scanlineIntensity={0.5} glitchAmount={1} flickerAmount={0.8}
  noiseAmp={1} chromaticAberration={0} dither={0} curvature={0.08}
  tint="#ffffff" mouseReact={true} mouseStrength={0.5}
  pageLoadAnimation={true} brightness={0.35}
/>
```
It renders into `.faulty-terminal-container`, which `App.css` forces to fill its parent (`.terminal-background`) edge-to-edge via `position: absolute; inset: 0`. A `.terminal-overlay` radial gradient sits above it to darken the edges without hiding the effect.

**This component should not be removed or swapped for a static image** unless there's a genuine technical reason — it's a deliberate design choice from the original brief, not a placeholder.

---

## 7. Styling Conventions

- `App.css` is organized into commented blocks per section (`/* ABOUT */`, `/* TEAM */`, etc.) — keep new sections in the same pattern.
- Colors are explicit, never inherited — headings and body text set `color: #ffffff` / `#888888` etc. directly, because inherited color previously caused invisible text on some devices. **Always set text color explicitly on new elements.**
- The site is strictly black / white / gray — no other hues, per the design brief (dark, minimal, high-end agency aesthetic).
- `.reveal` is a scroll-triggered fade/slide-up animation class, applied via an `IntersectionObserver` set up once in `App.jsx`. Add `className="reveal"` to any new element that should animate in on scroll; `transition-delay` inline or in CSS staggers multiple items.
- Single mobile breakpoint: `@media (max-width: 700px)` — all mobile overrides live in one block near the bottom of `App.css`. Add new section overrides there rather than creating new breakpoints.
- Buttons reuse `.hero-button` where possible (bordered, blurred background, inverts on hover) rather than defining new button styles from scratch.

---

## 8. Adding a New Section (pattern to follow)

1. Add the content to `team.json` if it's dynamic/editable data.
2. Add a nav link in `.navbar .nav-links` pointing to a new `#anchor`.
3. Add the `<section id="anchor">` in `App.jsx`, following an existing section's structure (background div, content wrapper, reveal-animated children).
4. Add its CSS block in `App.css`, immediately before the next section's block, using the same naming convention (`.<name>-section`, `.<name>-content`, etc.).
5. Add a mobile override in the existing `@media (max-width: 700px)` block if the layout needs to stack or resize.
6. Renumber the on-page section labels (`0X — NAME`) if the new section is inserted in the middle rather than appended.
7. Run `npm run build` to confirm no errors, then visually check desktop + mobile before committing.

---

## 9. Known Placeholders / Open Items

- **Team slot 10** — still an open "TBD" card.
- **Contact socials** (`instagram`, `github`) — empty, so no icons currently render in the Contact footer.
- **Textile AI Detection Model** (Planned roadmap item) — note is `"Details to be announced"`; update once specifics are confirmed.
- **`public/app/ExamSaathi.apk`** — leftover binary from a previously removed "Apps & Projects" section. Unreferenced by any current code; safe to delete if it's confirmed no longer needed, or keep if the Apps section may return later.
- **`src/App-backup.jsx`** — an untracked, uncommitted snapshot of `App.jsx` from before recent changes. Not part of the build; kept in the working directory but never staged. Safe to delete once confirmed unneeded.
