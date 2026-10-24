import { db } from '@/lib/db';

const variantsByPrice = {
  variants: { orderBy: { priceCents: 'asc' } },
} as const;

export const resolvers = {
  Query: {
    products: () =>
      db.product.findMany({
        orderBy: { createdAt: 'asc' },
        include: variantsByPrice,
      }),
    product: (_parent: unknown, args: { slug: string }) =>
      db.product.findUnique({
        where: { slug: args.slug },
        include: variantsByPrice,
      }),
  },
  Product: {
    fromPriceCents: (product: { variants: { priceCents: number }[] }) =>
      product.variants[0]?.priceCents ?? 0,
  },
};
