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

  input ProductFilter {
    occasion: Occasion
    palette: Palette
    maxPriceCents: Int
  }

  enum ProductSort {
    FEATURED
    NEWEST
    PRICE_ASC
    PRICE_DESC
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
  }

  type ProductConnection {
    nodes: [Product!]!
    totalCount: Int!
    pageInfo: PageInfo!
  }

  type Query {
    products(
      filter: ProductFilter
      sort: ProductSort = FEATURED
      first: Int = 12
      after: String
    ): ProductConnection!
    product(slug: String!): Product
  }
`;
