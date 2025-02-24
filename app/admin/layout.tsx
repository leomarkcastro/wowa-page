'use client';

import SidebarLayout from '@/app/admin/(mainlayout)/layout';
import PagePath from './(mainlayout)/path';
import { useAuth } from '@/hooks/use-auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/custom/loader';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user?.id) {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/admin')) {
        router.replace(
          `/auth/login?redirect=${encodeURIComponent(currentPath)}`,
        );
      } else {
        router.replace('/auth/login');
      }
    }
  }, [user, loading]);

  if (loading || !user?.id) {
    return <Loader />;
  }

  return (
    <SidebarLayout>
      <PagePath id='dash' title='Dashboard' />
      <div className='flex flex-1 flex-col p-4'>{children}</div>
    </SidebarLayout>
  );
}
