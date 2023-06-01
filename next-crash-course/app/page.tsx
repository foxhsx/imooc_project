import { Articles } from '@/components/Articles';
import { Metadata } from 'next'

// 设置 head
export const metadata: Metadata = {
  title: 'Web Dev News',
  keywords: 'web, development, programming'
}

interface TArticle {
  data: {
    id: string;
    target: {
      title: string;
      url: string;
      created: number;
      excerpt: string;
    };
    detail_text: string;
    children: {
      thumbnail: string;
    }[];
  }[]
}

const getData = async () => {
  const res = await fetch(`https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true`)
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
