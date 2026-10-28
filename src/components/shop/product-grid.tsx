'use client';

import { useEffect, useRef, useState } from 'react';
import { ProductCard } from '@/components/product/product-card';
import { Button } from '@/components/ui/button';
import type {
  ProductFilter,
  ProductSort,
} from '@/graphql/generated/resolvers-types';

const tones = ['peach', 'rose', 'lavender'] as const;

const MORE_PRODUCTS_QUERY = /* GraphQL */ `
  query MoreProducts(
    $filter: ProductFilter
    $sort: ProductSort
    $after: String
  ) {
    products(filter: $filter, sort: $sort, after: $after) {
      nodes {
        slug
        name
        fromPriceCents
        imageUrl
        imageAlt
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export type ProductSummary = {
  slug: string;
  name: string;
  fromPriceCents: number;
  imageUrl: string;
  imageAlt: string;
};

type PageInfo = {
  hasNextPage: boolean;
  endCursor: string | null;
};

type MoreProductsResponse = {
  data?: { products: { nodes: ProductSummary[]; pageInfo: PageInfo } };
};

type ProductGridProps = {
  initialProducts: ProductSummary[];
  initialPageInfo: PageInfo;
  filter: ProductFilter;
  sort: ProductSort;
};

export function ProductGrid({
  initialProducts,
  initialPageInfo,
  filter,
  sort,
}: ProductGridProps) {
  const [products, setProducts] = useState(initialProducts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [firstNewIndex, setFirstNewIndex] = useState<number | null>(null);
  const firstNewRef = useRef<HTMLLIElement>(null);

  // Keyboard users continue from the first new card instead of the top of the page.
  useEffect(() => {
    firstNewRef.current?.focus();
  }, [firstNewIndex]);

  async function loadMore() {
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: MORE_PRODUCTS_QUERY,
          variables: { filter, sort, after: pageInfo.endCursor },
        }),
      });
      const { data }: MoreProductsResponse = await response.json();
      if (!response.ok || !data) throw new Error('Failed to load products');
      setFirstNewIndex(products.length);
      setProducts([...products, ...data.products.nodes]);
      setPageInfo(data.products.pageInfo);
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <li
            key={product.slug}
            ref={index === firstNewIndex ? firstNewRef : undefined}
            tabIndex={index === firstNewIndex ? -1 : undefined}
          >
            <ProductCard
              name={product.name}
              slug={product.slug}
              priceCents={product.fromPriceCents}
              image={{ src: product.imageUrl, alt: product.imageAlt }}
              tone={tones[index % 3] ?? 'peach'}
              priority={index < 4}
            />
          </li>
        ))}
      </ul>

      {pageInfo.hasNextPage && (
        <div className="mt-12 flex flex-col items-center gap-3">
          <Button variant="outline" size="lg" onClick={loadMore}>
            {status === 'loading' ? 'Loading…' : 'Show more'}
          </Button>
          {status === 'error' && (
            <p role="alert">Couldn’t load more bouquets. Please try again.</p>
          )}
        </div>
      )}
    </>
  );
}
