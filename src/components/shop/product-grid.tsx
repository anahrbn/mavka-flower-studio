import { ProductCard } from '@/components/product/product-card';

const tones = ['peach', 'rose', 'lavender'] as const;

export type ProductSummary = {
  slug: string;
  name: string;
  fromPriceCents: number;
  imageUrl: string;
  imageAlt: string;
};

type ProductGridProps = {
  products: ProductSummary[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
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
  );
}
