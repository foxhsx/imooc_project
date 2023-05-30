import { Metadata } from 'next'

// 设置 head
export const metadata: Metadata = {
  title: 'Web Dev News',
  keywords: 'web, development, programming'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome To Next</h1>
    </main>
  )
}
