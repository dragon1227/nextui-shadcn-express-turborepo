import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthorizedLayout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  )
}