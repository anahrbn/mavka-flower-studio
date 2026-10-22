import { Minus, Plus } from 'lucide-react';

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
};

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  label = 'Quantity',
}: QuantityStepperProps) {
  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div
      role="group"
      aria-label={label}
      className="border-input inline-flex h-13 items-center rounded-sm border"
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        aria-disabled={atMin}
        onClick={() => {
          if (!atMin) onChange(value - 1);
        }}
        className="text-deep-olive flex h-full w-12 items-center justify-center aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
      >
        <Minus aria-hidden="true" className="size-4" />
      </button>

      <output
        aria-live="polite"
        className="text-deep-olive min-w-8 text-center font-medium"
      >
        {value}
      </output>

      <button
        type="button"
        aria-label="Increase quantity"
        aria-disabled={atMax}
        onClick={() => {
          if (!atMax) onChange(value + 1);
        }}
        className="text-deep-olive flex h-full w-12 items-center justify-center aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
      >
        <Plus aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
