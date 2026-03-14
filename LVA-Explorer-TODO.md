# LVA Explorer — Build Plan

> Interactive single-page research tool for exploring the Learning Value Architecture framework.
> **Status:** In Progress
> **File:** `LVA-Explorer.html` (single self-contained SPA)

---

## Phase 1: Foundation (HTML + CSS + Data)

### Stage 1.1 — Scaffold ✅
- [x] HTML head, meta, fonts, D3 import
- [x] CSS custom properties (light + dark theme tokens)
- [x] CSS reset, base typography, layout utilities
- [x] All component styles (cards, tables, charts, controls, tooltips)
- [x] Responsive breakpoints + reduced-motion support

### Stage 1.2 — HTML Structure ✅
- [x] Header with nav tabs, logo, theme toggle, hamburger
- [x] View 1: Overview (hero, stats bar, dimension cards placeholder, theory grid placeholder)
- [x] View 2: Dimension Explorer (radar, stacked bars, alluvial chart containers)
- [x] View 3: Profiles (profile grid container)
- [x] View 4: Level Map (sunburst + sidebar containers)
- [x] View 5: Evidence (heatmap tables for evidence + coverage)
- [x] View 6: Interventions (filter controls + list container)
- [x] View 7: Compare (selectors, radar, comparison table, detail panels)
- [x] View 8: About (framework explanation, level tables, construct search, sources, limitations)
- [x] Footer

### Stage 1.3 — Data Layer
- [ ] Define `DIMENSIONS` array (4 dimensions with id, name, color, question, levels array)
- [ ] Define `THEORIES` array (20 theories with name, author, year, scores, constructs, evidence, insights)
- [ ] Define `LEVELS` data (25 levels across 4 dimensions with descriptions, evidence grades, effect sizes)
- [ ] Define `INTERVENTIONS` data (level transitions with strategies, evidence, theory support)
- [ ] Define `CONSTRUCTS` flat list (construct name → theory → dimension mapping)

---

## Phase 2: Core Interactivity (JavaScript)

### Stage 2.1 — App Shell
- [ ] View router: tab clicks show/hide views, update URL hash, set active tab
- [ ] Theme toggle: light/dark mode with localStorage persistence
- [ ] Hamburger menu toggle for mobile
- [ ] Tooltip system: show/hide/position on hover

### Stage 2.2 — Overview View
- [ ] Render dimension cards from `DIMENSIONS` data (color dot, name, question, level count)
- [ ] Dimension card click → navigate to Dimension Explorer view
- [ ] Render theory mini-cards from `THEORIES` data (name, author, year)
- [ ] Draw mini radar charts on each theory card (4-axis, dimension scores)
- [ ] Theory card click → navigate to Profiles view with that theory selected

### Stage 2.3 — Dimension Explorer View
- [ ] Populate radar comparison dropdowns from THEORIES
- [ ] Draw multi-overlay radar chart (D3) for up to 3 selected theories
- [ ] Draw stacked horizontal bar chart showing all theories' dimension scores
- [ ] Sort buttons: re-sort bar chart by name or by any dimension score
- [ ] Populate alluvial dropdowns; draw alluvial/Sankey showing shared constructs between 2 theories
- [ ] Swap button for alluvial selectors

---

## Phase 3: Deep Views (JavaScript)

### Stage 3.1 — Profiles View
- [ ] Render profile cards for all 20 theories
- [ ] Each card: header (name, author, year), radar chart, insight quote, evidence note, construct tags
- [ ] Construct tags colored by dimension

### Stage 3.2 — Level Map (Sunburst)
- [ ] Build hierarchical data: LVA → Dimensions → Levels → Constructs
- [ ] Draw D3 sunburst/partition chart
- [ ] Click interaction: zoom into segment, update sidebar breadcrumb, title, detail text
- [ ] Breadcrumb navigation back to parent segments
- [ ] Color rings by dimension

### Stage 3.3 — Evidence View
- [ ] Populate evidence-by-level table from LEVELS data (level name, dimension, evidence badge, theory support, effect size)
- [ ] Evidence badges: strong/moderate/emerging with color coding
- [ ] Populate dimension coverage table: each theory row, cells showing alignment score per dimension
- [ ] Cell background intensity scaled by score (heatmap effect)
- [ ] Column header click to sort

### Stage 3.4 — Interventions View
- [ ] Render intervention rows from INTERVENTIONS data
- [ ] Each row: transition label, strategy summary, evidence grade, dimension
- [ ] Click to expand detail panel with full description
- [ ] Filter buttons by dimension (all / engagement / capability / portability / opportunity)

### Stage 3.5 — Compare View
- [ ] Populate theory A/B dropdowns
- [ ] Draw overlay radar for two theories
- [ ] Populate comparison table: dimension, score A, score B, difference
- [ ] Render detail panels side-by-side with key constructs and insights
- [ ] Swap button

### Stage 3.6 — About View
- [ ] Populate level tables for each dimension from LEVELS data
- [ ] Populate construct search table from CONSTRUCTS data
- [ ] Live search filter on construct name, theory, or dimension

---

## Phase 4: Polish + Ship

### Stage 4.1 — Closing the File
- [ ] Close `</body></html>` tags properly
- [ ] Verify file loads without errors in browser (no console errors)

### Stage 4.2 — Accessibility + UX
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels on charts and interactive controls
- [ ] Focus-visible styles
- [ ] Reduced-motion: skip animations

### Stage 4.3 — Cross-linking
- [ ] Link from main site (index.html) to LVA-Explorer.html
- [ ] Link from LVA-Explorer back to main site (already have back-link in header)

### Stage 4.4 — Final QA + Deploy
- [ ] Test all 8 views render correctly
- [ ] Test dark mode toggle
- [ ] Test mobile responsive (hamburger, stacked layouts)
- [ ] Test all chart interactions (radar, sunburst, alluvial, heatmap sort)
- [ ] Commit and push to branch
- [ ] Create pull request

---

## Summary

| Phase | Description | Tasks |
|-------|-------------|-------|
| 1 | Foundation (HTML + CSS + Data) | 17 |
| 2 | Core Interactivity (JS) | 14 |
| 3 | Deep Views (JS) | 17 |
| 4 | Polish + Ship | 9 |
| **Total** | | **57** |

### Current Progress
- **Phase 1, Stages 1.1–1.2:** Complete (HTML structure + all CSS)
- **Next up:** Stage 1.3 — Data Layer, then Phase 2
