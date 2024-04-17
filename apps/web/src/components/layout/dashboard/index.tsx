import type { ReactNode } from "react";
import Link from "next/link"
import {
  PanelLeft,
  Search,
} from "@repo/ui/icons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/components/ui/breadcrumb"
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/ui/sheet"
import ThemeSwitcherComponent from "@ui/components/shared/theme-switcher";
import { SiteDefaultIcons, siteTitle } from "@/config/const";
import { siteRoutes } from "@/config/routes";
import UserDropdownComponent from "@/components/layout/common/user-dropdown";
import DashboardLayoutSidebarComponent from "./sidebar";

export default function DashboardLayoutComponent({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <DashboardLayoutSidebarComponent />
      <div className="relative flex flex-col flex-1 sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="sm:hidden" size="icon" variant="outline">
                <PanelLeft className="w-5 h-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-xs" side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base"
                  href="#"
                >
                  <SiteDefaultIcons />
                  <span className="sr-only">{siteTitle}</span>
                </Link>
                {siteRoutes.map((item) =>
                  <Link
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    href={item.href}
                    key={item.href}
                  >
                    {item.component}
                    {item.title}
                  </Link>)
                }
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Orders</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative flex-1 ml-auto md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              placeholder="Search..."
              type="search"
            />
          </div>
          <ThemeSwitcherComponent />
          <UserDropdownComponent />
        </header>
        <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}