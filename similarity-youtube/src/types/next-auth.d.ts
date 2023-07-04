/* eslint-disable no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string;

// 扩展 jwt module 的类型
declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
  }
}

declare module 'next-auth' {
  interface Session {
    // 扩展了 ID 属性
    user: User & {
      id: UserId
    }
  }
}