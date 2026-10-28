# The Aisle Effect — assignment criteria mapping

| Criterion | Implementation |
| --- | --- |
| Domain, audience, why, what, how | The four-chapter Australian supermarket story defines the audience, analytical questions, datasets, visual encodings and limitations. The corresponding prose is in `SUBMISSION_NOTES.md`. |
| Public single-page website | GitHub Pages: https://muidadnan.github.io/NewNew4final-FIANL/ ; one scrolling `index.html`. |
| Vega/Vega-Lite | Fourteen human-readable specifications in `charts/01.json`–`charts/14.json`, embedded by `scripts/main.js`. |
| Minimum ten charts | Fourteen numbered visualisations across the story; the rubric determines whether related charts are counted as distinct. |
| At least three map idioms | Geographic choropleth, proportional-symbol map and schematic circle cartogram. An additional equal-area tile map supports jurisdiction-level comparison. |
| Advanced idioms | Maps, slopegraph, retailer-first nested treemap, parallel coordinates, waffle chart, bump chart and year-month heatmap complement the simpler comparisons. |
| Real data from multiple sources | ScrapeHero, ABS, ACCC and Australian boundary geometry; exact citations and periods in `data/SOURCES.md`. |
| Visual encoding and readability | Quantitative colour scales, circle area for counts, direct labels, consistent typography, legends, source notes and responsive card layout. |
| Storytelling | Four chapters, chart-specific takeaways, explanatory transitions, glossary, source citations and closing synthesis. |
| Interaction | Hover tooltips and selected legend/highlight interactions; the main narrative is accessible without interaction. |
| Authorship and AI acknowledgement | Creator and date, sources and ChatGPT assistance are identified in the page footer and supporting documentation. |
| Sketch and screenshot | The assignment template reserves separate parts for the student's hand-drawn sketch PDF and full-page website screenshot. |

## Interpretation boundaries

The 2026 location data cover Woolworths and Coles, not all Australian grocery outlets. State/territory density is not a measure of travel distance or local food access. The ACCC's 57.3% refers to combined FY2022–23 national take-home food and grocery sales, not 2026 store share; a different ACCC market definition yields a different estimate. ABS food-retailing turnover includes a wider retail category and is reported in nominal dollars. Geographic positions in the cartogram and tile map are schematic.

## Dataset and implementation notes

The store-count tables total 1,142 Woolworths and 878 Coles locations, or 2,020 combined. The treemap has two retailer groups, each with six states and two mainland territories. The 100-cell waffle rounds the historical 57.3% share to 57 coloured cells. All chart specifications remain in the public repository as readable JSON.
