import NextAuth from "next-auth";
import type { AppRouteHandlerFn } from "@auth/lib/types";
import { authOptions } from "@/auth.config";

const { auth } = NextAuth(authOptions);

const PUBLIC_ROUTES = ["/"];
const DEFAULT_REDIRECT = "/dashboard";
const ROOT = "/auth/signin";

const middleware: AppRouteHandlerFn = auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = Boolean(req.auth);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(ROOT, nextUrl));
});

export default middleware;

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
