# FIT3179 Data Visualisation 2 — Detailed Moodle Submission
**Visualisation:** The Aisle Effect — Australian supermarket shopping
**Name:** Syed Abdul Muid Adnan
**Student ID:** [ENTER STUDENT ID]
**Studio session:** [ENTER STUDIO SESSION]

## Part A: URL of the Visualisation

**Webpage URL.** https://muidadnan.github.io/NewNew4final-FIANL/

**Submission note.** This is the published GitHub Pages URL for the single-page visualisation, rather than the repository source-code URL. The site should be opened in an incognito browser to confirm that the webpage, all fourteen charts and linked data load without authentication.

## Part B: Domain Description

### 1. Domain and central question

My assigned topic is supermarket shopping in Australia, within the broader Shopping & Consumer Life domain. The visualisation, “The Aisle Effect”, examines the recorded geographic footprints of Woolworths and Coles, the way their store counts differ between Australian jurisdictions, historical shares of national take-home food and grocery sales, and the value of national food-retailing turnover.

The central question is: what can we learn about Australia’s supermarket landscape from where stores are located, how sales are distributed, and how retail turnover changes? The story deliberately distinguishes three different measures: (1) physical store presence, (2) historical grocery sales share, and (3) nominal retail turnover. They are related to supermarket shopping, but they are not interchangeable measures of competition, prices or accessibility.

### 2. Who is the audience? Why does the story matter?

The intended audience is the average Australian reader, particularly supermarket shoppers who recognise the two national chains but may not be familiar with statistical terminology. Readers should be able to understand the principal findings without prior knowledge of data visualisation, retail economics or geographic information systems. State and territory names, familiar brand labels, plain-language annotations, direct values, short definitions and hover tooltips support this audience.

The visualisation addresses an everyday misunderstanding: the state with the most supermarket outlets does not necessarily have the most outlets relative to its population. It also challenges the assumption that a retailer’s share of store locations is the same as its share of grocery sales, or that growth in dollar turnover means shoppers bought a larger quantity of food. The intended tasks are to compare jurisdictions fairly, identify which chain has more recorded stores, follow changes in historical sales shares, and interpret the national retail trend without confusing its units.

The narrative is a guided presentation rather than an open-ended analytics dashboard. Four sequential chapters lead readers from geography, to retailer comparisons, to sales structure, and finally to the wider food-retailing trend. Each figure states a question, a key finding, how to read the visual encoding, and why the chosen idiom helps answer the question.

### 3. What data are visualised? Sources, authors and periods

Store locations: ScrapeHero published Australian state- and territory-level location-count snapshots for Woolworths Supermarkets (5 October 2026) and Coles Supermarkets (28 September 2026). These are commercial location-listing estimates, not a complete official census of all Australian supermarkets. The visualisation uses the published counts for these two chains only; ALDI, IGA and other independent supermarkets are outside the geographic store-count comparison.

Population: the Australian Bureau of Statistics (ABS), National, state and territory population, March 2026, provides jurisdiction population estimates. These denominators allow a fairer comparison of recorded outlets per 100,000 residents. Because the store-count and population reference dates differ slightly, the resulting rates should be understood as approximate population-adjusted snapshots.

Historical grocery sales: the Australian Competition and Consumer Commission (ACCC), Supermarkets inquiry 2024–25 interim report, provides estimates of national take-home food and grocery sales shares for FY2002–03, FY2006–07 and FY2022–23. These figures describe sales value, not numbers of stores. The Metcash category represents wholesale supply to independent stores rather than a single supermarket chain, and “Other retailers” is an aggregate.

National retail turnover: ABS Retail Trade, Australia (June 2025 release) provides seasonally adjusted monthly Australian food-retailing turnover, expressed in current-price Australian dollars. The series used runs from June 2020 to June 2025 and covers the wider food-retailing category, including specialist food and liquor retailers. It is not inflation-adjusted and should not be interpreted as the quantity of food purchased.

Geographic geometry: the state and territory boundary polygons are taken from the public Australian-states GeoJSON resource maintained in the tonywr71/GeoJson-Data GitHub repository. This geometry is used to draw the real geographic outlines in the choropleth and proportional-symbol map.

