'use client'

import { Button } from "@ui/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@ui/components/ui/dropdown-menu"
import { Spinner } from "@ui/components/ui/spinner"
import { UserCircle } from "@ui/icons"
import { useSession, signOut, signIn } from "next-auth/react"
import Image from "next/image"

export default function UserDropdownComponent(): JSX.Element {
  const { data: session, status } = useSession()
  return (<DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        className="overflow-hidden rounded-full"
        size="icon"
        variant="outline"
      >
        {status === 'loading' ? <Spinner /> : status === 'unauthenticated' ? <UserCircle /> : <Image
          alt="Avatar"
          className="overflow-hidden rounded-full"
          height={36}
          src={session?.user?.image ?? ""}
          width={36}
        />}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {status === 'authenticated' ? <>
        <DropdownMenuLabel>{session.user?.name ?? ""}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => { signOut() }}>Logout</DropdownMenuItem>
      </> : <DropdownMenuItem onClick={() => { signIn() }}>LogIn</DropdownMenuItem>}
    </DropdownMenuContent>
  </DropdownMenu>)
}