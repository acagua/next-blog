import NextAuth from 'next-auth/next';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});

export { handler as GET, handler as POST };
