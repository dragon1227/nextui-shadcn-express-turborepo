import { LayoutDashboard, Package } from "@ui/icons"

export const siteTitle = 'My Site';
export function SiteDefaultIcons({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <LayoutDashboard fillOpacity={1} fill="currentColor" className={className} absoluteStrokeWidth />
  );
}