### 4. What transformations were applied?

The two store-count datasets were aligned by the eight Australian jurisdictions: the six states (NSW, Victoria, Queensland, Western Australia, South Australia and Tasmania) and two mainland territories (ACT and Northern Territory). For each jurisdiction, combined outlets = Woolworths outlets + Coles outlets. Population-adjusted density = combined outlets ÷ ABS population × 100,000. Woolworths’ share within the two-chain count = Woolworths outlets ÷ combined outlets × 100. These percentages are explicitly limited to the two recorded chains and are not percentages of every Australian supermarket.

Across the eight jurisdictions, the combined source counts are 1,142 Woolworths and 878 Coles outlets, or 2,020 in total. The population-weighted benchmark is approximately 7.24 combined stores per 100,000 people, computed from the total store count divided by the total population rather than by averaging the eight jurisdiction rates. The population scatterplot uses this benchmark, not a fitted regression.

The retailer-by-jurisdiction hierarchy was prepared from the same observed outlet counts for the treemap. The parallel-coordinates chart rescales each of its four quantitative dimensions independently between the minimum and maximum jurisdiction values so that different units can share one visual frame; tooltips preserve the original values. The sales-share graphics use percentage-point differences and ordinal ranks, while the 100-cell waffle rounds the precise 57.3% combined share to 57 whole cells and prints the unrounded percentage beside it. The monthly turnover heatmap uses year-on-year change, comparing each month with the corresponding month in the previous year.

These transformations create new comparisons but do not add fabricated store observations, invented suburb-level values or estimated household purchase quantities. The source periods are shown separately rather than being treated as a single matched-year dataset.

### 5. How is the visualisation structured?

Chapter 1 — Geography: the first four map-based figures compare population-normalised store presence, total outlet counts, schematic store-weighted geography and retailer proportions. This section shows why land area, total counts and per-person rates can tell different stories.

Chapter 2 — Retailer footprint: the next five figures move from map patterns to direct comparisons between Woolworths and Coles, the effect of population on totals, a retailer-to-jurisdiction hierarchy and multi-dimensional state profiles.

Chapter 3 — Grocery sales shares: three figures introduce the ACCC’s historical estimates. They communicate the combined share of the two major chains, changes in the ranking of selected participants and the magnitude of long-run percentage-point changes.

Chapter 4 — Food retailing over time: two figures use ABS nominal turnover to distinguish the direction of the national dollar-value trend from the month-by-month pattern of annual change. The conclusion reminds the reader that outlets, sales share and turnover answer different questions.

### 6. How and why were these specific idioms selected?

Figure 01 — Choropleth map (advanced): actual state and territory polygons are filled with one sequential colour scale representing combined Woolworths and Coles stores per 100,000 residents. Colour intensity is appropriate for a normalised geographic rate. Tasmania’s approximately 8.44 stores per 100,000 can be compared with NSW’s approximately 6.99. Using raw store totals for a choropleth would exaggerate populous states; using a rate instead avoids that particular error. The map does not show neighbourhood access or travel distance.

Figure 02 — Proportional-symbol map (advanced): circles sit at approximate representative positions over real state and territory outlines, and circle area, rather than radius, encodes combined outlet count. NSW has 606 stores, Victoria 515 and Queensland 454. This map answers “where are the largest recorded totals?” rather than “where are stores most common per resident?” Small-jurisdiction labels use external callouts to preserve legibility. The circles do not mark individual shop coordinates.

Figure 03 — Schematic circle cartogram (advanced): conventional land shapes are replaced with non-overlapping circles whose areas represent the combined store counts. Western Australia no longer dominates visually because of its enormous land area, while states with more outlets become more prominent. This is a manually arranged schematic cartogram, not an automatically computed Dorling layout; circle positions are approximate and not intended to represent distance. Labels for the small ACT, NT and Tasmania circles require special contrast and sizing.

