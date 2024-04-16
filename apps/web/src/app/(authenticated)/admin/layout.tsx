import { ReactNode } from "react";
import { AdminLayoutComponent } from "@/components/layout/admin";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AdminLayoutComponent>
      {children}
    </AdminLayoutComponent>
  )
}