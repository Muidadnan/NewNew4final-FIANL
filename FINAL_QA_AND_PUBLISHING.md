# FINAL QA & PUBLISHING — THE AISLE EFFECT

## Deliverable

Four-part Australian supermarket story with 14 **distinct** chart specifications: 13 Vega-Lite and 1 Vega treemap. `index.html`, `style.css`, `scripts/main.js`, `charts/01.json` through `charts/14.json`, and all local CSV data are included at the correct relative paths.

## Source validation (28 October 2026)

- Woolworths: ScrapeHero page last updated **5 October 2026**, 1,142 stores; state figures match the project's CSV. https://www.scrapehero.com/location-reports/Woolworths%20Supermarkets-Australia/
- Coles: ScrapeHero page last updated **28 September 2026**, 878 stores; the site points to the correct current URL, `Coles%20Supermarkets-Australia` (not the older double-encoded URL). https://www.scrapehero.com/location-reports/Coles%20Supermarkets-Australia/
- ABS: March 2026 estimated state populations used for the per-capita rates.
- ACCC interim report (2024), Figure 1.1: **32.5%** Woolworths + **24.8%** Coles = **57.3%** national take-home food and grocery sales in FY2022–23. The report separately estimates approximately **67%** of *supermarket retail sales* in FY2023. These are different denominators; the page now makes that distinction explicit.
- ABS *Retail Trade, Australia*: June 2025 was the final release. The displayed June 2020–June 2025 series measures nominal, seasonally adjusted *food-retailing turnover*, not grocery basket prices or inflation-adjusted consumption.

## Chart validity

- 01: valid choropleth using population-normalised state values.
- 02: valid geographic proportional-symbol map using circle **area** for store total.
- 03: explicitly described as a manually arranged **schematic** circle cartogram, with tiny-state labels outside circles; not claimed to use an algorithmic Dorling solver.
- 04: optional schematic equal-tile map (not one of the three primary maps).
- 05–06: grouped bar and paired/connected dots for counts and per-capita two-brand differences.
- 07: population scatter with a **straight two-point pooled-rate reference** of 7.235968 stores per 100,000, not a regression and not a zigzag joining sampled state points.
- 08: actual hierarchy `All stores → retailer → state` with Vega `stratify`/`treemap`; leaf areas encode 2,020 stores in total.
- 09: four-variable parallel-coordinates plot, with dropdown-selected red focus and muted context lines. Axes are separately min–max normalised; raw units appear in tooltips.
- 10: 100-cell waffle uses 57 whole squares to represent **rounded** 57.3%, with the exact figure stated separately.
- 11: bump chart follows ranks over three distinct historical periods; not a continuous annual history.
- 12: diverging bars show **percentage-point** differences, not relative growth rates.
- 13: line chart shows monthly nominal retail turnover without misleading area fill.
- 14: year-month heatmap uses **one sequential blue colour family**. Small negative values are shown to one decimal rather than rounding to `-0`.

## Testing completed

- All 14 JSON files parse; all CSV references, CSS and local JS files exist.
- Browser-independent source arithmetic: 1,142 + 878 = 2,020; state totals and per-capita rates reconcile; ACCC shares cross-check to the report.
- Static HTML checks: 14 chart slots, 14 interpretation notes, 14 method/caveat sections, 4 chapter explanations and visible source links.
- `node --check` validates the JavaScript syntax.
- Chromium **layout-only** check, with illustrative placeholder SVGs rather than live Vega charts: widths **1440, 1366, 960, 760, 390, 360** had no overall horizontal scroll.

### What the tests cannot certify

This execution environment blocks local HTTP and external CDN access, so **the real Vega/Vega-Lite chart rendering, map GeoJSON download, tooltip interactions, and full live GitHub Pages performance have not been visually tested**. Treat those as required final human checks, not as passed items. The downloaded ZIP is the complete website, but it is **not automatically uploaded** to the user's repository.

## Upload (keep these paths exactly)

1. Extract the ZIP onto your computer. Upload the **contents**, not the ZIP itself, to the root of your GitHub repository. **Replace** old same-named files.
2. The root must contain `index.html`, `style.css`, `scripts/`, `charts/`, and `data/`. Check `charts/14.json` exists.
3. In your repository: **Settings → Pages → Deploy from a branch → main → /(root)**. The repository must be public and GitHub Pages enabled for public assessment.
4. Open the published URL in an **incognito/private browser window**. Check that each numbered chart renders (especially maps 01/02, treemap 08, dropdown 09 and heatmap 14), tooltips and selectors work, and both desktop and mobile layouts are readable.
5. Provide the GitHub Pages URL and a full-page screenshot in the university submission template. Complete your own **hand-drawn A4 sketch**; the rubric expressly does not accept a digitally produced sketch. Confirm author/student ID and describe AI assistance truthfully.

## Important caveat

Only the teaching staff can decide how the advanced idioms and sketch are marked, and only the student can complete the interview and publish the website. The design is targeted at the rubric, **not a guaranteed grade**.
