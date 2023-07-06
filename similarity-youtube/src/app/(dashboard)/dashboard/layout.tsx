import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Layout({
  children
}: {
  children: ReactNode
}) {
  const user = await getServerSession(authOptions)
  console.log("🚀 ~ file: layout.tsx:11 ~ user:", user)
  
  return <section className="pt-20">{children}</section>
}