import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("https://new-api.onepower.ng/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const data = await res.json();

          if (!res.ok || !data?.token) {
            throw new Error(
              `Invalid response from API: ${JSON.stringify(data)}`
            );
          }

          const decodedToken = jwt.decode(data.token) as {
            sub: string;
            email?: string;
          };

          if (!decodedToken?.sub) {
            throw new Error("Invalid token: Missing user ID");
          }

          return {
            id: decodedToken.sub,
            email: decodedToken.email || "",
            token: data.token,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.token || "";
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email ?? undefined,
        },
        accessToken: token.accessToken ?? undefined,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};
