import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/lib/products';
import { parseShopParams, type SearchParams } from '@/lib/shop-params';
import { ShopFilters } from '@/components/shop/shop-filters';

export const metadata: Metadata = {
  title: 'Shop',
};

const tones = ['peach', 'rose', 'lavender'] as const;

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
  const { nodes, totalCount } = await getProducts({ filter, sort, first: 12 });

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
        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {nodes.map((product, index) => (
            <li key={product.slug}>
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
      )}
    </>
  );
}
