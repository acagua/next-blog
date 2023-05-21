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
  _request: Request,
  { params }: { params: { version: string; slug: string } },
) {
  if (params.version === 'v1') {
    return NextResponse.json({ message: 'Updating ' + params.slug });
  }
  return NextResponse.error();
}

export async function DELETE(
  _request: Request,
  { params }: { params: { version: string; slug: string } },
) {
  if (params.version === 'v1') {
    return NextResponse.json({ message: 'Deleting ' + params.slug });
  }
  return NextResponse.error();
}
