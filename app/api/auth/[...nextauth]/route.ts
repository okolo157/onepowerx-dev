import NextAuth, { type NextAuthOptions } from "next-auth";
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
          console.log("API Response:", data);

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

          // Log the decoded user ID
          console.log("Decoded User ID:", decodedToken.sub);

          return {
            id: decodedToken.sub, // Extract user ID from token
            email: decodedToken.email || "", // Extract email if present
            token: data.token, // Store the token
          }
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
        token.id = user.id; // User's ID
        token.email = user.email; // User's email
        token.accessToken = user.token || ""; // Add JWT to token (If token is available in the response)
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
        accessToken: token.accessToken ?? undefined, // Ensure accessToken is included in session
      };
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
