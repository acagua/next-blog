import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: { version: string; slug: string } },
) {
  if (params.version === 'v1') {
    const { rows } =
      await sql`SELECT * FROM posts as p JOIN users as u on p.user_id = u.id  WHERE slug = ${params.slug}`;
    return NextResponse.json({ post: rows });
  }
  return NextResponse.error();
}

export async function PUT(
  request: Request,
  { params }: { params: { version: string; slug: string } },
) {
  if (params.version === 'v1') {
    const { title, preview, content } = await request.json();
    await sql`UPDATE posts SET 
    ${title ? 'title=' + title : ''}
    ${preview ? 'preview=' + preview : ''}
    ${content ? 'content=' + content : ''}
     WHERE slug = ${params.slug}`;
    return NextResponse.json({ message: params.slug + ' updated' });
  }
  return NextResponse.error();
}

export async function DELETE(
  _request: Request,
  { params }: { params: { version: string; slug: string } },
) {
  if (params.version === 'v1') {
    await sql`DELETE FROM posts WHERE slug = ${params.slug}`;
    return NextResponse.json({ message: params.slug + ' Deleted.' });
  }
  return NextResponse.error();
}
