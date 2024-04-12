"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

interface ProvidersProps {
  children: React.ReactNode;
}

type AppUIProviderProps = ProvidersProps;

export function AppUIProvider({ children }: AppUIProviderProps): JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}

type NextThemeProviderProps = ProvidersProps & {
  themeProps?: ThemeProviderProps;
};

export function NextThemeProvider({
  children,
  themeProps,
}: NextThemeProviderProps): JSX.Element {
  return (
    <ThemeProvider
      defaultTheme="system"
      forcedTheme="light"
      themes={["light", "dark", "system"]}
      {...themeProps}
    >
      {children}
    </ThemeProvider>
  );
}