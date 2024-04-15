'use client'

import { Spinner } from "@ui/components/ui/spinner";
import { useSession, signIn } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function AuthorizedLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn()
    }
  }, [status])
  if (status === 'loading' || status === 'unauthenticated') {
    return <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Spinner size={"large"} children={<div className="p-2 text-primary">Loading...</div>} />
    </div>
  } else
    return (
      <>{children}</>
    )
}