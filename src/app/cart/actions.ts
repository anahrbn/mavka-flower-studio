'use server';

import { getCart, MAX_QUANTITY, saveCart } from '@/lib/cart';
import { db } from '@/lib/db';

export type AddToCartState = { message: string } | null;

export async function addToCart(
  _state: AddToCartState,
  formData: FormData,
): Promise<AddToCartState> {
  const variantId = formData.get('variantId');
  const quantity = Number(formData.get('quantity') ?? 1);

  if (
    typeof variantId !== 'string' ||
    !Number.isInteger(quantity) ||
    quantity < 1
  ) {
    return { message: 'Something went wrong. Please try again.' };
  }

  // Form values can be edited in the browser, so the variant is checked in the database.
  const variant = await db.productVariant.findUnique({
    where: { id: variantId },
    include: { product: true },
  });
  if (!variant) return { message: 'This bouquet is no longer available.' };

  const cart = await getCart();
  const line = cart.find((item) => item.variantId === variantId);

  if (line) {
    line.quantity = Math.min(line.quantity + quantity, MAX_QUANTITY);
  } else {
    cart.push({ variantId, quantity: Math.min(quantity, MAX_QUANTITY) });
  }

  await saveCart(cart);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  return {
    message: `${variant.product.name} added to cart. ${count} ${count === 1 ? 'item' : 'items'} in cart.`,
  };
}
