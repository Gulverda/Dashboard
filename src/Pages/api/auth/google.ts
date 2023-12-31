// Import required modules and dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Retrieve Google Client ID and Client Secret from environment variables
const googleClientId = process.env.GOOGLE_ID as string;
const googleClientSecret = process.env.GOOGLE_SECRET as string;

// Define NextAuth options and configuration settings
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
  ]
}

// Export NextAuth configuration for use in Next.js API route
export default NextAuth(authOptions);