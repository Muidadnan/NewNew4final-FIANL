# The Aisle Effect — Australian supermarket data story

**Live visualisation:** https://muidadnan.github.io/NewNew4final-FIANL/

A single-page data story about the physical footprints of Woolworths and Coles, historical grocery-sales concentration, and Australian food-retailing turnover. The site contains **14 Vega/Vega-Lite visualisations** arranged into four chapters.

## The story

1. **Where are the stores?** Compare outlet counts with outlets per 100,000 residents across Australia's six states and two mainland territories. Geographic maps, a ranking slopegraph, a circle cartogram and equal-area tiles explain why absolute totals and population-adjusted comparisons differ.
2. **How do the two chains compare?** Compare Woolworths and Coles by jurisdiction using grouped bars, connected dots, a population scatterplot, a brand-first treemap and parallel coordinates.
3. **What do grocery sales shares show?** Explore historical ACCC national take-home food and grocery sales estimates with a waffle chart, ranking changes and percentage-point differences.
4. **How has food-retailing turnover changed?** Read the ABS monthly nominal food-retailing turnover line chart and year-by-month heatmap.

## Files

- `index.html`: page structure, narrative, source citations, attribution and AI acknowledgement.
- `style.css`: editorial styling, responsive grids, typography and visual hierarchy.
- `scripts/main.js`: embeds the fourteen Vega/Vega-Lite chart specifications.
- `charts/01.json`–`charts/14.json`: human-readable chart specifications.
- `data/`: local CSV source tables, derived measures and `SOURCES.md` with dataset provenance.
- `CHART_INVENTORY.md`: chart types, encodings and data meanings.
- `STORY_AND_INTERVIEW_GUIDE.md`: concise explanations of the data story and visual choices.
- `SUBMISSION_NOTES.md`: domain, audience, why/what/how and AI-use description.

## Technical design

All visualisations use Vega or Vega-Lite. The three geographic idioms are a choropleth, proportional-symbol map and schematic circle cartogram; the equal-area tile map provides a fourth, deliberately non-geographic-area comparison. The charts use tooltips and focused highlighting where appropriate. The entire story is visible on one scrolling page, with responsive layout for narrower screens.

## Data scope and interpretation

Store counts are September–October 2026 ScrapeHero snapshots for **Woolworths and Coles only**; other chains are excluded. Population denominators are ABS March 2026 estimates. ACCC national take-home food and grocery sales estimates are historical (including FY2022–23), and the ABS food-retailing turnover series runs to June 2025. These are different measures from different periods: store counts do not directly establish access, sales share or prices; nominal turnover does not measure quantities purchased. Sources and further methodological detail appear in `data/SOURCES.md`.

## Attribution and AI use

**Created by Syed Abdul Muid Adnan · 28 October 2026.** OpenAI ChatGPT assisted with HTML/CSS, Vega/Vega-Lite specifications, data transformations, visual design, debugging and explanatory text. The site uses public data and credits its sources; no third-party chart graphics were copied.
