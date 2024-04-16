import { AppWindow, HomeIcon, Package } from '@ui/icons'

export const siteRoutes = [
  { title: "Home", href: "/", component: <HomeIcon /> },
  { title: "Dashboard", href: "/dashboard", component: <Package /> },
  { title: "Admin", href: "/admin", component: <AppWindow /> }
];
