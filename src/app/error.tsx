'use client';

import { useEffect } from 'react';
import { WiltedFlower } from '@/components/illustrations/wilted-flower';
import { Button } from '@/components/ui/button';

type ErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-labelledby="error-title"
      className="mx-auto max-w-2xl px-6 py-24 text-center"
    >
      <WiltedFlower className="mx-auto mb-6 w-40" />
      <h1
        id="error-title"
        className="font-heading text-deep-olive text-4xl md:text-5xl"
      >
        A petal fell out of place
      </h1>
      <p className="mt-4">
        We couldn’t load this page. It’s usually temporary, so please try again.
      </p>
      <Button size="lg" className="mt-8" onClick={unstable_retry}>
        Try again
      </Button>
    </section>
  );
}
