import NextAuth from "next-auth";
import "next-auth/jwt";
import Kakao from "next-auth/providers/kakao";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";



export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google({
    clientId: "",
    clientSecret: process.env.NEXTAUTH_SECRET! ,
  }), Github({
    clientId: "",
    clientSecret: process.env.NEXTAUTH_SECRET!
  }), Kakao({
    clientId: "",
    clientSecret: process.env.NEXTAUTH_SECRET!
  })],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },

});