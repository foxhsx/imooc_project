import { Articles } from '@/components/Articles';
import { Metadata } from 'next'
import { server } from '../config/index';

// 设置 head
export const metadata: Metadata = {
  title: 'Web Dev News',
  keywords: 'web, development, programming'
}

interface TArticle {
  data: {
    id: string;
    title: string;
    excerpt: string;
    body: string;
  }[]
}

const getData = async () => {
  const res = await fetch(`${server}/api/articles`)
  // const res = await fetch(`https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true`)
  const articles: TArticle = await res.json()

  return articles
}

export default async function Home() {
  const articles = await getData()

  return (
    <main className="min-h-screen p-24">
      <Articles articles={articles.data} />
    </main>
  )
}
