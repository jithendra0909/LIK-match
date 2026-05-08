import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const JWT_SECRET = new TextEncoder().encode(process.env.ADMIN_PASSWORD || 'supersecretadmin');

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (password === process.env.ADMIN_PASSWORD) {
      // Create JWT token
      const token = await new SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);

      const response = NextResponse.json({ success: true });
      
      // Set secure HTTP-only cookie
      response.cookies.set({
        name: 'admin_token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
