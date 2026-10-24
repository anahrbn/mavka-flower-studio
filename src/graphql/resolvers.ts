import type { Prisma } from '@/generated/prisma/client';
import { db } from '@/lib/db';
import type {
  ProductFilter,
  ProductSort,
  Resolvers,
} from './generated/resolvers-types';


const MAX_PAGE_SIZE = 48;

const variantsByPrice = {
  variants: { orderBy: { priceCents: 'asc' } },
} as const;

const orderBySort: Record<
  ProductSort,
  Prisma.ProductOrderByWithRelationInput[]
> = {
  FEATURED: [{ featured: 'desc' }, { createdAt: 'asc' }, { id: 'asc' }],
  NEWEST: [{ createdAt: 'desc' }, { id: 'desc' }],
  PRICE_ASC: [{ fromPriceCents: 'asc' }, { id: 'asc' }],
  PRICE_DESC: [{ fromPriceCents: 'desc' }, { id: 'desc' }],
};

function buildWhere(filter?: ProductFilter | null) {
  const where: Prisma.ProductWhereInput = {};

  if (filter?.occasion) where.occasions = { has: filter.occasion };
  if (filter?.palette) where.palette = filter.palette;
  if (filter?.maxPriceCents != null) {
    where.fromPriceCents = { lte: filter.maxPriceCents };
  }

  return where;
}

export const resolvers: Resolvers = {
  Query: {
    products: async (_parent, args) => {
      const where = buildWhere(args.filter);
      const pageSize = Math.min(Math.max(args.first, 1), MAX_PAGE_SIZE);

      const [items, totalCount] = await Promise.all([
        db.product.findMany({
          where,
          orderBy: orderBySort[args.sort],
          take: pageSize + 1,
          ...(args.after ? { cursor: { id: args.after }, skip: 1 } : {}),
          include: variantsByPrice,
        }),
        db.product.count({ where }),
      ]);

      const hasNextPage = items.length > pageSize;
      const nodes = hasNextPage ? items.slice(0, pageSize) : items;

      return {
        nodes,
        totalCount,
        pageInfo: {
          hasNextPage,
          endCursor: nodes.at(-1)?.id ?? null,
        },
      };
    },
    product: (_parent: unknown, args: { slug: string }) =>
      db.product.findUnique({
        where: { slug: args.slug },
        include: variantsByPrice,
      }),
  },
};
