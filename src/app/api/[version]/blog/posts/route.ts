import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { version: string } }) {
  if (params.version === 'v1') {
    return NextResponse.json({ message: 'Getting All' });
  }
  return NextResponse.error();
}

export async function POST(_request: Request, { params }: { params: { version: string } }) {
  if (params.version === 'v1') {
    return NextResponse.json({ message: 'Creating new post' });
  }
  return NextResponse.error();
}
