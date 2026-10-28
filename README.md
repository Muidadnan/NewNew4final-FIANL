# THE AISLE EFFECT — FIT3179 DV2 Supermarket Shopping

A new editorial grocery-report layout with **14 distinct Vega/Vega-Lite chart files**, original graphics/annotations and responsive single-page presentation. Based on the student's existing supermarket project data; design inspiration came from reference screenshots, with no copied third-party chart graphics.

## Preview / deployment

Upload the **contents of this folder**, including `charts/`, `data/`, and `scripts/`, to the root of a public GitHub repository. Under Settings → Pages, deploy from `main` / `(root)`. `index.html` must sit at root. All chart specifications are at `charts/01.json`–`charts/14.json`.

For a local preview, open this directory with VS Code Live Server, or run `python -m http.server 8000` here and visit http://localhost:8000. Opening `index.html` via `file://` breaks fetch requests. Internet is required for Vega libraries and geographic boundaries.

## Why this version is materially different

- New retail-report identity: bold ticket typography, golden hero, custom CSS receipt, compressed chapter layout, compact chart cards, boxed facts, colours associated with retailer and comparison concepts, active anchored contents.
- Four chapters: geography → two-chain comparison → historical sales share → nominal food turnover.
- Added an analytical chart, population vs store count, to demonstrate why bigger states dominate totals.
- Year-on-year heatmap now uses **one sequential light-to-deep blue palette** (not a diverging orange/teal pair); clear interpretation for negative/positive small changes.
- Genuine Vega retailer→state hierarchical treemap, with areas proportional to observed store counts rather than invented market-share flows.
- Added a parallel-coordinates view inspired by the examples: four independently scaled measures across eight states, with clickable highlighting.
- Every chart has visible numerical insight, idiom selection rationale, a labelled source, a link to the human-readable JSON, and a collapsible method/limitations note. A six-term glossary defines confusing comparisons.

## Source caveats

Refer to `data/SOURCES.md`, `CHART_INVENTORY.md` and `RUBRIC_AUDIT.md`. This visualisation reflects only the two chains for store counts; cannot measure local accessibility; retailer market-share categories are historical and include a wholesale proxy; ABS food-retailing turnover includes liquor and specialist food retailers, and is nominal.

## Required student actions

1. Check every chart on the deployed website, including charts 01/02 external GeoJSON, on a laptop and mobile. Static JSON/data and layout audits passed, including a placeholder-chart CSS check at four viewport widths. Live Vega chart rendering and remote geographic downloads still need to be checked on the public website.
2. Publish to a public GitHub Pages repository. Private repository / inaccessible content = no valid submission.
3. Verify the author name, add student ID in the Moodle template, and acknowledge AI use accurately.
4. Complete the Moodle template and upload YOUR hand-drawn A4 sketch PDF to GitHub. The original sketch needs to reflect the website.
5. The 25 Oct 2026 assignment due date has passed; discuss extension/late arrangements with unit staff.

This package is not auto-deployed and does not guarantee any grade.


## Reader-first additions (28 Oct 2026)

The page uses the healthcare reference design concept of an explicit explanation alongside every visual and a short glossary; **no external chart, HTML or stylesheet was copied**. Four chapter introductions now state the analytical question and the data boundary. Each of the fourteen figures makes a distinct claim and provides the concrete method, source and limitation. The earlier redundant large empty cards were not reintroduced; evidence text is integrated directly into chart panels and the method is collapsible.

The map audit is documented in `CHART_INVENTORY.md`, including why the manually arranged circle cartogram is different from a proportional-symbol overlay and why the tile-grid is supplementary.

## Visual clarity and story audit (28 October 2026)

This ZIP adds a compact four-part story guide, explanatory transitions, reworked scatter direct labels, external labels for the cartogram's tiny circles, and a one-state-at-a-time parallel-coordinates view with a dropdown. See `STORY_AND_INTERVIEW_GUIDE.md` for an explanation of all 14 figures and `RUBRIC_AUDIT.md` for the literal rubric risks and pending human checks. The visual refinements do not extend the underlying source data to individual suburbs or supermarket locations.

## Final cross-check

See `FINAL_QA_AND_PUBLISHING.md` for the 28 October 2026 final chart-by-chart review, the precise ACCC **57.3% vs ~67% market-definition difference**, the corrected September 2026 Coles source URL, the independent scatter reference line, improved heatmap labels, and the exact GitHub upload checklist.

The `index.html` source has been formatted into readable markup for interview preparation.
