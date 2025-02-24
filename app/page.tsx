'use client';

import Loader from '@/components/custom/loader';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user?.id) {
        router.replace('/auth/login');
      } else {
        router.replace('/admin');
      }
    }
  }, [user, loading]);

  if (loading || !user?.id) {
    return <Loader />;
  }

  return (
    <div className='flex flex-1 flex-col p-4'>
      <h1>Welcome to WFO</h1>
    </div>
  );
}
