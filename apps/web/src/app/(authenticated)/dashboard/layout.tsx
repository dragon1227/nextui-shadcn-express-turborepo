import type { ReactNode } from "react";
import DashboardLayoutComponent from "@/components/layout/dashboard";

export default function DashboardLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <DashboardLayoutComponent>
      {children}
    </DashboardLayoutComponent>
  )
}