import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopFilters } from '@/components/shop/shop-filters';
import { ProductGrid } from '@/components/shop/product-grid';
import { getProducts } from '@/lib/products';
import { parseShopParams, type SearchParams } from '@/lib/shop-params';

export const metadata: Metadata = {
  title: 'Shop',
};

type ShopPageProps = {
  searchParams: Promise<SearchParams>;
};

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <section
      aria-labelledby="shop-title"
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <h1
        id="shop-title"
        className="font-heading text-deep-olive text-4xl md:text-5xl"
      >
        Shop all bouquets
      </h1>

      <Suspense fallback={<p className="mt-2">Loading bouquets…</p>}>
        <ProductResults searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

async function ProductResults({ searchParams }: ShopPageProps) {
  const { filter, sort } = parseShopParams(await searchParams);
  const { nodes, totalCount, pageInfo } = await getProducts({
    filter,
    sort,
    first: 12,
  });

  return (
    <>
      <ShopFilters
        occasion={filter.occasion}
        palette={filter.palette}
        sort={sort}
      />

      <h2 className="mt-2" aria-live="polite" aria-atomic="true">
        {totalCount} {totalCount === 1 ? 'bouquet' : 'bouquets'}
      </h2>

      {nodes.length === 0 ? (
        <p className="mt-10">No bouquets match these filters.</p>
      ) : (
        <ProductGrid
          key={`${filter.occasion}-${filter.palette}-${sort}`}
          initialProducts={nodes}
          initialPageInfo={pageInfo}
          filter={filter}
          sort={sort}
        />
      )}
    </>
  );
}
