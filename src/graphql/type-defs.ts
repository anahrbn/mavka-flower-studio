export const typeDefs = /* GraphQL */ `
  enum Palette {
    PASTEL
    BRIGHT
    WHITE
    WARM
  }

  enum Occasion {
    BIRTHDAY
    ANNIVERSARY
    APOLOGY
    THANK_YOU
    SYMPATHY
    WEDDING
    JUST_BECAUSE
  }

  enum BouquetSize {
    CLASSIC
    DELUXE
    GRAND
  }

  type ProductVariant {
    id: ID!
    size: BouquetSize!
    stems: Int!
    priceCents: Int!
  }

  type Product {
    id: ID!
    slug: String!
    name: String!
    description: String!
    imageUrl: String!
    imageAlt: String!
    palette: Palette!
    occasions: [Occasion!]!
    featured: Boolean!
    fromPriceCents: Int!
    variants: [ProductVariant!]!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
  }
`;
