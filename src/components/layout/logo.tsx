import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Mavka Flower Studio, home"
      className="text-deep-olive flex flex-col leading-none"
    >
      <span aria-hidden="true" className="font-heading text-3xl italic">
        Mavka
      </span>
      <span
        aria-hidden="true"
        className="text-moss-gray mt-1 text-[11px] font-medium tracking-[0.24em] uppercase"
      >
        Flower studio
      </span>
    </Link>
  );
}
