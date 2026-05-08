import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const isAuth = await verifyAuth();
  
  if (!isAuth) {
    redirect('/admin/login');
  }

  return <AdminDashboard />;
}
