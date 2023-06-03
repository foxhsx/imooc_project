import articles from '@/data';
import { NextResponse } from 'next/server';



export async function GET(req: Request, { params: { id } }: { params: { id: string } }) {
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length) {
    return NextResponse.json({ data: filtered[0] }, { status: 200 })
  } else {
    return NextResponse.json({ message: `Article ${id} is not found` }, { status: 404 })
  }
}