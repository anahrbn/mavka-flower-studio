import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-16 md:py-24"
    >
      <div className="min-w-0 flex-[1_1_420px]">
        <p className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
          Hand-tied bouquets
        </p>
        <h1
          id="hero-title"
          className="font-heading text-deep-olive mt-4 text-5xl leading-[1.05] md:text-7xl"
        >
          Flowers with a <em>story</em>
        </h1>
        <p className="mt-6 max-w-md text-lg">
          Seasonal bouquets wrapped by hand and delivered on the date you
          choose, with a card in your own words.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/shop" className={buttonVariants({ size: 'lg' })}>
            Shop bouquets
          </Link>
          <Link
            href="/#florist"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            Ask the AI florist
          </Link>
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_380px] justify-center">
        <div className="bg-peach relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full">
          <Image
            src="/images/bouquets/bouquet-pink-gypsophila.webp"
            alt="A hand holding a bouquet of soft pink gypsophila in peach wrapping"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
