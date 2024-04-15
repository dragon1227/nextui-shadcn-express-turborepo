'use client'

import { NextThemeProvider } from "@repo/ui/providers/index";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"
import { TooltipProvider } from "@ui/components/ui/tooltip";

export default function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <SessionProvider>
      <NextThemeProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </NextThemeProvider>
    </SessionProvider>
  )
}