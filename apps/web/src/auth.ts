import NextAuth from "next-auth";
import { authOptions } from "./auth.config";

const {
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authOptions);

export { GET, POST, signIn, signOut };
