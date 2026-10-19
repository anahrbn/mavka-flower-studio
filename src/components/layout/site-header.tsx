import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { Logo } from './logo';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/occasions', label: 'Occasions' },
  { href: '/#florist', label: 'AI florist' },
  { href: '/#story', label: 'Our story' },
];

export function SiteHeader() {
  return (
    <header className="border-border border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Logo />

        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-deep-olive hover:text-olive inline-block py-2.5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Search"
            className="text-deep-olive hover:text-olive flex size-11 items-center justify-center"
          >
            <Search aria-hidden="true" className="size-5" strokeWidth={1.6} />
          </button>
          <Link
            href="/cart"
            aria-label="Cart, 0 items"
            className="text-deep-olive hover:text-olive flex size-11 items-center justify-center"
          >
            <ShoppingCart
              aria-hidden="true"
              className="size-6"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
