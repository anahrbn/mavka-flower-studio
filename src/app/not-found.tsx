import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { WiltedFlower } from '@/components/illustrations/wilted-flower';
import { cn } from 'cn';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="mx-auto max-w-2xl px-6 py-24 text-center"
    >
      <WiltedFlower className="mx-auto mb-6 w-40" />
      <p className="text-sm tracking-widest uppercase">Error 404</p>
      <h1
        id="not-found-title"
        className="font-heading text-deep-olive mt-2 text-4xl md:text-5xl"
      >
        This page has wilted
      </h1>
      <p className="mt-4">
        It may have been moved, or the link might be wrong. Let’s find you
        something fresh.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/shop" className={buttonVariants({ size: 'lg' })}>
          Browse bouquets
        </Link>

        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: 'outline',
              size: 'lg',
            }),
          )}
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
