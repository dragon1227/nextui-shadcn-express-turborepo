"use client"
import Link from "next/link"
import {
  Bell,
  Package2,
} from "@ui/icons"
import { Button } from "@ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/components/ui/card"
import { siteRoutes } from "@/config/routes"
import { SiteDefaultIcons, siteTitle } from "@/config/const"

export default function AdminLayoutSidebarComponent(): JSX.Element {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex flex-col h-full max-h-screen gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <SiteDefaultIcons />
            <span className="">{siteTitle}</span>
          </Link>
          <Button className="w-8 h-8 ml-auto" size="icon" variant="outline">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {siteRoutes.map((item, idx) => <Link
              key={idx}
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
              href={item.href}
            >
              {item.component}
              {item.title}
            </Link>)}
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button className="w-full" size="sm">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}