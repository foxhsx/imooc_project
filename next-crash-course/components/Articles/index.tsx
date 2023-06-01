/* eslint-disable @next/next/no-img-element */
interface TArticleList {
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
}

export function Articles({ articles }: { articles: TArticleList[] }) {
  return (
    <div className='w-full'>
      {
        articles.map(article => (
          <div key={article.id} className='card my-3 flex w-4/5 h-48 m-auto'>
            <div className="content w-3/5 flex flex-col justify-between flex-none">
              {/* 这里使用 Link 标签，跳转到详情页面，详情内容再搞一个路由页面即可 */}
              <a className='text-black cursor-pointer text-xl hover:underline hover:text-cyan-500'>{article.target.title}</a>
              <p title={article.target.excerpt} className='my-1.5 truncate'>{article.target.excerpt}</p>
              <div className='flex justify-between text-gray-600'>
                <span>{article.target.created}</span>
                <span>{article.detail_text}</span>
              </div>
            </div>
            <div className="img-box w-2/5 ml-6 overflow-hidden">
              <img className='w-full h-full' src={article.children[0].thumbnail} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  )
}
