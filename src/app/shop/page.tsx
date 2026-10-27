import type { Metadata } from 'next';
import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop',
};

const tones = ['peach', 'rose', 'lavender'] as const;

export default async function ShopPage() {
  const { nodes, totalCount } = await getProducts({ first: 12 });

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

      <h2 className="mt-2">{totalCount} bouquets</h2>

      <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((product, index) => (
          <li key={product.slug}>
            <ProductCard
              name={product.name}
              slug={product.slug}
              priority={index < 4}
              priceCents={product.fromPriceCents}
              image={{ src: product.imageUrl, alt: product.imageAlt }}
              tone={tones[index % 3] ?? 'peach'}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
