import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/GOOGLE";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "../../../prisma/client";
const adapter = PrismaAdapter(prisma);
export const authOptions = {
  adapter: adapter,
  secret: process.env.AUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
