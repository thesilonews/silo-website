/**
 * One-off insert using @neondatabase/serverless (HTTP transport — bypasses TCP pooler issues)
 * Run: npx tsx scripts/insert-morrill-neon.ts
 */
import { neon } from "@neondatabase/serverless";

const DIRECT_URL = process.env.DATABASE_URL;
if (!DIRECT_URL) throw new Error("DATABASE_URL env var is required");

const sql = neon(DIRECT_URL);

const title = "Who Owns the Land That Burned?";
const subtitle =
  "A Silo analysis maps the 256 landowners — from family ranchers to a Utah nonprofit and a Montana media mogul — whose land burned in Nebraska's largest wildfire.";
const slug = "morrill-fire-burned-land-ownership";
const category = "WILDFIRE";
const publishedAt = "2026-03-25T10:00:00Z";

const body = `On the morning of March 12, a power line came down in the wind near Angora, Nebraska. By that evening, the fire that started under the downed pole had traveled more than 65 miles. By the following morning, it had burned more land than any wildfire in Nebraska history.

![The power pole snapped by 70 mph wind gusts north of Bridgeport. The burned ground in the background shows how quickly the fire swept through.](/images/morrill-fire-ownership/morrill-fire-ignition-pole.jpg)

*Photo: [Danielle Jacobson](https://www.facebook.com/share/p/1GfCCgsTML/)*

The final toll: 643,074 acres across western Nebraska, 98% contained by March 20 — nine times larger than the previous single-fire record in Nebraska history. Rose White, an 86-year-old grandmother in Arthur County, died trying to flee. The fire consumed her family's century-old homestead — the property her great-grandparents had built in the 1930s. "It took the house, barn, shop, everything," her son Roger told 1011 Now. "There's nothing left out there whatsoever." Governor Pillen declared a state of emergency for seven counties: Morrill, Garden, Arthur, Keith, Lincoln, Dawson, and Frontier. The Morrill Fire burned through grazing land that supports an estimated 35,000 cattle. USDA Secretary Brooke Rollins announced disaster assistance for affected producers on March 20 and visited Nebraska on March 23.

![Rose White's homestead — 107 acres in Arthur County that her family had farmed since the 1930s. The property, shown here in January 2026, was consumed by the fire on March 12. Her son Roger told 1011 Now: "There's nothing left out there whatsoever."](/images/morrill-fire-ownership/morrill-fire-rose-white-v1.jpg)

The fire's speed was not a fluke. On March 12, sustained wind gusts exceeded 60 mph, temperatures hit the 80s — 40 degrees above normal for March in western Nebraska — and relative humidity dropped below 15%. The region was deep in drought; the rangeland grass was cured and dead. NOAA's GOES-18 weather satellite (the same one that tracks summer storms rolling in off the Rockies) logged the fire's heat output near the top of what its instruments can measure, above 1,700 megawatts of radiated energy. The fire ran 65 miles in roughly eight hours before a cold front briefly slowed it.

![A European Space Agency satellite captured this image the morning of March 13, less than 24 hours after ignition near Angora. The enhanced infrared satellite view makes burned areas glow red. The white outline shows the final fire perimeter — roughly 65 miles end to end.](/images/morrill-fire-ownership/morrill-fire-sentinel-v2.png)

---

## What we found

The Silo obtained county parcel records for all four counties at the core of the fire — Morrill, Garden, Arthur, and Keith — and compared them with the federal fire perimeter maintained by the [National Interagency Fire Center](https://www.nifc.gov/). The analysis uses the WFIGS perimeter as of March 21, 2026, when the fire was 98% contained. Full methodology is at the bottom of this page.

What the data shows:

- **1,622 parcels** overlap the fire perimeter
- **256 unique owners** hold title to those parcels
- **$315.4 million** in combined county-assessed value — a floor, not a damage estimate. It doesn't count livestock, fencing, or equipment
- The median parcel inside the burn zone is **328 acres**. This is ranching country.

The top 10 landowners control **52% of the burned land**. And 44% of all owners in the burn zone have mailing addresses outside Nebraska, collectively controlling roughly half the acres that burned. The two largest landowners alone (a Utah-based religious institution and a Montana media mogul) hold more than a third of everything the fire touched.

![County parcel records show 256 landowners held title to land inside the fire perimeter. The largest holdings belong to operations based in Utah, Montana, Colorado, and Minnesota. The gray area shows the full fire perimeter; white parcels belong to Nebraska-based owners or entities not shown individually.](/images/morrill-fire-ownership/morrill-fire-ranches-v2.png)

---

## The large absentee landowners

The single largest landowner inside the fire is an organization most Nebraskans wouldn't have guessed. Three separate entity names appear in the Garden County deed records: *Farmland Reserve Inc A Utah Nonprofit Corporation*, *Farmland Reserve Inc*, and *Farmland Reserve Inc LDS Church Tax Division*. All three share a mailing address in Salt Lake City. Combined, they account for 342 parcels covering roughly **180,000 acres** (about **26% of the fire area**), assessed at $73 million.

Farmland Reserve is the agricultural arm of The Church of Jesus Christ of Latter-day Saints, managing farms and ranches across more than a dozen states. Farmland Reserve Inc. holds the land; its operating subsidiary, [AgReserves Inc.](https://www.agreserves.com/about/), manages the day-to-day ranching and farming operations.

The parcels in the burn zone are part of the Rex Ranch cow-calf operation. Ranch employees and managers live and work on the property. The church has been buying Sandhills land for three decades; between 2018 and 2022 it was the state's top land purchaser, and in 2004 a [single transaction](https://www.deseret.com/2004/10/7/19854399/lds-church-buys-88-000-acres-in-nebraska/) added 88,000 Nebraska acres.

---

## Ted Turner's Blue Creek Ranch

Ted Turner is the second-largest landowner in the burn zone.

"TURNER/R E" appears in Garden County records tied to 177 parcels covering roughly **81,000 acres**, assessed at $34 million. This is [Blue Creek Ranch](https://www.tedturner.com/turner-ranches/turner-ranch-map/blue-creek-ranch-nebraska/) — Turner's 85,635-acre bison operation north of Oshkosh, Nebraska, which he acquired as part of a Nebraska land-buying spree that began in 1995. At his peak, Turner held nearly 500,000 Nebraska acres (more than twice the area of Douglas County, the state's most populous). His current holdings are around 400,000 acres. [Turner Enterprises](https://www.tedturner.com/turner-ranches/) manages roughly 51,000 bison across 15 ranches in seven states; Turner personally owns about 10% of all bison in the United States.

Turner publicly disclosed a [Lewy body dementia diagnosis in October 2018](https://www.npr.org/2018/10/01/653108552/ted-turner-opens-up-about-having-lewy-body-dementia). His ranching empire is in a succession planning phase.

---

## State school land burned too

The Nebraska Board of Educational Lands and Funds — BELF — appears under four name variants in the parcel records, accounting for roughly 22,300 acres inside the fire perimeter, assessed at $9.8 million.

BELF isn't a landowner most Nebraskans think about, but it's one of the state's largest. [Established by the Nebraska Constitution in 1867](https://nebraskalegislature.gov/laws/articles.php?article=VII-6), it manages approximately 1.258 million acres statewide — land originally granted by the federal government at statehood. Revenue from leases funds K-12 public schools through the Permanent School Trust Fund. The land is leased to agricultural operators, typically ranchers who pay to graze it.

The immediate economic loss from burned BELF land falls primarily on the lessees, not BELF directly; the institution that owns the land doesn't have cattle on it. Ranchers who hold BELF grazing leases for burned parcels could face reduced pasture availability well into the grazing season and potential lease value changes when their contracts come up for renewal.

---

## The families who live here

Of the 256 owners in the burn zone, 44% have out-of-state mailing addresses, and they hold nearly half the burned acreage. The Rex Ranch and Blue Creek Ranch alone account for roughly a third of everything that burned.

That leaves 112 owners with exactly one parcel in the fire zone — the single-section holders, the family ranchers, the people whose entire operation might be one burned pasture. They represent nearly half the affected people but a fraction of the acreage.

![Of the 256 landowners in the burn zone, 112 own exactly one parcel — highlighted here in gold. For these family ranchers, the fire may have consumed their entire operation.](/images/morrill-fire-ownership/morrill-fire-single-parcels-v1.png)

---

## What these numbers don't tell you

County records show who holds title and what assessors estimate the land is worth for tax purposes. They don't show what was on it.

Some names in the data are recognizable in this part of Nebraska: Rush Creek Land and Livestock, Wilson Cattle Co., Black Ranches, Haythorn Land and Cattle. These are working ranches: cow-calf operations, stocker outfits, the same nature of work running across the Rex Ranch and Blue Creek, just on a smaller scale and with a Nebraska address.

Corporate and entity owners (LLCs, corporations, trusts) hold 54% of the parcels; individuals hold 46%. But behind many of those entity names are local employees: the families who run the cow-calf operations, the managers who live on the properties year-round. The ownership address is out of state. The people on the land, in many cases, are not.

The assessed value figure ($315.4 million) is a county-level estimate designed for property tax calculation. It is typically below market value and excludes livestock entirely. A ranching operation that just lost 10,000 acres of pasture, 200 head of cattle, and two miles of fence has suffered a loss that county assessment was never designed to capture. Fencing alone runs $5,000 to $15,000 per mile to replace for basic installed ranch fencing; with 643,000 acres burned, hundreds of miles of fence are almost certainly gone.

A data analysis by The Silo found 499 structures within the fire perimeter. The burn zone is predominantly remote ranch country — the structures at risk are primarily barns, shops, and outbuildings, not subdivisions. Many of those structures were likely spared: ranch headquarters are typically surrounded by mowed areas, roads, and other natural firebreaks, and crews actively defended properties throughout the event. Official damage assessments were still in progress as of late March. Rose White's century-old homestead is the one total loss confirmed in detail.

The USDA opened several disaster assistance programs for affected producers on March 20: the Livestock Indemnity Program for cattle deaths, the Emergency Conservation Program for fencing replacement, and Emergency Livestock Assistance for feed and transport costs. Nebraska Cattlemen also launched a disaster relief fund (disasterrelief@necattlemen.org). A Nebraska Sandhills Rancher Fire Relief Fund, a 501(c)(3) organized by ranching families in Oshkosh, Bayard, and Ashby, is accepting donations as well.

The fire perimeter itself is an approximation. WFIGS perimeters are drawn from aircraft and mapping crew observations and updated as crews work; they include unburned "islands" where the fire skipped. Some parcels that appear inside the boundary may have escaped relatively intact. The definitive picture of where the fire actually burned, and how severely, will come from BAER (Burned Area Emergency Response) teams mapping burn severity after the fire is fully contained.

---

## Methodology

Parcel records for Morrill, Garden, Arthur, and Keith counties were obtained from the [gWorks Nebraska statewide parcel dataset](https://www.gworks.com/). The fire perimeter was retrieved from the [NIFC WFIGS Interagency Perimeters — Current](https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/WFIGS_Interagency_Perimeters_Current/FeatureServer/0) endpoint on March 21, 2026, when the fire was 98% contained (WFIGS polygon area: 770,221 acres — this is the GIS area of the mapped polygon; it differs from the official ICS-209 reported size of 643,074 acres due to methodological differences in how WFIGS and incident command calculate acreage). Parcels were compared with the perimeter using open-source GIS software. Acreage was computed from parcel geometry projected to a flat coordinate system (UTM Zone 14N) — more accurate than the assessor's acreage field, which was zero-filled for Arthur and Keith counties, and which contained a data entry error in one Garden County parcel. Farmland Reserve entities were combined for the aggregate total.

*The Silo is an independent data journalism publication covering the Nebraska Panhandle, southeast Wyoming, and northeast Colorado. If you have information about fire impacts in the burn zone — structures, livestock, recovery efforts — contact us at ryan@spatialstoriesmedia.com.*

---

**Sources:**
- [Nebraska Examiner — Governor Pillen fire update](https://nebraskaexaminer.com/2026/03/14/today-is-heart-wrenching-gov-pillen-gives-update-on-wildfires-after-surveying-damage/)
- [Nebraska Examiner — Rose White fatality](https://nebraskaexaminer.com/2026/03/14/governor-says-nebraska-grandmother-died-in-morrill-fire-trying-to-escape/)
- [1011 Now — Roger White interview, century-old homestead](https://www.1011now.com/2026/03/17/son-morrill-county-wildfire-victim-recalls-night-he-lost-his-mother-her-century-old-home/)
- [Rural Radio — Morrill Fire destroys grazing land for 35,000 cattle](https://ruralradio.com/rrn/news/morrill-fire-destroys-grazing-land-for-35000-cattle-officials-say/)
- [KNOP — USDA disaster assistance for Nebraska producers](https://www.knopnews2.com/2026/03/20/usda-offers-disaster-assistance-nebraska-farmers-livestock-producers-after-wildfires-burn-824000-acres/)
- [CIMSS Satellite Blog — fire weather analysis](https://cimss.ssec.wisc.edu/satellite-blog/archives/69434)
- [Nebraska Public Media — "Largest wildfire in Nebraska history now nearly 100% contained"](https://nebraskapublicmedia.org/en/news/news-articles/largest-wildfire-in-nebraska-history-now-nearly-100-contained/)
- [North Platte Post — "Western Nebraska Wildfires Are Shattering State Records"](https://northplattepost.com/posts/efa1c55c-5519-483e-91a0-fd97e8043607)
- [Nebraska Cattlemen Disaster Relief Fund](https://www.nebraskacattlemen.org/disaster-relief-fund)
- [Nebraska Public Media — fire spread and containment](https://nebraskapublicmedia.org/en/news/news-articles/large-wildfires-burn-thousands-of-acres-across-nebraska/)
- [Flatwater Free Press — LDS Church is Nebraska's top land purchaser](https://flatwaterfreepress.org/whos-buying-nebraska-after-shopping-spree-mormon-church-is-top-land-purchaser/)
- [Deseret News — 2004 Nebraska purchase (88,000 acres)](https://www.deseret.com/2004/10/7/19854399/lds-church-buys-88-000-acres-in-nebraska/)
- [AgReserves.com — About](https://www.agreserves.com/about/)
- [Turner Enterprises — Blue Creek Ranch](https://www.tedturner.com/turner-ranches/turner-ranch-map/blue-creek-ranch-nebraska/)
- [Flatwater Free Press — Ted Turner, longtime Nebraska land baron](https://flatwaterfreepress.org/ted-turner-longtime-nebraska-land-baron-still-buying-as-next-chapter-nears/)
- [NPR — Ted Turner Lewy body dementia disclosure](https://www.npr.org/2018/10/01/653108552/ted-turner-opens-up-about-having-lewy-body-dementia)
- [BELF official website](https://belf.nebraska.gov/)
- [Nebraska Legislature — Article VII-6](https://nebraskalegislature.gov/laws/articles.php?article=VII-6)`;

