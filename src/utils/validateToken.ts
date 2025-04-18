'use server';
import fs from 'fs/promises';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { toast } from 'sonner';

export async function validateToken() {
  const publicKey = await fs.readFile('jwt-public.pem', 'utf8');
  if (!publicKey) {
    throw new Error('Public key is not set');
  }
  const token = (await cookies()).get('access_token')?.value;
  if (!token) {
    throw new Error('Token is not set');
  }
  const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
  if (!decoded) {
    toast.error('Invalid token');
    return;
  }
  return { decoded, token };
}
