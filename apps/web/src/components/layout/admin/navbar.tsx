"use client"

import Link from "next/link"
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "@repo/ui/icons"
import { Badge } from "@repo/ui/components/ui/badge"
import { Button } from "@repo/ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu"
import { Input } from "@repo/ui/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/ui/sheet"
import ThemeSwitcherComponent from "@repo/ui/components/shared/theme-switcher"

export default function AdminLayoutNavbarComponent(): JSX.Element {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
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
        <SheetContent className="flex flex-col" side="left">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="#"
            >
              <Package2 className="w-6 h-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <Home className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              href="#"
            >
              <ShoppingCart className="w-5 h-5" />
              Orders
              <Badge className="flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0">
                6
              </Badge>
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <Package className="w-5 h-5" />
              Products
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <Users className="w-5 h-5" />
              Customers
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <LineChart className="w-5 h-5" />
              Analytics
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our
                  support team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex-1 w-full">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="w-full pl-8 shadow-none appearance-none bg-background md:w-2/3 lg:w-1/3"
              placeholder="Search products..."
              type="search"
            />
          </div>
        </form>
      </div>
      <ThemeSwitcherComponent />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full" size="icon" variant="secondary">
            <CircleUser className="w-5 h-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}