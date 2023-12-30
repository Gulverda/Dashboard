import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    // You can add other providers here if needed in the future
  ],
  // You can also add custom callbacks, pages, etc. here as per your requirements
};

export default NextAuth(authOptions);
