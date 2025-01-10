import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("User signing in:", user);
      // Tambahkan logika jika perlu, contoh:
      if (profile.email_verified === false) {
        console.log("User email not verified");
        return false; // Blokir login
      }
      return true; // Izinkan login
    },
    async redirect({ url, baseUrl }) {
      // Redirect setelah login/logout
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
    async session({ session, token, user }) {
      // Tambahkan data kustom ke session
      session.user.id = token.sub;
      session.user.role = token.role || "user";
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // Tambahkan data ke JWT token
      if (user) {
        token.id = user.id;
        token.role = user.role || "user"; // Role default
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
