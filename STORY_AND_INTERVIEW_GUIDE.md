# The Aisle Effect — the story, in plain English

## The main question

**Does having more supermarket stores automatically mean better access, greater market power, or higher grocery spending?** No single dataset here can prove all three. The visual story deliberately separates *store counts*, *store counts per resident*, *historical grocery sales share*, and *national nominal food-retail turnover*.

### Chapter 01 · Where are the two chains?

1. **Choropleth (01):** Shade each state by stores per 100,000 residents. Tasmania has 8.44 versus NSW's 6.98. This is a relative, state-level measure, **not** journey time or actual supermarket access.
2. **Proportional-symbol map (02):** Place circles over actual Australian state and territory outlines. Circle **area** represents combined Woolworths and Coles outlet counts: NSW 605, Victoria 511, Queensland 454, ACT 33 and NT 20. Small jurisdictions have external labels. Unlike Chart 01, this is about absolute totals, not rates; unlike Chart 03, real geography remains visible.
3. **Circle cartogram (03):** Replace state land areas with circles whose **areas** represent store totals. WA looks smaller than its real geographic area would imply, shifting attention from land to locations. The arrangement is manually schematic, not a dynamic Dorling algorithm.
4. **Dot-density map (04):** Each full dot represents 50 recorded Woolworths or Coles outlets, with a smaller dot representing each remainder. The two chain colours separate the totals across all jurisdictions; dot coordinates are illustrative, not exact shop locations. The map uses repeated units rather than one proportional circle per jurisdiction.

**Transition:** Now that we know totals and relative presence differ, which chain accounts for the sites?

### Chapter 02 · Who has the bigger state-level footprint?

5. **Grouped bar (05):** Side-by-side totals reveal which retailer has more counted stores in each state.
6. **Connected dot (06):** Links pair the two chains' stores per 100,000 residents within each state. Horizontal differences display the brand gap.
7. **Population scatter (07):** States with more people often have more stores. The dashed line is the number of stores predicted by Australia's **population-weighted rate of approximately 7.22 per 100,000**; it is *not a fitted regression line*. Points above it have higher two-chain densities than the pooled rate.
8. **Hierarchical treemap (08):** Rectangles split by **retailer → state**, their areas proportional to actual outlet counts. The hierarchy is real; this chart does not mix market-share percentages with location counts.
9. **Parallel coordinates (09):** Follow a *selected state* across population, Woolworths count, Coles count and combined stores per resident. Each dimension is separately min–max normalised; one highlighted line prevents eight competing colours from obscuring the pattern. Actual units appear in tooltips and beneath the plot.

**Transition:** Store presence is *not the same* as the share of sales. Move to the ACCC's historical market estimates.

### Chapter 03 · Who receives national grocery sales?

10. **Waffle (10):** The ACCC estimates Woolworths 32.5% + Coles 24.8% = **57.3%** of national take-home food and grocery sales in 2022–23. The 100-tile display rounds that to **57 whole squares**, with the exact share printed alongside it.
11. **Bump chart (11):** Follow the rank of four selected participants through three historical reporting periods. ALDI moves ahead of the Metcash wholesale-supply category among the selected participants.
12. **Diverging bar (12):** Show *percentage-point* changes from 2002–03 to 2022–23. Metcash is a wholesale supplier to independent stores, not one retail chain; interpret the categories accordingly.

**Transition:** Market shares cannot tell us if shoppers bought more food. The final section switches to nominal food retailing turnover.

### Chapter 04 · Food retailing in dollars

13. **Time-series line (13):** ABS monthly nominal Australian food retailing turnover rose from approximately $12.69 billion in June 2020 to $15.00 billion in June 2025. These are not inflation-adjusted volume figures and include specialist food and liquor retailers.
14. **Sequential heatmap (14):** Compare each month with the *same month the year before*. One pale-to-dark blue scale shows annual growth; use signs in the annotations/tooltips to distinguish slightly negative observations.

**Closing claim:** A more crowded supermarket footprint, greater share of groceries sold, and a growing value of food sold are *different kinds of evidence*. None on its own proves supermarket prices, local accessibility, or abuse of market power.

## How to explain the three visually revised charts

**03, circle cartogram:** “Circles replace geographic areas. Size encodes outlet count, colour encodes Woolworths' percentage, and I placed the circles schematically to avoid overlaps. The smaller ACT and NT circles have separate labels so they remain legible. It's not a map of travel distance.”

**07, population scatter:** “The x-axis measures population; the y-axis measures combined stores. The dashed diagonal is the national population-weighted benchmark, not a fitted trend. Each state gets a same-size point; direct labels have small leader lines so the clustered territories remain readable.”

**09, parallel coordinates:** “This combines four measures with different units. I separately normalised each to its minimum and maximum across the eight states, so only relative positions can be compared. A selected state is highlighted; other state profiles stay in grey. Tooltips show the actual values.”

## Why NOT reproduce the four inspiration charts?

- The **local choropleth** in the healthcare example is useful inspiration for annotations and explaining suppressed/missing data, but your source counts only eight state-level totals. Claiming postcode/suburb patterns would require additional genuine local store data.
- The **ridgeline** makes sense for a *distribution* (many measured observations per group). Eight state totals do **not** contain enough within-state observations to estimate genuine distributions. Inventing distributions to fit that visual style would violate the assignment's data-integrity requirement.
- The **paired maps** are a good *layout principle*: the choropleth contrasts rates with the proportional-symbol map's raw totals, while the circle cartogram deliberately replaces land shapes with area-scaled circles.
- The **dining cluster and dot map** use location-level observations and geographic grids. Your dataset is aggregated to states and territories. To use those maps meaningfully you would need trustworthy coordinates of individual stores and appropriate boundaries—not the current one-anchor-per-state values.

Adapt the storytelling techniques and visual hierarchy; do not copy anyone else's submitted graphics.

## Final questions a marker may ask

- Why are there only two supermarket chains? Explain scope and acknowledge ALDI/IGA/independents are missing from these maps.
- Are 2026 store counts comparable with 2022–23 sales share? No. They are separate kinds of evidence with different reference dates.
- Why can you call chart 3 a cartogram? States are represented by schematic circles proportional to stores; it deliberately distorts geography. It is **not** an algorithmically calculated Dorling arrangement.
- Why do lines cross in the parallel coordinates? Each column is independently normalised, and crossings indicate relative state positions changing between dimensions, not changes over time.
- What does the national reference line mean? Exactly 2,015 stores / 27,916,100 people × 100,000 = 7.235967... stores per 100,000.
- What does 57.3% measure? Historical *sales share*, not two chains' share of all store locations.
- What doesn't the study prove? Retail price levels, competition causal effects, household purchase volume, local travel access and supermarket dominance at individual postcodes.


## Final confirmed detail — reference line and market definitions

- Chart 07 draws a **real straight reference line** defined by independent points `(0,0)` and `(9.6 million,694.65 stores)`. The slope is **7.235968 stores per 100,000 people**, calculated from 2,015 stores and 27,916,100 residents. It is **not** an interpolated path through the state dots and **not** a regression line.
- Chart 14 labels small negative year-on-year percentages to one decimal to avoid presenting a misleading `-0`.
- The ACCC interim report Figure 1.1 estimated **57.3%** combined Woolworths/Coles share of national *take-home food and grocery sales* for FY2022–23; the ACCC separately estimated **approximately 67%** of the more narrowly defined *supermarket retail sales*. Both are correctly labelled on the page.