Figure 04 — Equal-area tile map (advanced supplementary): each of the six states and two mainland territories receives one equally sized tile in an approximately geographic arrangement. A single sequential teal scale represents Woolworths’ percentage of the two-chain outlet count, with percentages printed directly on the tiles. Equal tile size allows the percentage comparison to remain visible even for geographically small jurisdictions. The tile diagram is not a scale map and does not represent the area, population or number of stores of each jurisdiction.

Figure 05 — Grouped bar chart (basic): paired bars allow the reader to compare the recorded Woolworths and Coles totals within each jurisdiction using a common baseline and length, which is more precise for direct brand comparisons than the map symbols.

Figure 06 — Connected-dot comparison (conservative basic classification): two dots per jurisdiction represent Woolworths and Coles outlets per 100,000 residents, connected by a line. The distance between the dots communicates the size of the retailer gap while avoiding the mistaken interpretation that absolute store totals alone describe population-adjusted presence.

Figure 07 — Population scatterplot (basic): the x-axis represents population and the y-axis combined outlets. A dashed benchmark shows the number of stores expected at the nationwide population-weighted rate of about 7.24 outlets per 100,000; it is not a regression line. The chart makes the relationship between state population and total outlets visible, while points above or below the benchmark identify higher or lower rates.

Figure 08 — Hierarchical treemap (advanced): nested rectangles represent the actual “all stores → retailer → jurisdiction” hierarchy. The area of each leaf is proportional to its observed store count. This makes it possible to see both each retailer’s overall footprint and how its stores are distributed across jurisdictions. It is a genuine hierarchical layout built in Vega, not a collection of unrelated rectangles.

Figure 09 — Parallel-coordinates chart (advanced): one line per jurisdiction connects four separately normalised quantitative dimensions: population, Woolworths count, Coles count and combined outlets per 100,000 residents. A state-selection interaction highlights one profile while other profiles remain muted. This allows readers to compare relative positions across measures with different units; the vertical positions cannot be read as common raw quantities.

Figure 10 — 100-cell waffle chart (advanced): one square represents approximately one percentage point of national take-home food and grocery sales. The ACCC estimate for FY2022–23 is 32.5% Woolworths plus 24.8% Coles, or 57.3% combined. Fifty-seven whole filled squares give an intuitive part-to-whole illustration, with the exact 57.3% stated to avoid hiding the rounding.

Figure 11 — Bump chart (advanced): connected rank positions show how selected grocery-sales participants changed order across three ACCC reporting periods. Rank is an ordinal measure, so the chart communicates changes in relative position rather than differences in the size of their sales shares. Metcash is explicitly interpreted as a wholesale-supply category, not a single retailer.

Figure 12 — Diverging bar chart (conservatively basic): bars extend in opposite directions from zero to show increases and decreases in sales share between FY2002–03 and FY2022–23. The unit is percentage points, not percentage growth. A common zero makes the direction and magnitude of long-run change immediately legible.

Figure 13 — Monthly time-series line chart (basic): a line links monthly seasonally adjusted food-retailing turnover values in chronological order, showing the national dollar-value trend. The series rises from approximately $12.69 billion in June 2020 to $15.00 billion in June 2025. A line is appropriate for ordered continuous time; the chart does not imply that physical purchase volumes rose by the same amount.

Figure 14 — Year-by-month heatmap (advanced): a calendar-like grid places years and months in separate dimensions and uses one sequential light-to-dark blue palette to show year-on-year changes in nominal turnover. The matrix makes recurring month-level variation and unusual periods easier to scan than a second overlapping line chart. Small negative values are identified by signed annotations or tooltips rather than by a second, potentially confusing colour family.

### 7. How do marks, channels, interactions and visual design support the tasks?

The principal marks include geographic polygons, circles, rectangles, bars, points, lines and text. Quantitative channels are chosen to match the comparison task: position and length for precise totals or differences; circle area for counts; sequential colour for ordered rates or percentage magnitudes; and area within a genuine hierarchy for treemap leaves. Categorical retailer identity is labelled consistently. Legends and tooltips state the units, while the captions distinguish totals, per-capita rates, sales share and turnover.

