'use client';

import { ApolloWrapper } from '@/components/apollo';
import { AuthProvider } from '@/hooks/use-auth';
import { PermissionProvider } from '@/hooks/use-permission';
import { authBehavior } from '@/lib/authProvider';
import { permissionProvider } from '@/lib/permissionProvider';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';

// Create a client
const queryClient = new QueryClient();

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <ApolloWrapper>
        <QueryClientProvider client={queryClient}>
          <AuthProvider behavior={authBehavior}>
            <PermissionProvider behavior={permissionProvider}>
              {children}
            </PermissionProvider>
            <Toaster />
          </AuthProvider>
        </QueryClientProvider>
      </ApolloWrapper>
    </ThemeProvider>
  );
}
