'use client'

import {
  Settings,
} from "@repo/ui/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip"
import Link from "next/link"
import { siteRoutes } from "@/config/routes"
import { SiteDefaultIcons, siteTitle } from "@/config/const"

export default function DashboardLayoutSidebarComponent(): JSX.Element {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
          href="#"
        >
          <SiteDefaultIcons />
          <span className="sr-only">{siteTitle}</span>
        </Link>
        {siteRoutes.map((item) => <Tooltip key={item.href}>
          <TooltipTrigger asChild>
            <Link
              className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
              href={item.href}
            >
              {item.component}
              <span className="sr-only">{item.title}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{item.title}</TooltipContent>
        </Tooltip>)}
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
              href="#"
            >
              <Settings className="w-5 h-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}