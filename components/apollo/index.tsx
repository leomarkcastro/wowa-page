'use client';

import { apolloClient } from '@/lib/apollo/ApolloClient';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

function makeClient() {
  return apolloClient;
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
