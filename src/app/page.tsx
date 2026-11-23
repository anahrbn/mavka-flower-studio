import { AiFlorist } from '@/components/home/ai-florist';
import { Benefits } from '@/components/home/benefits';
import { Hero } from '@/components/home/hero';
import { OurStory } from '@/components/home/our-story';
import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/lib/products';

const tones = ['peach', 'rose', 'lavender'] as const;

export default async function HomePage() {
  const { nodes: featured } = await getProducts({ first: 4 });

  return (
    <>
      <Hero />
      <Benefits />

      <section
        aria-labelledby="best-title"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2
          id="best-title"
          className="font-heading text-deep-olive text-4xl md:text-5xl"
        >
          Find your bouquet
        </h2>

        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <li key={product.slug}>
              <ProductCard
                name={product.name}
                slug={product.slug}
                priceCents={product.fromPriceCents}
                image={{ src: product.imageUrl, alt: product.imageAlt }}
                tone={tones[index % 3] ?? 'peach'}
                variantId={product.variants[0]?.id}
              />
            </li>
          ))}
        </ul>
      </section>

      <AiFlorist />
      <OurStory />
    </>
  );
}
