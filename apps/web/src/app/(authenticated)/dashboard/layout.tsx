import { ReactNode } from "react";
import DashboardLayoutComponent from "@/components/layout/dashboard";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayoutComponent>
      {children}
    </DashboardLayoutComponent>
  )
}