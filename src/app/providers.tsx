'use client';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressProvider
        color="#01959f"
        height="4px"
        options={{ showSpinner: false }}
      >
        <Toaster position="top-center" richColors />
        {children}
      </ProgressProvider>
    </QueryClientProvider>
  );
}
