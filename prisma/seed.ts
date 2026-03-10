import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

const stories = [
  {
    slug: "scotts-bluff-smoke-july-2024",
    title: "Smoke Drift Over Scotts Bluff",
    subtitle: "Satellite captures wildfire smoke columns from the Pine Ridge moving southeast",
    body: `Sentinel-2 imagery captured on July 14th shows a dense smoke plume originating near the Hat Creek drainage in Dawes County, drifting southeast across the North Platte Valley. The plume reached Scottsbluff by mid-afternoon, reducing visibility to under three miles at Heilig Field.

The fire, designated the Hat Creek Complex, had burned approximately 4,200 acres by the time this image was acquired. SWIR band composite shows the active fire perimeter in red-orange contrast against the surrounding mixed-grass prairie.

Air quality readings from the Nebraska DEQ monitoring station in Scottsbluff registered AQI values in the "Unhealthy for Sensitive Groups" range through the evening of July 15th.`,
    category: Category.WILDFIRE,
    publishedAt: new Date("2024-07-15T14:00:00Z"),
    featured: true,
    images: [
      {
        url: "/images/placeholder-wildfire.jpg",
        caption: "Sentinel-2 SWIR composite, July 14 2024. Active fire perimeter shown in orange-red. Smoke plume extends southeast toward the North Platte Valley.",
        altText: "Satellite image showing smoke plume over Scotts Bluff National Monument",
        sensor: "Sentinel-2 L2A",
        isPrimary: true,
      },
    ],
  },
  {
    slug: "winter-wheat-greenup-march-2024",
    title: "Winter Wheat Breaks Dormancy Across the Panhandle",
    subtitle: "NDVI imagery shows greenup advancing two weeks ahead of the 20-year average",
    body: `MOD13Q1 NDVI composites from the first two weeks of March show winter wheat fields in Kimball, Banner, and Cheyenne counties entering active growth phase significantly earlier than historical norms. The average greenup date for this region, based on MODIS data from 2000–2023, falls around March 22nd. This year, meaningful NDVI gain is visible by March 8th.

The early greenup follows a mild February with above-average soil temperatures. While early green-up can benefit yield under normal conditions, it also increases vulnerability to late spring freeze events — a concern given the climatological frost probability in April across the Nebraska Panhandle.

The Panhandle Research and Extension Center in Scottsbluff is monitoring closely. Extension agronomist data suggest the Panhandle's approximately 340,000 acres of winter wheat are all showing accelerated development.`,
    category: Category.AGRICULTURE,
    publishedAt: new Date("2024-03-12T10:00:00Z"),
    featured: false,
    images: [
      {
        url: "/images/placeholder-ndvi.jpg",
        caption: "MODIS NDVI anomaly, March 1–15 2024. Green indicates above-average vegetation index relative to 2000–2023 baseline. Fields in Kimball and Banner counties showing strongest positive anomaly.",
        altText: "MODIS NDVI map showing early greenup of winter wheat fields",
        sensor: "MODIS MOD13Q1",
        isPrimary: true,
      },
    ],
  },
  {
    slug: "north-platte-river-flood-watch-may-2024",
    title: "North Platte Rises Fast After Memorial Day Rain",
    subtitle: "Sentinel-1 SAR shows inundation extent near Bridgeport; Minatare gauge at action stage",
    body: `A slow-moving low pressure system delivered 3.2 to 4.8 inches of rain across the upper North Platte watershed between May 27th and 29th. Sentinel-1 C-band SAR imagery acquired May 30th shows surface water extent exceeding bankfull levels along a 12-mile reach between Bridgeport and Broadwater.

SAR is particularly valuable here — cloud cover from the same storm system prevented optical imagery acquisition for four consecutive days. The C-band backscatter signal clearly delineates inundated fields from surrounding dry ground regardless of cloud cover.

The USGS gauge at Minatare, Nebraska (station 06693000) recorded a peak stage of 8.3 feet on May 30th, above the 7.5-foot action stage. No structures were reported flooded, but access roads to several agricultural fields in the river bottom were impassable for 48 hours.`,
    category: Category.HYDROLOGY,
    publishedAt: new Date("2024-05-31T09:00:00Z"),
    featured: false,
    images: [
      {
        url: "/images/placeholder-sar.jpg",
        caption: "Sentinel-1 SAR VV/VH composite, May 30 2024. Dark areas indicate inundation. North Platte River channel visible center-right; flooded agricultural fields in blue-purple tones.",
        altText: "Sentinel-1 SAR image showing North Platte River flood extent",
        sensor: "Sentinel-1 GRD",
        isPrimary: true,
      },
    ],
  },
  {
    slug: "wind-energy-buildout-wyoming-border",
    title: "Wind Farm Footprint Grows Along the Wyoming Border",
    subtitle: "Landsat time series shows 15 years of infrastructure expansion in Laramie County",
    body: `A Landsat time series spanning 2009 to 2024 documents the rapid expansion of wind energy infrastructure in southeastern Wyoming and the Nebraska-Wyoming border region. The number of visible turbine pads in this analysis area has grown from approximately 180 in 2009 to over 740 in 2024 — a 4× increase over 15 years.

The most recent additions visible in the 2024 imagery extend south from the existing Roundup Wind Farm complex into formerly undeveloped shortgrass prairie. Access roads are the most prominent indicator in mid-resolution imagery; individual turbine pads become visible in high-sun-angle summer scenes.

Wyoming leads the nation in per-capita wind generation. Laramie County, which includes Cheyenne, has become a focal point for transmission corridor planning as the grid adapts to carry power from the Wyoming wind resource to population centers along the Front Range.`,
    category: Category.ENERGY,
    publishedAt: new Date("2024-04-08T11:00:00Z"),
    featured: false,
    images: [
      {
        url: "/images/placeholder-landsat.jpg",
        caption: "Landsat 8 true color composite, August 2024. Wind turbine access roads visible as linear features in lower third of image. Wyoming-Nebraska state line runs east-west through frame.",
        altText: "Landsat satellite image showing wind turbine development along Wyoming-Nebraska border",
        sensor: "Landsat 8 OLI",
        isPrimary: true,
      },
    ],
  },
  {
    slug: "drought-monitor-panhandle-august-2024",
    title: "D3 Extreme Drought Returns to the Southern Panhandle",
    subtitle: "MODIS NDVI and soil moisture proxy show conditions matching the 2012 drought footprint",
    body: `By August 1st, the US Drought Monitor had expanded D3 (Extreme Drought) conditions to cover the southern tier of the Nebraska Panhandle — Kimball, Banner, and Cheyenne counties — for the first time since 2022. MODIS NDVI values for the region averaged 0.24 in late July, compared to a 2000–2023 July mean of 0.41.

The current drought footprint, as revealed by satellite vegetation index data, closely resembles conditions observed in August 2012 — widely considered the benchmark drought year for this region. Pasture conditions are the primary concern; rangeland managers across the area are reporting accelerated destocking.

Precipitation deficits have accumulated since November 2023. The Kimball, NE climate station has recorded 4.3 inches of precipitation in 2024 through July, compared to a normal of 9.8 inches for the same period.`,
    category: Category.WEATHER,
    publishedAt: new Date("2024-08-05T08:00:00Z"),
    featured: false,
    images: [
      {
        url: "/images/placeholder-drought.jpg",
        caption: "MODIS NDVI departure from mean, July 16–31 2024. Orange and red indicate NDVI well below the 2000–2023 average. D3 drought boundary (USDM) overlaid in dashed white.",
        altText: "MODIS NDVI anomaly map showing drought conditions in Nebraska Panhandle",
        sensor: "MODIS MOD13Q1",
        isPrimary: true,
      },
    ],
  },
  {
    slug: "missile-fields-dawes-sioux-county",
    title: "The Fields Beneath the Fields",
    subtitle: "Minuteman III silos and their 5-mile buffer zones, mapped from above",
    body: `Scattered across the shortgrass prairie of Dawes, Sioux, and Sheridan counties lie some of the most consequential pieces of infrastructure in the United States — Minuteman III ICBM launch facilities, each maintained by the 90th Missile Wing at F.E. Warren Air Force Base.

From satellite imagery, the installations are unremarkable: a fenced pad, a gravel access road, a gate. Easy to drive past. But mapped against land ownership and land use data, a more complex picture emerges. Each silo carries a federal restricted airspace zone of roughly five miles radius. These zones, overlapping across the missile field, effectively define a landscape — one that has constrained development, shaped ranching patterns, and created inadvertent wildlife corridors for decades.

This first look uses Sentinel-2 true color composite and county parcel data to document the infrastructure footprint. Future installments will examine the relationship between missile fields, federal land ownership, and wildlife movement corridors in the Pine Ridge.`,
    category: Category.MISSILE_FIELDS,
    publishedAt: new Date("2024-06-20T12:00:00Z"),
    featured: false,
    images: [
      {
        url: "/images/placeholder-missile.jpg",
        caption: "Sentinel-2 true color, Sioux County NE, June 2024. Minuteman III silo facility visible at center; characteristic access road geometry and fenced perimeter. Coordinates withheld per operational security norms.",
        altText: "Satellite image showing Minuteman III ICBM silo facility in Sioux County Nebraska",
        sensor: "Sentinel-2 L2A",
        isPrimary: true,
      },
    ],
  },
];

async function main() {
  console.log("Seeding database...");

  for (const story of stories) {
    const { images, ...storyData } = story;
    await prisma.story.upsert({
      where: { slug: storyData.slug },
      update: {},
      create: {
        ...storyData,
        images: {
          create: images.map((img) => ({
            ...img,
            capturedAt: storyData.publishedAt,
          })),
        },
      },
    });
    console.log(`  ✓ ${storyData.title}`);
  }

  console.log(`\nSeeded ${stories.length} stories.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
