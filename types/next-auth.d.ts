import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      token?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
    email?: string;
    token?: string;
  }

  interface User {
    id: string;
    email: string;
    token?: string;
  }
}
