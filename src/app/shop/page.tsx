import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/lib/products';
import { parseShopParams, type SearchParams } from '@/lib/shop-params';

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

  if (nodes.length === 0) {
    return <p className="mt-10">No bouquets match these filters.</p>;
  }

  return (
    <>
      <h2 className="mt-2">{totalCount} bouquets</h2>

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
    </>
  );
}
