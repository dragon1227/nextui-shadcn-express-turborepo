"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export function NextThemeProvider({
  children,
}: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
}