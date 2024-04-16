'use client'

import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@repo/ui/components/ui/button"
import { Spinner } from "@repo/ui/components/ui/spinner"
import { Spacer } from "@repo/ui/components/nextui/spacer"
import { authOptions } from "@/auth.config"
import { SiteDefaultIcons, siteTitle } from "@/config/const"
import Link from "next/link"

export default function SignInPage({
  searchParams: {
    callbackUrl,
    error
  } }: {
    searchParams: {
      callbackUrl?: string
      error?: string
    }
  }): JSX.Element {
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl ?? "/dashboard")
    }
  }, [status, callbackUrl, router])

  const onSignIn = async (id: string): Promise<any> => {
    await signIn(id)
  }

  return (
    <>
      <div className="grid gap-2 text-center">
        <Link href={'/'}>
          <div className="flex w-full justify-center"><SiteDefaultIcons className="w-12 h-12" /></div>
          <Spacer y={2} />
          <h1 className="text-3xl font-bold">{siteTitle}</h1>
        </Link>
      </div>
      {error && error !== 'undefined' ? <div className="w-full bg-destructive/30 p-2 rounded-md border">
        {error}
      </div> : null}
      <div className="grid gap-4">
        {status !== 'unauthenticated' ? <Spinner /> : authOptions.providers.map((provider) =>
          <Button key={provider.name} onClick={() => onSignIn(provider.id)} variant="outline" className="w-full">
            <Image alt="google" src={`https://authjs.dev/img/providers${provider.style?.logo}`} width={20} height={20} />
            <span className="ml-2">Login with {provider.name}</span>
          </Button>
        )}
      </div>
    </>
  )
}
