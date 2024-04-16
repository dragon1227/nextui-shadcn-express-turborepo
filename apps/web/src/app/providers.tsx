'use client'

import { NextThemeProvider } from "@repo/ui/providers/index";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"
import { TooltipProvider } from "@ui/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      gcTime: 1000 * 60 * 60 * 24,
    }
  }
})

export default function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </NextThemeProvider>
      </QueryClientProvider>
      <ReactQueryDevtools client={queryClient} />
    </SessionProvider>
  )
}