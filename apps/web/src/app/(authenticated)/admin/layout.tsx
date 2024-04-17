import type { ReactNode } from "react";
import { AdminLayoutComponent } from "@/components/layout/admin";

export default function DashboardLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <AdminLayoutComponent>
      {children}
    </AdminLayoutComponent>
  )
}