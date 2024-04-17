'use client'

import Link from "next/link"
import {
  Menu,
  Search,
} from "@repo/ui/icons"
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/ui/sheet"
import ThemeSwitcher from "@repo/ui/components/shared/theme-switcher"
import { useSession } from "next-auth/react"
import UserDropdownComponent from "@/components/layout/common/user-dropdown"
import { siteRoutes } from "@/config/routes"
import { SiteDefaultIcons, siteTitle } from "@/config/const"

export default function DefaultLayoutNavbarComponent(): JSX.Element {
  const { data: session } = useSession()
  return (
    <header className="sticky z-50 top-0 flex items-center h-16 gap-4 px-4 border-b !border-border bg-background md:px-6">

      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="#"
        >
          <SiteDefaultIcons />
          <span className="sr-only">{siteTitle}</span>
        </Link>
        {session?.user ? siteRoutes.map(route =>
          <Link
            className="transition-colors text-muted-foreground active:text-foreground hover:text-foreground"
            href={route.href}
            key={route.href}
          >
            {route.title}
          </Link>
        ) : null}
      </nav>
      {session?.user ? <Sheet>
        <SheetTrigger asChild>
          <Button
            className="shrink-0 md:hidden"
            size="icon"
            variant="outline"
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="#"
            >
              <SiteDefaultIcons />
              <span className="sr-only">{siteTitle}</span>
            </Link>
            {siteRoutes.map(route => <Link
              className="active:text-muted-foreground hover:text-foreground"
              href={route.href}
              key={route.href}
            >
              {route.title}
            </Link>)}
          </nav>
        </SheetContent>
      </Sheet> : null}
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search products..."
              type="search"
            />
          </div>
        </form>
        <ThemeSwitcher />
        <UserDropdownComponent />
      </div>
    </header>
  )
}