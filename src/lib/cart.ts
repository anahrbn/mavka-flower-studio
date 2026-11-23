import { cookies } from 'next/headers';

const CART_COOKIE = 'cart';
export const MAX_QUANTITY = 10;

export type CartLine = { variantId: string; quantity: number };

function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) return false;
  const { variantId, quantity } = value as Record<string, unknown>;

  return (
    typeof variantId === 'string' &&
    typeof quantity === 'number' &&
    Number.isInteger(quantity) &&
    quantity >= 1 &&
    quantity <= MAX_QUANTITY
  );
}

export async function getCart(): Promise<CartLine[]> {
  const raw = (await cookies()).get(CART_COOKIE)?.value;
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartLine) : [];
  } catch {
    return [];
  }
}

export async function saveCart(lines: CartLine[]) {
  (await cookies()).set(CART_COOKIE, JSON.stringify(lines), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function getCartCount() {
  const cart = await getCart();
  return cart.reduce((sum, line) => sum + line.quantity, 0);
}
