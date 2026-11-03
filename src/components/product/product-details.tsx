import { ChevronDown } from 'lucide-react';

const sections = [
  {
    title: 'Flower care',
    items: [
      'Trim the stems at an angle before placing them in water.',
      'Change the water every two days.',
      'Keep away from direct sun, heaters and ripening fruit.',
    ],
  },
  {
    title: 'Delivery',
    items: [
      'Choose a delivery date and time window at checkout.',
      'Bouquets travel in a water pouch to stay fresh on the way.',
      'This is a demo store, so no real orders are delivered.',
    ],
  },
];

export function ProductDetails() {
  return (
    <div className="border-input mt-10 border-t">
      {sections.map(({ title, items }) => (
        <details key={title} className="group border-input border-b">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium [&::-webkit-details-marker]:hidden">
            {title}
            <ChevronDown
              aria-hidden="true"
              className="size-5 transition-transform group-open:rotate-180"
            />
          </summary>
          <ul className="list-disc space-y-2 pb-5 pl-5">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
