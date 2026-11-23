'use client';

import { useActionState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { addToCart } from '@/app/cart/actions';

type AddToCartButtonProps = {
  variantId: string;
  productName: string;
};

export function AddToCartButton({
  variantId,
  productName,
}: AddToCartButtonProps) {
  const [state, formAction, isPending] = useActionState(addToCart, null);

  return (
    <form action={formAction} className="relative z-10 shrink-0">
      <input type="hidden" name="variantId" value={variantId} />
      <button
        type="submit"
        aria-label={`Add ${productName} to cart`}
        aria-disabled={isPending}
        className="border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-cream flex h-11 w-15 items-center justify-center rounded-sm border aria-disabled:opacity-60"
      >
        <ShoppingCart aria-hidden="true" className="size-6" strokeWidth={1.5} />
      </button>
      <p role="status" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
