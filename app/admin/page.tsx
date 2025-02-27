'use client';

import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  // pust to /admin/pre-sale/vehicles

  router.replace('/admin/pre-sale/vehicles');

  return <div></div>;
};

export default Dashboard;
