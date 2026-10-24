import { createSchema, createYoga } from 'graphql-yoga';
import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/type-defs';

interface NextContext {
  params: Promise<Record<string, string>>;
}

const { handleRequest } = createYoga<NextContext>({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
