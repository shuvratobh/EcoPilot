// Prisma seed script
// Run with: npm run db:seed
// Populates: EmissionFactors for Bangladesh (BD), test organization

import { PrismaClient, ResourceType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Emission Factors (Bangladesh 2026) ─────────────────────────────────────
  // Sources: Bangladesh PGCB, IPCC AR6, WRAP 2023
  const emissionFactors = [
    {
      regionCode: "BD",
      resourceType: ResourceType.Electricity,
      factorValue: 0.582,
      unit: "kg CO2e/kWh",
      sourceName: "Bangladesh PGCB 2026",
      sourceUrl: "https://pgcb.gov.bd",
      effectiveYear: 2026,
    },
    {
      regionCode: "BD",
      resourceType: ResourceType.Water,
      factorValue: 0.0003,
      unit: "kg CO2e/litre",
      sourceName: "IPCC AR6",
      sourceUrl: "https://www.ipcc.ch/ar6",
      effectiveYear: 2026,
    },
    {
      regionCode: "BD",
      resourceType: ResourceType.Paper,
      factorValue: 0.0084,
      unit: "kg CO2e/page",
      sourceName: "WRAP 2023",
      sourceUrl: "https://www.wrap.ngo",
      effectiveYear: 2026,
    },
    {
      regionCode: "BD",
      resourceType: ResourceType.Waste,
      factorValue: 0.467,
      unit: "kg CO2e/kg waste",
      sourceName: "IPCC AR6",
      sourceUrl: "https://www.ipcc.ch/ar6",
      effectiveYear: 2026,
    },
    {
      regionCode: "BD",
      resourceType: ResourceType.Recycling,
      factorValue: -0.15,
      unit: "kg CO2e/kg recycled",
      sourceName: "WRAP 2023",
      sourceUrl: "https://www.wrap.ngo",
      effectiveYear: 2026,
    },
  ];

  for (const factor of emissionFactors) {
    await prisma.emissionFactor.upsert({
      where: {
        regionCode_resourceType_effectiveYear: {
          regionCode: factor.regionCode,
          resourceType: factor.resourceType,
          effectiveYear: factor.effectiveYear,
        },
      },
      create: factor,
      update: factor,
    });
  }

  console.log(`✅ Seeded ${emissionFactors.length} emission factors`);
  console.log("✅ Seed complete");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
