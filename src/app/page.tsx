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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-heading text-deep-olive text-6xl">
        Flowers with a <em>story</em>
      </h1>

      <ul className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellers.map((product) => (
          <li key={product.slug}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
