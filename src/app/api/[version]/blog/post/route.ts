import { sql } from '@vercel/postgres';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { version: string } }) {
  if (params.version === 'v1') {
    try {
      const { rows } = await sql`SELECT * FROM posts`;
      return NextResponse.json({ posts: rows });
    } catch (error) {
      return NextResponse.json({ posts: [] });
    }
  }
  return NextResponse.error();
}

export async function POST(request: NextRequest, { params }: { params: { version: string } }) {
  if (params.version === 'v1') {
    try {
      const data = await request.json();
      const { userId, title, slug, preview, content } = data;
      await sql`INSERT INTO posts (user_id, title, slug, preview, content)
      VALUES (${userId}, ${title}, ${slug}, ${preview}, ${content})`;
      return NextResponse.json({ created: true }, { status: 201 });
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ name: error.name, message: error.message }, { status: 400 });
      }
    }
  }
  return NextResponse.error();
}
