import { AppUIProvider, NextThemeProvider } from "@repo/ui/providers/index";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <NextThemeProvider>
      <AppUIProvider>
        {children}
      </AppUIProvider>
    </NextThemeProvider>
  )
}