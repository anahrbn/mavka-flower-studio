import Form from 'next/form';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Occasion, Palette } from '@/generated/prisma/enums';
import type { ProductSort } from '@/graphql/generated/resolvers-types';

const occasionLabels: Record<Occasion, string> = {
  BIRTHDAY: 'Birthday',
  ANNIVERSARY: 'Anniversary',
  APOLOGY: 'Apology',
  THANK_YOU: 'Thank you',
  SYMPATHY: 'Sympathy',
  WEDDING: 'Wedding',
  JUST_BECAUSE: 'Just because',
};

const paletteLabels: Record<Palette, string> = {
  PASTEL: 'Pastel',
  BRIGHT: 'Bright',
  WHITE: 'White',
  WARM: 'Warm',
};

const sortLabels: Record<ProductSort, string> = {
  FEATURED: 'Featured',
  NEWEST: 'Newest',
  PRICE_ASC: 'Price: low to high',
  PRICE_DESC: 'Price: high to low',
};

type ShopFiltersProps = {
  occasion?: Occasion | null;
  palette?: Palette | null;
  sort: ProductSort;
};

type FilterSelectProps = {
  label: string;
  name: string;
  defaultValue: string;
  children: React.ReactNode;
};

function FilterSelect({
  label,
  name,
  defaultValue,
  children,
}: FilterSelectProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label}
      <span className="relative">
        <select
          name={name}
          defaultValue={defaultValue}
          className="border-input text-deep-olive h-11 w-full appearance-none rounded-sm border bg-transparent pr-10 pl-3 focus-visible:outline-1 focus-visible:outline-offset-2"
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="text-deep-olive pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
        />
      </span>
    </label>
  );
}

export function ShopFilters({ occasion, palette, sort }: ShopFiltersProps) {
  return (
    <Form
      action="/shop"
      aria-label="Filter bouquets"
      className="mt-8 flex flex-wrap items-end gap-4"
    >
      <FilterSelect
        name="occasion"
        label="Occasion"
        defaultValue={occasion?.toLowerCase() ?? ''}
      >
        <option value="">All occasions</option>
        {Object.entries(occasionLabels).map(([value, label]) => (
          <option key={value} value={value.toLowerCase()}>
            {label}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect
        name="palette"
        label="Palette"
        defaultValue={palette?.toLowerCase() ?? ''}
      >
        <option value="">All palettes</option>
        {Object.entries(paletteLabels).map(([value, label]) => (
          <option key={value} value={value.toLowerCase()}>
            {label}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect name="sort" label="Sort" defaultValue={sort.toLowerCase()}>
        {Object.entries(sortLabels).map(([value, label]) => (
          <option key={value} value={value.toLowerCase()}>
            {label}
          </option>
        ))}
      </FilterSelect>

      <Button type="submit">Apply</Button>
    </Form>
  );
}
