import type { Occasion, Palette } from '../src/generated/prisma/enums';

type SeedBouquet = {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  palette: Palette;
  occasions: Occasion[];
  featured?: boolean;
  basePriceCents: number;
  baseStems: number;
};

export const bouquets: SeedBouquet[] = [
  {
    slug: 'cloud-garden',
    name: 'Cloud Garden',
    description:
      'Three soft hydrangea heads in pink, sky blue and white, with fresh eucalyptus, wrapped in peach paper.',
    imageUrl: '/images/bouquets/bouquet-hydrangea-trio-peach-wrap.webp',
    imageAlt: 'Pink, blue and white hydrangeas in peach wrapping',
    palette: 'PASTEL',
    occasions: ['BIRTHDAY', 'THANK_YOU', 'JUST_BECAUSE'],
    featured: true,
    basePriceCents: 8500,
    baseStems: 3,
  },
  {
    slug: 'blush-morning',
    name: 'Blush Morning',
    description:
      'Peach roses with eucalyptus and gypsophila, tied with a silk ribbon. Soft and warm, like early light.',
    imageUrl: '/images/bouquets/bouquet-peach-roses-pink-wrap.webp',
    imageAlt: 'Peach roses with eucalyptus in blush pink wrapping',
    palette: 'PASTEL',
    occasions: ['BIRTHDAY', 'ANNIVERSARY'],
    featured: true,
    basePriceCents: 7000,
    baseStems: 11,
  },
  {
    slug: 'quiet-grace',
    name: 'Quiet Grace',
    description:
      'White peonies wrapped simply in kraft paper. Calm, elegant and right for almost any moment.',
    imageUrl: '/images/bouquets/bouquet-white-peony-kraft.webp',
    imageAlt: 'White peonies wrapped in kraft paper',
    palette: 'WHITE',
    occasions: ['SYMPATHY', 'THANK_YOU', 'JUST_BECAUSE'],
    featured: true,
    basePriceCents: 6500,
    baseStems: 7,
  },
  {
    slug: 'peony-hour',
    name: 'Peony Hour',
    description:
      'A generous bunch of bright pink peonies, at their best in late spring and early summer.',
    imageUrl: '/images/bouquets/bouquet-pink-peonies.webp',
    imageAlt: 'A bunch of bright pink peonies',
    palette: 'BRIGHT',
    occasions: ['BIRTHDAY', 'ANNIVERSARY'],
    featured: true,
    basePriceCents: 9000,
    baseStems: 9,
  },
  {
    slug: 'sugar-cloud',
    name: 'Sugar Cloud',
    description:
      'A light, airy bundle of tinted gypsophila. Small, sweet and easy to say yes to.',
    imageUrl: '/images/bouquets/bouquet-pink-gypsophila.webp',
    imageAlt: 'A hand holding soft pink gypsophila in peach wrapping',
    palette: 'PASTEL',
    occasions: ['APOLOGY', 'JUST_BECAUSE'],
    basePriceCents: 4500,
    baseStems: 15,
  },
  {
    slug: 'rose-letter',
    name: 'Rose Letter',
    description:
      'Pink roses with sprigs of orange wax flower, wrapped in crisp white paper.',
    imageUrl: '/images/bouquets/bouquet-pink-roses-white-wrap.webp',
    imageAlt: 'Pink roses with small orange flowers in white paper wrapping',
    palette: 'BRIGHT',
    occasions: ['BIRTHDAY', 'ANNIVERSARY'],
    basePriceCents: 8000,
    baseStems: 15,
  },
  {
    slug: 'ivory-forest',
    name: 'Ivory Forest',
    description:
      'White roses, chrysanthemums and a touch of blue hydrangea with fern, in kraft paper.',
    imageUrl: '/images/bouquets/bouquet-white-roses-kraft.webp',
    imageAlt: 'White roses and chrysanthemums with greenery in kraft paper',
    palette: 'WHITE',
    occasions: ['WEDDING', 'SYMPATHY', 'THANK_YOU'],
    basePriceCents: 7500,
    baseStems: 13,
  },
  {
    slug: 'plum-velvet',
    name: 'Plum Velvet',
    description:
      'Deep purple roses with wax flower, arranged in a glass vase and ready to set on the table.',
    imageUrl: '/images/bouquets/vase-purple-roses.webp',
    imageAlt: 'Purple roses and wax flowers in a glass vase',
    palette: 'BRIGHT',
    occasions: ['ANNIVERSARY', 'APOLOGY'],
    basePriceCents: 9500,
    baseStems: 12,
  },
  {
    slug: 'summer-ember',
    name: 'Summer Ember',
    description:
      'Orange gladioli and roses with eucalyptus in a glass vase. Tall, warm and full of energy.',
    imageUrl: '/images/bouquets/vase-orange-gladiolus.webp',
    imageAlt: 'Orange gladioli and roses with eucalyptus in a glass vase',
    palette: 'WARM',
    occasions: ['THANK_YOU', 'JUST_BECAUSE'],
    basePriceCents: 6000,
    baseStems: 7,
  },
  {
    slug: 'carnation-blush',
    name: 'Carnation Blush',
    description:
      'Pink carnations with sea lavender in blush wrapping. Cheerful and long-lasting.',
    imageUrl: '/images/bouquets/bouquet-pink-carnations.webp',
    imageAlt: 'Pink carnations with sea lavender in blush wrapping',
    palette: 'PASTEL',
    occasions: ['BIRTHDAY', 'THANK_YOU'],
    basePriceCents: 5500,
    baseStems: 12,
  },
  {
    slug: 'petal-whisper',
    name: 'Petal Whisper',
    description:
      'Peach roses, lisianthus and daisies in pale pink wrapping with a soft ribbon.',
    imageUrl: '/images/bouquets/bouquet-blush-mix-pink-wrap.webp',
    imageAlt: 'Peach roses, lisianthus and daisies in pale pink wrapping',
    palette: 'PASTEL',
    occasions: ['BIRTHDAY', 'APOLOGY', 'JUST_BECAUSE'],
    basePriceCents: 7000,
    baseStems: 11,
  },
  {
    slug: 'morning-linen',
    name: 'Morning Linen',
    description:
      'A loose, garden-style mix of blush roses and lisianthus, wrapped in rose-pink paper.',
    imageUrl: '/images/bouquets/bouquet-blush-mix-flatlay.webp',
    imageAlt: 'A blush bouquet of roses and lisianthus lying on a white table',
    palette: 'PASTEL',
    occasions: ['THANK_YOU', 'JUST_BECAUSE'],
    basePriceCents: 6500,
    baseStems: 11,
  },
  {
    slug: 'dahlia-dusk',
    name: 'Dahlia Dusk',
    description:
      'Pink dahlias and lisianthus with seasonal greenery, wrapped in blush paper.',
    imageUrl: '/images/bouquets/bouquet-pink-dahlia-stone-wall.webp',
    imageAlt: 'Pink dahlias and lisianthus held against a stone wall',
    palette: 'BRIGHT',
    occasions: ['BIRTHDAY', 'JUST_BECAUSE'],
    basePriceCents: 7000,
    baseStems: 9,
  },
  {
    slug: 'apricot-hour',
    name: 'Apricot Hour',
    description:
      'Peach and coral garden roses with white spray roses. Rich, romantic and generous.',
    imageUrl: '/images/bouquets/bouquet-peach-roses-dark.webp',
    imageAlt: 'Peach and coral garden roses held against a dark background',
    palette: 'WARM',
    occasions: ['ANNIVERSARY', 'BIRTHDAY'],
    basePriceCents: 8500,
    baseStems: 13,
  },
  {
    slug: 'coral-picnic',
    name: 'Coral Picnic',
    description:
      'Coral roses and carnations with eucalyptus, wrapped in paper for an easy, relaxed gift.',
    imageUrl: '/images/bouquets/bouquet-coral-flatlay-linen.webp',
    imageAlt: 'Coral roses and eucalyptus wrapped in paper on white linen',
    palette: 'WARM',
    occasions: ['THANK_YOU', 'JUST_BECAUSE'],
    basePriceCents: 6500,
    baseStems: 11,
  },
  {
    slug: 'windowsill-rose',
    name: 'Windowsill Rose',
    description:
      'Blush garden roses and carnations with dusty miller, finished with a peach satin ribbon.',
    imageUrl: '/images/bouquets/bouquet-blush-roses-windowsill.webp',
    imageAlt: 'Blush garden roses tied with a peach ribbon on a windowsill',
    palette: 'PASTEL',
    occasions: ['WEDDING', 'ANNIVERSARY'],
    basePriceCents: 7500,
    baseStems: 11,
  },
  {
    slug: 'blue-tide',
    name: 'Blue Tide',
    description:
      'A single deep blue hydrangea framed by a cloud of white gypsophila.',
    imageUrl: '/images/bouquets/bouquet-blue-hydrangea-gypsophila.webp',
    imageAlt: 'A blue hydrangea surrounded by white gypsophila',
    palette: 'BRIGHT',
    occasions: ['WEDDING', 'JUST_BECAUSE'],
    basePriceCents: 6000,
    baseStems: 5,
  },
  {
    slug: 'bridal-cascade',
    name: 'Bridal Cascade',
    description:
      'A cascading bridal bouquet of white roses, anemones and blue delphinium.',
    imageUrl: '/images/bouquets/wedding-blue-white-cascade.webp',
    imageAlt: 'A cascading bridal bouquet of white roses and blue delphinium',
    palette: 'WHITE',
    occasions: ['WEDDING'],
    basePriceCents: 14500,
    baseStems: 25,
  },
  {
    slug: 'cream-vow',
    name: 'Cream Vow',
    description:
      'A round bridal bouquet of peach and cream roses with soft greenery.',
    imageUrl: '/images/bouquets/wedding-peach-cream-roses.webp',
    imageAlt: 'A bridal bouquet of peach and cream roses',
    palette: 'PASTEL',
    occasions: ['WEDDING'],
    basePriceCents: 12500,
    baseStems: 21,
  },
  {
    slug: 'white-promise',
    name: 'White Promise',
    description: 'A classic all-white bridal bouquet with a long satin ribbon.',
    imageUrl: '/images/bouquets/wedding-white-bouquet-chair.webp',
    imageAlt: 'A white bridal bouquet tied with ribbon on a vintage chair',
    palette: 'WHITE',
    occasions: ['WEDDING'],
    basePriceCents: 11000,
    baseStems: 19,
  },
];
