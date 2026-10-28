import { Occasion, Palette } from '@/generated/prisma/enums';
import type {
  ProductFilter,
  ProductSort,
} from '@/graphql/generated/resolvers-types';

type SearchParams = Record<string, string | string[] | undefined>;

const sorts: ProductSort[] = ['FEATURED', 'NEWEST', 'PRICE_ASC', 'PRICE_DESC'];

// URL values come from users, so anything outside the allowed list is ignored.
function pick<T extends string>(
  value: string | string[] | undefined,
  allowed: readonly T[],
): T | undefined {
  if (typeof value !== 'string') return undefined;

  const upper = value.toUpperCase();
  return allowed.find((item) => item === upper);
}

export function parseShopParams(params: SearchParams) {
  const filter: ProductFilter = {
    occasion: pick(params['occasion'], Object.values(Occasion)),
    palette: pick(params['palette'], Object.values(Palette)),
  };

  const sort = pick(params['sort'], sorts) ?? 'FEATURED';
  return { filter, sort };
}
