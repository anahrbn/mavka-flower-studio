import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductCard } from './product-card';

const product = {
  name: 'Cloud Garden',
  slug: 'cloud-garden',
  priceCents: 8500,
  tone: 'peach',
  image: {
    src: '/images/bouquets/bouquet-hydrangea-trio-peach-wrap.webp',
    alt: 'Pink, blue and white hydrangeas in peach wrapping',
  },
} as const;

describe('ProductCard', () => {
  it('links the product name to its page', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByRole('link', { name: 'Cloud Garden' })).toHaveAttribute(
      'href',
      '/shop/cloud-garden',
    );
  });

  it('shows the formatted price', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByText('$85.00')).toBeInTheDocument();
  });

  it('labels the cart button with the product name', () => {
    render(<ProductCard {...product} />);

    expect(
      screen.getByRole('button', { name: 'Add Cloud Garden to cart' }),
    ).toBeInTheDocument();
  });

  it('describes the photo for screen readers', () => {
    render(<ProductCard {...product} />);

    expect(
      screen.getByRole('img', {
        name: 'Pink, blue and white hydrangeas in peach wrapping',
      }),
    ).toBeInTheDocument();
  });
});
