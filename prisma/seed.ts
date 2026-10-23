import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { bouquets } from './seed-data';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL_UNPOOLED'],
});
const prisma = new PrismaClient({ adapter });

const sizes = [
  { size: 'CLASSIC', stemFactor: 1, priceFactor: 1 },
  { size: 'DELUXE', stemFactor: 1.5, priceFactor: 1.4 },
  { size: 'GRAND', stemFactor: 2, priceFactor: 1.8 },
] as const;

function roundToFiveDollars(cents: number) {
  return Math.round(cents / 500) * 500;
}

async function main() {
  for (const { basePriceCents, baseStems, ...product } of bouquets) {
    const { id: productId } = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });

    for (const { size, stemFactor, priceFactor } of sizes) {
      const stems = Math.round(baseStems * stemFactor);
      const priceCents = roundToFiveDollars(basePriceCents * priceFactor);

      await prisma.productVariant.upsert({
        where: { productId_size: { productId, size } },
        update: { stems, priceCents },
        create: { productId, size, stems, priceCents },
      });
    }
  }

  console.log(`Seeded ${bouquets.length} bouquets.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
