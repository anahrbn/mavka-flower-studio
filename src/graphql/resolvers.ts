import { getProductBySlug, getProducts } from '@/lib/products';
import type { Resolvers } from './generated/resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    products: (_parent, args) => getProducts(args),
    product: (_parent, args) => getProductBySlug(args.slug),
  },
};
