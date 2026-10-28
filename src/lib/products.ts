import { cacheLife, cacheTag } from 'next/cache';
import type { Prisma } from '@/generated/prisma/client';
import type {
  ProductFilter,
  ProductSort,
} from '@/graphql/generated/resolvers-types';
import { db } from '@/lib/db';

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

type GetProductsArgs = {
  filter?: ProductFilter | null;
  sort?: ProductSort;
  first?: number;
  after?: string | null;
};

export async function getProducts({
  filter,
  sort = 'FEATURED',
  first = 12,
  after,
}: GetProductsArgs = {}) {
  'use cache';
  cacheLife('hours');
  cacheTag('products');

  const where = buildWhere(filter);
  const pageSize = Math.min(Math.max(first, 1), MAX_PAGE_SIZE);

  const [items, totalCount] = await Promise.all([
    db.product.findMany({
      where,
      orderBy: orderBySort[sort],
      take: pageSize + 1,
      ...(after ? { cursor: { id: after }, skip: 1 } : {}),
      include: variantsByPrice,
    }),
    db.product.count({ where }),
  ]);

  const hasNextPage = items.length > pageSize;
  const nodes = hasNextPage ? items.slice(0, pageSize) : items;

  return {
    nodes,
    totalCount,
    pageInfo: { hasNextPage, endCursor: nodes.at(-1)?.id ?? null },
  };
}

export async function getProductBySlug(slug: string) {
  'use cache';
  cacheLife('hours');
  cacheTag('products');

  return db.product.findUnique({ where: { slug }, include: variantsByPrice });
}

export async function getProductSlugs() {
  'use cache';
  cacheLife('hours');
  cacheTag('products');

  return db.product.findMany({ select: { slug: true } });
}
