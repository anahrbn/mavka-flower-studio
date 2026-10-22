import { Hero } from '@/components/home/hero';
import { Benefits } from '@/components/home/benefits';
import { ProductCard } from '@/components/product/product-card';

const bestSellers = [
  {
    name: 'Cloud Garden',
    slug: 'cloud-garden',
    priceCents: 8500,
    tone: 'peach',
    image: {
      src: '/images/bouquets/bouquet-hydrangea-trio-peach-wrap.webp',
      alt: 'Pink, blue and white hydrangeas in peach wrapping',
    },
  },
  {
    name: 'Blush Morning',
    slug: 'blush-morning',
    priceCents: 7200,
    tone: 'rose',
    image: {
      src: '/images/bouquets/bouquet-peach-roses-pink-wrap.webp',
      alt: 'Peach roses with eucalyptus in blush pink wrapping',
    },
  },
  {
    name: 'Quiet Grace',
    slug: 'quiet-grace',
    priceCents: 6500,
    tone: 'lavender',
    image: {
      src: '/images/bouquets/bouquet-white-peony-kraft.webp',
      alt: 'White peonies wrapped in kraft paper',
    },
  },
  {
    name: 'Peony Hour',
    slug: 'peony-hour',
    priceCents: 9000,
    tone: 'peach',
    image: {
      src: '/images/bouquets/bouquet-pink-peonies.webp',
      alt: 'A bunch of bright pink peonies',
    },
  },
] as const;

export default function HomePage() {
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
          {bestSellers.map((product) => (
            <li key={product.slug}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
