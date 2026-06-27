# The Workshop — punkrocknerdgirl.com UI Kit

High-fidelity recreation of **punkrocknerdgirl.com**, the personal build-log / zine site (the "workshop" behind PRNG Bookkeeping). This is the brand's editorial voice: Playfair Display italic display type, graph-paper grid on dark plum panels, `// mono` eyebrows, and zine-style split banners.

## Structure (`Workshop.jsx`)
- `WHeader` / `WHero` — graph-paper hero with italic display headline.
- `SplitBanner` — "workshop" vs "front desk" two-up.
- `WhatLivesHere` — 4 pillar cards.
- `FieldNotes` — note grid on dark plum.
- `ProjectsLog` — build log rows (composes `StatusTag`).
- `WAbout` / `WFooter`.

## Composes
`Eyebrow` (slash style), `Button`, `StatusTag` from `window.PRNGDesignSystem_4a3ea3`.

## When to use this voice
Internal build notes, workflow sheets, concept pages, anything editorial/personal. The marketing site (`prngbooks`) is the buttoned-up client-facing counterpart.
