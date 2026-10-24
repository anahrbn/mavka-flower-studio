import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/type-defs.ts',
  generates: {
    './src/graphql/generated/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;