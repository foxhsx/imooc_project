import './globals.css'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  )
}