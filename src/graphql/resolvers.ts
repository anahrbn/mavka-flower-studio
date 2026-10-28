import { getProductBySlug, getProducts } from '@/lib/products';
import type { Resolvers } from './generated/resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    // GraphQL creates null-prototype objects for args, which 'use cache' can't serialize.
    products: (_parent, { filter, sort, first, after }) =>
      getProducts({ filter: filter && { ...filter }, sort, first, after }),
    product: (_parent, args) => getProductBySlug(args.slug),
  },
};
