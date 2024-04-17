/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import sign from "jwt-encode";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET || "secret",
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    session({ session }) {
      session.sessionToken = sign(session.user, process.env.AUTH_SECRET!);
      return session;
    },
  },
} satisfies NextAuthConfig;