async function main() {
  // Delete existing story if present
  const existing = await sql`SELECT id FROM "Story" WHERE slug = ${slug}`;
  if (existing.length > 0) {
    const storyId = existing[0].id;
    await sql`DELETE FROM "Image" WHERE "storyId" = ${storyId}`;
    await sql`DELETE FROM "Story" WHERE id = ${storyId}`;
    console.log("Deleted existing story, reinserting...");
  }

  const result = await sql`
    INSERT INTO "Story" (id, slug, title, subtitle, body, category, "publishedAt", featured, "createdAt", "updatedAt")
    VALUES (
      gen_random_uuid()::text,
      ${slug},
      ${title},
      ${subtitle},
      ${body},
      ${category},
      ${publishedAt}::timestamptz,
      true,
      now(),
      now()
    )
    RETURNING id
  `;

  const storyId = result[0].id;

  await sql`
    INSERT INTO "Image" (id, "storyId", url, "altText", caption, sensor, "isPrimary", "createdAt")
    VALUES (
      gen_random_uuid()::text,
      ${storyId},
      '/images/morrill-fire-ownership/morrill-fire-sentinel-v2.png',
      'Sentinel-2 SWIR satellite image showing the Morrill Fire burn scar from space, March 13 2026',
      'A European Space Agency satellite captured this image the morning of March 13, less than 24 hours after ignition near Angora. The enhanced infrared satellite view makes burned areas glow red. The white outline shows the final fire perimeter — roughly 65 miles end to end.',
      'Sentinel-2 L2A · ESA Copernicus · March 13, 2026',
      true,
      now()
    )
  `;

  console.log(`✓ Story inserted: ${slug} (id: ${storyId})`);
  console.log(`  Visit: http://localhost:3000/stories/${slug}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
