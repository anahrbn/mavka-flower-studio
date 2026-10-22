import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Mavka Flower Studio, home"
      className={cn('text-deep-olive flex flex-col leading-none', className)}
    >
      <span aria-hidden="true" className="font-heading text-3xl italic">
        Mavka
      </span>
      <span
        aria-hidden="true"
        className="mt-1 text-[11px] font-medium tracking-[0.24em] uppercase"
      >
        Flower studio
      </span>
    </Link>
  );
}
