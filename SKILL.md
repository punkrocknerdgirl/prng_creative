---
name: prng-design
description: Use this skill to generate well-branded interfaces and assets for PRNG Bookkeeping Services (punkrocknerdgirl), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** PRNG Bookkeeping Services — "Clean books. Clear systems. No BS." Punk-meets-spreadsheet; plum (#5C1F3B) + pink (#C9538C) on blush/ink, sharp corners, mono labels.
- **Two public voices:** marketing (Roboto Black, professional) and the Workshop zine (Playfair Display italic, graph-paper grid, `// ` eyebrows).
- **Tokens:** `styles.css` → `tokens/*.css`. Link `styles.css` and use the CSS custom properties.
- **Components:** bundled under `window.PRNGDesignSystem_4a3ea3` (Button, Badge, Pill, Eyebrow, Card, Input, Select, StatCallout, StatusTag, DataTable). Each has a `.prompt.md` with usage.
- **UI kits:** `ui_kits/prngbooks` (marketing), `ui_kits/workshop` (zine).
- **Assets:** `assets/` — logo, banner, Ernie portrait + cartoon.

## House rules
- Pink is the one accent — use it for borders, links, accent bars, and a single highlighted word per headline.
- Keep the brand palette and the working (data) palette separate.
- Emoji only as service-card icons (📒💸👥⚙️📊🚚) and the ✓ on credentials. Never in body copy.
- Playfair italic is the zine voice only — never on marketing pages or reports.
- Sharp corners (2px buttons, 4px cards), gentle plum-tinted shadows, ~2px hover lift. No hype, no jargon.
