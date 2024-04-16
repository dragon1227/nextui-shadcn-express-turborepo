import { LayoutDashboard, Package } from "@ui/icons"

export const siteTitle = 'My Site';
export function SiteDefaultIcons({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <LayoutDashboard fillOpacity={1} fill="currentColor" className={className} absoluteStrokeWidth />
  );
}

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const QUERY_KEYS = {
  profile: 'profile',
}