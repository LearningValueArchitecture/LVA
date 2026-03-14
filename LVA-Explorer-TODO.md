# LVA Explorer — Build Plan

> Interactive single-page research tool for exploring the Learning Value Architecture framework.
> **Status:** Phase 1–3 Complete, Phase 4 In Progress
> **File:** `LVA-Explorer.html` (single self-contained SPA, 1669 lines)

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

### Stage 1.3 — Data Layer ✅
- [x] Define `DIMENSIONS` array (4 dimensions with id, name, color, question, levels array)
- [x] Define `THEORIES` array (20 theories with name, author, year, scores, constructs, evidence, insights)
- [x] Levels data embedded in DIMENSIONS (25 levels across 4 dimensions with descriptions)
- [x] Define `INTERVENTIONS` data (23 level transitions with strategies, evidence, theory support)
- [x] Define `CONSTRUCTS` flat list (auto-generated from THEORIES dimMap)

---

## Phase 2: Core Interactivity (JavaScript) ✅

### Stage 2.1 — App Shell ✅
- [x] View router: tab clicks show/hide views, update URL hash, set active tab
- [x] Theme toggle: light/dark mode with localStorage persistence
- [x] Hamburger menu toggle for mobile
- [x] Tooltip system: show/hide/position on hover

### Stage 2.2 — Overview View ✅
- [x] Render dimension cards from `DIMENSIONS` data (color dot, name, question, level count)
- [x] Dimension card click → navigate to Dimension Explorer view
- [x] Render theory mini-cards from `THEORIES` data (name, author, year)
- [x] Draw mini radar charts on each theory card (4-axis, dimension scores)
- [x] Theory card click → navigate to Profiles view

### Stage 2.3 — Dimension Explorer View ✅
- [x] Populate radar comparison dropdowns from THEORIES
- [x] Draw multi-overlay radar chart (D3) for up to 3 selected theories
- [x] Draw stacked horizontal bar chart showing all theories' dimension scores
- [x] Sort buttons: re-sort bar chart by name or by any dimension score
- [x] Populate alluvial dropdowns; draw alluvial showing shared constructs between 2 theories
- [x] Swap button for alluvial selectors

---

## Phase 3: Deep Views (JavaScript) ✅

### Stage 3.1 — Profiles View ✅
- [x] Render profile cards for all 20 theories
- [x] Each card: header (name, author, year), radar chart, insight quote, evidence note, construct tags
- [x] Construct tags colored by dimension

### Stage 3.2 — Level Map (Sunburst) ✅
- [x] Build hierarchical data: LVA → Dimensions → Levels → Constructs
- [x] Draw D3 sunburst/partition chart
- [x] Click interaction: update sidebar breadcrumb, title, detail text
- [x] Breadcrumb navigation
- [x] Color rings by dimension

### Stage 3.3 — Evidence View ✅
- [x] Populate evidence-by-level table (level name, dimension, evidence badge, theory support, effect size)
- [x] Evidence badges: strong/moderate/emerging with color coding
- [x] Populate dimension coverage heatmap: each theory row, cells showing alignment % per dimension
- [x] Cell background intensity scaled by score (heatmap effect)

### Stage 3.4 — Interventions View ✅
- [x] Render intervention rows from INTERVENTIONS data
- [x] Each row: transition label, strategy summary, evidence grade, dimension
- [x] Click to expand detail panel with full description
- [x] Filter buttons by dimension (all / engagement / capability / portability / opportunity)

### Stage 3.5 — Compare View ✅
- [x] Populate theory A/B dropdowns
- [x] Draw overlay radar for two theories
- [x] Populate comparison table: dimension, score A, score B, difference
- [x] Render detail panels side-by-side with key constructs and insights
- [x] Swap button

### Stage 3.6 — About View ✅
- [x] Populate level tables for each dimension from DIMENSIONS data
- [x] Populate construct search table from CONSTRUCTS data
- [x] Live search filter on construct name, theory, or dimension

---

## Phase 4: Polish + Ship

### Stage 4.1 — Closing the File ✅
- [x] Close `</body></html>` tags properly
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

| Phase | Description | Tasks | Status |
|-------|-------------|-------|--------|
| 1 | Foundation (HTML + CSS + Data) | 17 | ✅ Complete |
| 2 | Core Interactivity (JS) | 14 | ✅ Complete |
| 3 | Deep Views (JS) | 17 | ✅ Complete |
| 4 | Polish + Ship | 9 | In Progress |
| **Total** | | **57** | **48/57 done** |

### Current Progress
- **Phases 1–3:** Complete (all views functional with data, charts, and interactivity)
- **Next up:** Stage 4.2 — Accessibility, Stage 4.3 — Cross-linking, Stage 4.4 — QA + Deploy
