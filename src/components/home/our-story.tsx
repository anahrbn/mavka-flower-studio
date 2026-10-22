import Image from 'next/image';

export function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="mx-auto flex max-w-6xl scroll-mt-6 flex-wrap items-center gap-14 px-6 py-20 md:py-24"
    >
      <div className="flex min-w-0 flex-[1_1_360px] justify-center">
        <div className="bg-sage-mist relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full">
          <Image
            src="/images/florist-arranging.webp"
            alt="A florist arranging pink roses and lilies on a table"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="min-w-0 flex-[1_1_420px]">
        <p className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
          Our story
        </p>
        <h2
          id="story-title"
          className="font-heading text-deep-olive mt-3 text-4xl md:text-5xl"
        >
          Named after a forest spirit
        </h2>
        <p className="mt-5 max-w-lg">
          In Ukrainian folklore, a mavka is a spirit of the forest who brings
          fields and gardens into bloom. Our bouquets carry the same idea: wild,
          seasonal and made by hand.
        </p>
        <p className="mt-4 max-w-lg">
          Every bouquet starts with what is in season and ends with a card
          written in your own words.
        </p>
      </div>
    </section>
  );
}
