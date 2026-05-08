import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.ADMIN_PASSWORD || 'supersecretadmin');

export async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) return false;

  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload.role === 'admin';
  } catch (err) {
    return false;
  }
}
