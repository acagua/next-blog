import { NextResponse } from 'next/server';

export async function POST(_request: Request, { params }: { params: { version: string } }) {
  if (params.version === 'v1') {
    return NextResponse.json({ message: 'Creating User' });
  }
  return NextResponse.error();
}
