import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
     GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
            prompt: "consent",
            access_type: 'offline',
            response_type: 'code'
        }
      }
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
