'use client';

import { useState } from 'react';
import { QuantityStepper } from '@/components/product/quantity-stepper';
import type { BouquetSize } from '@/generated/prisma/enums';
import { formatPrice } from '@/lib/format';

const sizeLabels: Record<BouquetSize, string> = {
  CLASSIC: 'Classic',
  DELUXE: 'Deluxe',
  GRAND: 'Grand',
};

type Variant = {
  id: string;
  size: BouquetSize;
  stems: number;
  priceCents: number;
};

type ProductOptionsProps = {
  variants: Variant[];
};

export function ProductOptions({ variants }: ProductOptionsProps) {
  const [selected, setSelected] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  if (!selected) return null;

  return (
    <div className="mt-8">
      <fieldset>
        <legend className="font-medium">Size</legend>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {variants.map((variant) => (
            <label
              key={variant.id}
              className="border-input has-checked:border-deep-olive has-checked:bg-sage-mist has-checked:ring-deep-olive has-focus-visible:outline-ring flex cursor-pointer flex-col rounded-sm border px-4 py-3 has-checked:ring-1 has-focus-visible:outline-2 has-focus-visible:outline-offset-3"
            >
              <input
                type="radio"
                name="size"
                value={variant.size}
                checked={variant.id === selected.id}
                onChange={() => setSelected(variant)}
                className="sr-only"
              />
              <span className="font-medium">{sizeLabels[variant.size]}</span>
              <span className="text-sm">{variant.stems} stems</span>
              <span className="text-sm">{formatPrice(variant.priceCents)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 flex items-center gap-6">
        <p className="font-heading text-deep-olive text-3xl">
          {formatPrice(selected.priceCents)}
        </p>
        <QuantityStepper value={quantity} onChange={setQuantity} />
      </div>
    </div>
  );
}
