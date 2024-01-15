// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                    prompt: "select_account",
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        }),
    ],
    debug: true, // Enable debug mode for more verbose logs
});
