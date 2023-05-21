import { sql } from '@vercel/postgres';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { version: string; post: string } },
) {
  if (params.version === 'v1') {
    const { rows } =
      await sql`SELECT c.id, email, content FROM comments as c JOIN users as u on u.id = c.user_id WHERE post_id = ${params.post}`;
    return NextResponse.json({ comments: rows });
  }
  return NextResponse.error();
}

export async function POST(
  request: NextRequest,
  { params }: { params: { version: string; post: string } },
) {
  if (params.version === 'v1') {
    try {
      const data = await request.json();
      const { userId, content } = data;
      await sql`INSERT INTO comments (user_id, post_id, content)
      VALUES (${userId}, ${params.post}, ${content})`;
      return NextResponse.json({ created: true }, { status: 201 });
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ name: error.name, message: error.message }, { status: 400 });
      }
    }
  }
  return NextResponse.error();
}
