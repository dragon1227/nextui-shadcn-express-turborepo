import type { ReactNode } from "react";

export default function AuthorizedLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>{children}</>
  )
}