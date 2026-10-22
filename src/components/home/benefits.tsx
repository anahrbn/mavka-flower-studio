import { CalendarDays, Mail, Sprout } from 'lucide-react';

const benefits = [
  {
    icon: CalendarDays,
    title: 'Delivered on your date',
    text: 'Pick the day and a time window at checkout.',
  },
  {
    icon: Sprout,
    title: 'Fresh, seasonal stems',
    text: 'Each bouquet is made the day it ships.',
  },
  {
    icon: Mail,
    title: 'A card in your words',
    text: 'Add a handwritten message for free.',
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="bg-sage-mist">
      <h2 id="benefits-title" className="sr-only">
        Why Mavka
      </h2>
      <ul className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-start gap-4">
            <Icon
              aria-hidden="true"
              className="text-deep-olive mt-0.5 size-7 shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-deep-olive font-medium">{title}</p>
              <p className="mt-0.5 text-[15px]">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
