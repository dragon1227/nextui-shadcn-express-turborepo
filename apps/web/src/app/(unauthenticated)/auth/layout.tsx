import type { ReactNode } from "react";
import AuthLayoutComponent from "@/components/layout/auth";

export default function AdminLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <AuthLayoutComponent>
      {children}
    </AuthLayoutComponent>
  );
}