import { LayoutDashboard } from "@ui/icons"

export const siteTitle = 'My Site';
export function SiteDefaultIcons({ className = 'w-4 h-4' }: { className?: string }): JSX.Element {
  return (
    <LayoutDashboard absoluteStrokeWidth className={className} fill="currentColor" fillOpacity={1} />
  );
}

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const QUERY_KEYS = {
  profile: 'profile',
}