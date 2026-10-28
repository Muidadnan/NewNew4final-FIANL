# Chart inventory and encoding checks

| # | Chart | Idiom | Rubric grouping |
|---|---|---|---|
| 01 | State density | Choropleth map | advanced |
| 02 | Total outlet counts | Proportional symbol map | advanced |
| 03 | Circle state cartogram | manually arranged circle cartogram (not auto-Dorling) | advanced |
| 04 | Two-chain leader tiles | Equal-size tile map | advanced supplementary |
| 05 | Store counts by state | Grouped bar | basic |
| 06 | Per-capita retailer gap | Connected dot | treat as basic unless tutor confirms otherwise |
| 07 | Population vs store count, national benchmark with direct labels | Scatter | basic |
| 08 | Retailer → state breakdown | Hierarchical treemap | advanced |
| 09 | State profiles across four measures, dropdown focus line | Parallel coordinates | advanced |
| 10 | Two chains out of 100 | Waffle | advanced |
| 11 | Historical market ranks | Bump | advanced |
| 12 | Market-share changes | Diverging bar | basic |
| 13 | National food turnover | Line | basic |
| 14 | Year-on-year monthly turnover | Sequential heatmap | advanced |

**Count:** 14 separate chart specifications. Defensible advanced groupings: choropleth, proportional-symbol, Dorling-style cartogram, hierarchical treemap, parallel coordinates, waffle, bump chart, heatmap; plus the supplementary tile map. Connected dot may count as basic if the tutor considers it a dot plot. The different map idioms are all considered advanced by the official DV2 rubric, although individual suitability/counting remains the marker's decision.

**Data periods:** 2026 store snapshots, historical ACCC market shares through FY2022–23, ABS food turnover ending June 2025. These are not a unified same-year dataset.

## Chart 01–04 validity

1. **Choropleth (valid):** Real state GeoJSON polygons; sequential colour by stores per 100,000; no unnormalised counts in fill.
2. **Proportional symbols (valid):** Approximate one-symbol-per-state location, with **area** ∝ store count; map polygons retained.
3. **Circle cartogram (schematic, valid with caveat):** Polygons replaced, non-overlapping circle size ∝ count; positions prearranged. Do not call it an automatically computed Dorling layout.
4. **Tile-grid map (valid schematic):** Equal-sized state tiles with approximate geographic arrangement, colour ∝ Woolworths percentage. Supplementary to primary three maps.

Refer to the chart cards for plain-English "why this idiom", marks, channels, sources and limitations.

**Readability pass:** The population scatter now uses equal-size points with leader-line direct labels, and a full-width layout. The circle cartogram labels ACT/NT separately. The four-dimensional profile chart now foregrounds one chosen state while preserving seven grey comparison lines and displaying axis-specific min/max ranges. The homepage now explicitly says the state maps cover two chains, not all supermarkets.
