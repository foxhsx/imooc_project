import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
interface TArticleList {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}

export function Articles({ articles }: { articles: TArticleList[] }) {
  return (
    <div className='w-full'>
      {
        articles.map(article => (
          <div key={article.id} className='card my-3 w-4/5 h-48 m-auto'>
            {/* 这里使用 Link 标签，跳转到详情页面，详情内容再搞一个路由页面即可 */}
            <Link href={`/article/${article.id}`} className='text-black cursor-pointer text-xl hover:underline hover:text-cyan-500'>{article.title}</Link>
            <p title={article.excerpt} className='my-1.5 truncate'>{article.excerpt}</p>
            <div className='flex justify-between text-gray-600'>
              <span>{article.body}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
