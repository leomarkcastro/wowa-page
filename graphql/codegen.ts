import { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenv } from 'dotenv';
import { env } from 'next-runtime-env';
dotenv();

// console.log('NEXT_PUBLIC_SERVER_URL', env('NEXT_PUBLIC_SERVER_URL'));
const config: CodegenConfig = {
  schema: (env('NEXT_PUBLIC_SERVER_URL') ?? '') + env('NEXT_PUBLIC_GRAPHQL_URL'),
  documents: ['./graphql/declarations/**/*.tsx', './graphql/declarations/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false, // HERE
      },
    },
  },
  verbose: true,
};

export default config;
