import Link from 'next/link';
import { Logo } from './logo';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/occasions', label: 'Occasions' },
  { href: '/#florist', label: 'AI florist' },
  { href: '/#story', label: 'Our story' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  { href: 'https://www.facebook.com', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://www.tiktok.com', label: 'TikTok', Icon: TikTokIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep-olive text-cream [--ring:var(--color-cream)]">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-6 pt-16 pb-10">
        <div>
          <Logo className="text-cream" />
          <ul aria-label="Social media" className="mt-6 flex gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="border-olive hover:bg-olive flex size-11 items-center justify-center rounded-sm border"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-olive mx-auto max-w-6xl border-t px-6 py-6 text-sm">
        Demo store for a portfolio project. Payments run in test mode.
      </p>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c0 3 2.2 5 5 5" />
    </svg>
  );
}
