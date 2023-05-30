import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
}

export default function About() {
  return (
    <main className='flex min-h-screen'>
      <h1>About</h1>
    </main>
  )
}