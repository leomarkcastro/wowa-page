import { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenv } from 'dotenv';

// Load both .env and .env.local files
dotenv({ path: ['.env.local','.env'] });

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SERVER_URL + process.env.NEXT_PUBLIC_GRAPHQL_URL,
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
  noSilentErrors: true,
};

export default config;
