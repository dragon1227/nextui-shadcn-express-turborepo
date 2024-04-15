'use client'

import Image from "next/image"
import type { ReactNode } from "react"

export default function AuthLayoutComponent({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="w-screen min-h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          height="1080"
          src="/placeholder.svg"
          width="1920"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          {children}
        </div>
      </div>
    </div>
  )
}
