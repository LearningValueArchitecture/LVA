# LVA Explorer — Improvement Plan

## Status: What's Already Done vs What Remains

Many items from the report are **already implemented** in prior commits:
- Radar SVG overflow → **FIXED** (commit 2a3b769)
- Theory card click → Theory Detail → **DONE** (navigateToTheory on overview cards)
- Dimension card click → Dimension Explorer → **DONE** (navigateToDimension)
- Intervention card expand → **DONE** (toggle .open class, aria-expanded)
- Theory Detail view → **BUILT** (full page with radar, constructs, related theories)
- Hash routing + deep linking → **DONE** (#theory/sdt, hashchange listener)
- Evidence table theory links → **DONE** (navigateToTheory onclick)
- Alluvial diagram → **BUILT** (curved bezier paths, node layout)
- About: MECE, Methodology, Version History, Limitations, Constructs DB → **ALL PRESENT**
- prefers-color-scheme → **DONE** (initTheme checks matchMedia)
- Leaked HTML comment → **NOT PRESENT** (all comments properly formed)

## Remaining Work — 4 Phases

### Phase 1: Design — Card Density & Empty States (7 changes)

**1.1 Overview theory cards: add key insight + dominant dimension tag**
- File: LVA-Explorer.html, `renderOverview()` (~line 2177)
- In the `.theory-mini` template, after `.theory-meta`, add a one-line truncated insight
  from `t.insight` (max 60 chars) and a dominant dimension badge
- CSS: add `.theory-insight` (font-size:0.75rem, color:text-muted, one-line ellipsis)
  and `.dim-badge` (pill with dimension color bg)
- Reduce mini-radar from 120×120 to 90×90

**1.2 Profile cards: default collapsed, expand on click**
- Currently all 20 cards are fully expanded (~740px each = 15,000px scroll)
- Change: cards start collapsed showing only header + mini radar (80×80) + one-line
  insight + dominant dimension badge + evidence badge
- Click toggles `.expanded` class to reveal full content (radar, description,
  constructs, effect size)
- CSS: `.profile-card .profile-body { display: none; }` and
  `.profile-card.expanded .profile-body { display: block; }`
- `.profile-card .profile-radar { display: none; }` collapsed,
  add a `.profile-mini-radar` (80×80) always visible
- JS: draw mini radars always; draw full radar only when expanded
- Update grid: 4 cols at 1200px+, 3 at 768px, 2 at 640px, 1 mobile

**1.3 Empty state panels: compact collapsed states**
- Dimensions radar comparison: replace 450px empty space with 60px inline bar
  containing dropdowns + ghost radar outline (4-axis grid, no polygon, 50% opacity)
- Evidence Strength Radar: same — compact inline until selection made
- Compare view: auto-scroll past suggestions when comparison loaded
- Pattern: wrap each in a `.chart-panel` that starts with `max-height: 80px;
  overflow: hidden` and expands via `.chart-panel.active { max-height: none; }`

**1.4 Dimension level descriptions: collapsible details**
- In `renderDimensionDeepDive()`, wrap level research text in `<details>` elements
- Summary shows: level name (bold, colored) + one-line indicator
- Expanding reveals: full description, evidence grade, theory mapping
- Default: collapsed

**1.5 Evidence table: dimension grouping**
- In `renderEvidence()`, add colored group header rows between dimension groups
- Add 4px left border per dimension (using dimension color) on each evidence row
- Group headers: "Engagement Levels (6)", "Capability Levels (7)", etc.

**1.6 Intervention grouping by dimension**
- In `renderInterventions()`, group cards under dimension section headers
- Each header: dimension color bar + "Engagement Transitions (5)" etc.
- Sections collapsible via `<details open>`

**1.7 Evidence badges: visual differentiation**
- CSS change: `.evidence-badge.strong` → solid filled green bg
- `.evidence-badge.moderate` → outlined amber (border only, no fill)
- `.evidence-badge.emerging` → dashed border, no fill

### Phase 2: Cross-View Navigation Polish (4 changes)

**2.1 Construct tags link to About constructs database**
- In profile cards and theory detail, make construct tag clicks navigate to
  About view with construct search pre-filled
- Add `onclick="navigateToConstruct('${c}')"` on `.construct-tag` elements
- `navigateToConstruct(name)`: navigateTo('about'), set #construct-search value,
  trigger filter

**2.2 Level names link to Dimension Explorer**
- In evidence table and intervention cards, make level names clickable
- Navigate to dimension-explorer filtered to that dimension
- `navigateToLevel(dimId)`: navigateTo('dimension-explorer'), click dim filter

**2.3 Suggested comparisons collapse after loading**
- In `loadComparison()`, after loading, scroll the compare view to the radar chart
- Add CSS: `.comparison-suggestions.collapsed { max-height: 60px; overflow: hidden; }`
- Show inline "Try: SDT vs COM-B | Dreyfus vs Bloom's | ..." bar when collapsed
- Toggle button to re-expand

**2.4 About view: table of contents sidebar**
- On desktop (>768px), add sticky sidebar with anchor links to each h2 section
- CSS: `.about-content` becomes grid with `grid-template-columns: 200px 1fr`
- Cap text column at `max-width: 68ch`
- On mobile: collapsible TOC at top

### Phase 3: Sunburst & Chart Polish (3 changes)

**3.1 Sunburst: only show 2 rings by default**
- Modify `renderSunburst()`: filter nodes to depth <= 2 (dimensions + levels)
- When a level is clicked, show its constructs as a list in the info panel
  instead of rendering a third ring
- Info panel shows: level name, description, evidence grade, associated theories,
  construct list

**3.2 Sunburst: improve dimension label contrast**
- Change arc labels to white bold (#fff) on dimension ring
- Position labels horizontally at arc center (not curved)
- Use text-shadow for readability: `0 1px 3px rgba(0,0,0,0.5)`

**3.3 Construct overlap section in Compare view**
- After the Comparison Analysis prose, add "Construct Mapping" section
- Two columns: Theory A constructs | Theory B constructs
- Grouped by shared LVA dimension, color-coded
- Shared constructs highlighted with connecting lines or bold treatment

### Phase 4: Responsive & Polish (4 changes)

**4.1 Test and fix responsive at 375px and 768px**
- Verify all views at mobile width (375px) and tablet (768px)
- Fix any overflow, truncation, or layout issues
- Ensure filter button rows wrap cleanly
- Ensure charts scale down properly

**4.2 About text column max-width**
- Add `max-width: 68ch` to `.about-content p, .about-content li`
- Improves readability on wide screens

**4.3 Consistent effect size formatting**
- Audit all effect size strings in THEORIES array
- Standardize to format: "d = X.XX–X.XX" or "r = X.XX" where applicable
- For frameworks without effect sizes: "Validated framework (no single effect size)"

**4.4 Keyboard navigation: arrow keys between tabs**
- Add arrow key left/right navigation between nav tabs
- When a tab is focused, left arrow → previous tab, right arrow → next tab
- Home → first tab, End → last tab (WAI-ARIA tabs pattern)

## Implementation Order

1. Phase 1.2 (profile collapse) — highest visual impact
2. Phase 1.1 (overview card redesign) — gateway view improvement
3. Phase 1.3 (empty states) — removes "broken" feeling
4. Phase 1.5 + 1.6 (evidence + intervention grouping)
5. Phase 1.4 (dimension collapsible details)
6. Phase 1.7 (evidence badges)
7. Phase 2.1–2.4 (navigation polish)
8. Phase 3.1–3.3 (sunburst + compare)
9. Phase 4.1–4.4 (responsive + polish)

All changes in LVA-Explorer.html (single file SPA).
