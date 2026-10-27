import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/format';

const toneClasses = {
  peach: 'bg-peach',
  rose: 'bg-dusty-rose',
  lavender: 'bg-lavender',
} as const;

type ProductCardProps = {
  name: string;
  slug: string;
  priceCents: number;
  priority?: boolean;
  image: { src: string; alt: string };
  tone: keyof typeof toneClasses;
};

export function ProductCard({
  name,
  slug,
  priceCents,
  image,
  tone,
  priority = false,
}: ProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="bg-sage-mist relative aspect-[4/5] overflow-hidden rounded-t-full">
        <Image
          loading={priority ? 'eager' : 'lazy'}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div
        className={`flex flex-1 items-start justify-between gap-3 px-4 py-4 ${toneClasses[tone]}`}
      >
        <div>
          <h3 className="font-heading text-deep-olive text-xl font-medium">
            <Link
              href={`/shop/${slug}`}
              className="focus-visible:after:outline-ring after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-3"
            >
              {name}
            </Link>
          </h3>
          <p className="text-deep-olive">{formatPrice(priceCents)}</p>
        </div>

        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          className="border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-cream relative z-10 flex h-11 w-15 shrink-0 items-center justify-center rounded-sm border"
        >
          <ShoppingCart
            aria-hidden="true"
            className="size-6"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </article>
  );
}
