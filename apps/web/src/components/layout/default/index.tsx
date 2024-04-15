'use client'

import type { ReactNode } from "react";
import DefaultLayoutNavbarComponent from "./navbar";

export default function DefaultLayoutComponent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <DefaultLayoutNavbarComponent />
      <main className="relative flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  )
}