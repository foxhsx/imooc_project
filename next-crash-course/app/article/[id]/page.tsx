import { server } from '@/config/index';
import { Metadata } from 'next';
import Link from 'next/link';

interface TArticle {
  data: {
    id: string;
    title: string;
    excerpt: string;
    body: string;
  }
}

const getData =async (id: string) => {
  const res = await fetch(`${server}/api/articles/${id}`)
  const article: TArticle = await res.json()
  return article;
}

export const metadata: Metadata = {
  title: 'Web Dev New',
  keywords: 'web development, programming',
  description: 'Get the latest new in web dev'
}

export default async function Article({ params }: { params: { id: string } }) {
  const { data }  = await getData(params.id)
  return (
    <div className='min-h-screen w-3/5 m-auto mt-10'>
      <h3 className='text-xl'>{data.title}</h3>
      <p className='my-2'>{data.body}</p>
      <div className='text-center mt-10'>
        <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'>
          <Link href='/'>Go Back</Link>
        </button>
      </div>
    </div>
  )
}
