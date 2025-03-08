'use client';

import PagePath from '../../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='buyer' title='Users' subtitle='Buyers' />
      <>{children}</>
    </>
  );
}
