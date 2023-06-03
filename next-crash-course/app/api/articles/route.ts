import { NextResponse } from 'next/server';
import articles from '../../../data';

export async function GET(req: Request) {
  return NextResponse.json({ data: articles }, {status: 200})
}