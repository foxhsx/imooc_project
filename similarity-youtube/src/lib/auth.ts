import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import { db } from "./db"
import { JWT } from 'next-auth/jwt'

function getGithubCredentials() {
  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error("No clientID for github provider set")
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("No clientSecret for github provider set")
  }

  return {
    clientId,
    clientSecret,
    httpOptions: {
      timeout: 3 * 60 * 1000,
    },
  }
}

export const authOptions: NextAuthOptions = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  debug: process.env.NODE_ENV !== "production",
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: getGithubCredentials().clientId,
      clientSecret: getGithubCredentials().clientSecret,
      httpOptions: getGithubCredentials().httpOptions,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      //  这里需要定义 Prsima
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        // !是非空断言操作，它告诉 TypeScript 编译器即使 user 可能为 null 或 undefined，你仍然确定它不会为空，并尝试访问其属性。
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    redirect() {
      // 这里的重定向路径一定要和 Github 或者其他第三方认证厂商里配置的重定向 URI 一致，不然会一直报错
      return '/dashboard'
    },
  },
}
