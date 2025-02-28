'use client';

import PagePath from '../../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='users' title='Users' subtitle='Consignors' />
      <>{children}</>
    </>
  );
}
