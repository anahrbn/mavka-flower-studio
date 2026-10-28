import { describe, expect, it } from 'vitest';
import { parseShopParams } from './shop-params';

describe('parseShopParams', () => {
  it('reads known values regardless of case', () => {
    const result = parseShopParams({ occasion: 'birthday', sort: 'price_asc' });

    expect(result.filter.occasion).toBe('BIRTHDAY');
    expect(result.sort).toBe('PRICE_ASC');
  });

  it('ignores unknown values', () => {
    const result = parseShopParams({ occasion: 'banana', sort: 'cheapest' });

    expect(result.filter.occasion).toBeUndefined();
    expect(result.sort).toBe('FEATURED');
  });

  it('falls back to defaults when the URL is empty', () => {
    const result = parseShopParams({});
    expect(result.filter.occasion).toBeUndefined();
    expect(result.sort).toBe('FEATURED');
  });
});
