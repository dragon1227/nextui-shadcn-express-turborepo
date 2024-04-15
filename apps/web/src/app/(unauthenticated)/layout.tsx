import type { ReactNode } from "react";

export default function UnauthenticatedLayout({ children }: { children: ReactNode }): JSX.Element {
  return <>{children}</>
}