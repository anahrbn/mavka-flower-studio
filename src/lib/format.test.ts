import { describe, expect, it } from 'vitest';
import { formatPrice } from './format';

describe('formatPrice', () => {
  it('formats cents as US dollars', () => {
    expect(formatPrice(6500)).toBe('$65.00');
  });

  it('keeps cent precision', () => {
    expect(formatPrice(1999)).toBe('$19.99');
  });

  it('adds a thousands separator', () => {
    expect(formatPrice(125000)).toBe('$1,250.00');
  });

  it('formats zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });
});