The page uses a consistent editorial hierarchy: large question-led headings, smaller explanation text, grouped figures, concise “how to read” notes, and explicit finding statements. Repeated alignments and compact card spacing reduce unnecessary blank space without crowding the plots. The warm background, contrasting chart panels and restrained palette separate evidence from narrative. Clear typography, adequate contrast, readable direct labels and limited chart decoration follow the unit’s figure–ground and data-ink principles.

Interaction is used only when it adds value: hover tooltips reveal exact figures and the parallel-coordinates selector highlights one jurisdiction to reduce visual clutter. The main story remains visible while scrolling and does not require users to navigate between separate pages or click to reveal major chapters. The chart specifications are human-readable Vega-Lite JSON files, except for the genuine Vega treemap, and are retained in the GitHub repository.

### 8. Data limitations, interpretation and responsible presentation

The store maps count Woolworths and Coles only, not all Australian supermarkets. The location snapshots are approximate commercial counts and are not evidence of how far any household travels to a supermarket. A high jurisdiction-wide store density does not establish convenient access for every community. Territory labels and map anchors are presentation devices, not additional observations.

The ACCC market-share estimates relate to historical national take-home food and grocery sales and cannot be compared directly with the 2026 two-chain store-count percentages. The ABS turnover data describe a wider retail category, use nominal current-dollar values, and cannot isolate price inflation, real consumption volume or retailer-specific outcomes. Therefore the visualisation does not establish causes of grocery prices, market power or consumer welfare.

The final conclusion is deliberately bounded: population changes the interpretation of outlet totals; retailer location counts and grocery sales shares measure different aspects of the sector; and increasing nominal turnover is not by itself proof that shoppers bought more food. These distinctions are communicated through captions, data-source labels, methods notes and the overall chapter sequence.

### 9. Source attribution and AI acknowledgement

ScrapeHero, Woolworths Supermarkets locations in Australia (5 October 2026): https://www.scrapehero.com/location-reports/Woolworths%20Supermarkets-Australia/

ScrapeHero, Coles Supermarkets locations in Australia (28 September 2026): https://www.scrapehero.com/location-reports/Coles%2520Supermarkets-Australia/

Australian Bureau of Statistics, National, state and territory population, March 2026: https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2026

Australian Competition and Consumer Commission, Supermarkets inquiry 2024–25 interim report: https://www.accc.gov.au/system/files/supermarkets-inquiry-2024-2025-interim-report.pdf

Australian Bureau of Statistics, Retail Trade, Australia, June 2025: https://www.abs.gov.au/statistics/industry/retail-and-wholesale-trade/retail-trade-australia/jun-2025

Australian state and territory geometry: https://raw.githubusercontent.com/tonywr71/GeoJson-Data/master/australian-states.json

AI acknowledgement: OpenAI ChatGPT was used to assist with website layout, HTML/CSS, Vega and Vega-Lite specifications, data transformations and checks, debugging, chart annotations, and drafting/editing explanatory text. The source datasets and geographic geometry are attributed separately. The AI-generated assistance is acknowledged rather than presented as independently created without support.

## Part C: Sketch

**Public sketch PDF URL.** [PASTE YOUR PUBLIC GITHUB LINK TO YOUR HAND-DRAWN SKETCH PDF HERE]

**Sketch image.** [INSERT A LEGIBLE PHOTO OR SCAN OF YOUR OWN HAND-DRAWN A4 WEBSITE SKETCH HERE]

**Important requirement.** The official rubric awards zero for a sketch created with digital tools. Your sketch should be genuinely hand-drawn, show at least four clear sections, and resemble the four-chapter website, with labelled maps, charts, headings and annotations. Upload the scanned PDF to the same GitHub repository and use its public URL above.

## Part D: Full-size screenshot of your DV II

**Full-size webpage screenshot.** [INSERT A FULL-PAGE SCREENSHOT OF THE PUBLISHED WEBSITE HERE, WITH CHARTS RENDERED]

**Screenshot note.** Capture the live GitHub Pages webpage after all charts load, rather than a GitHub code or repository view. If the website is very long, use a browser full-page screenshot feature. The image should be readable and should show the final published layout.