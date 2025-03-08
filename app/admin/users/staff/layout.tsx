'use client';

import PagePath from '../../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='staff' title='Users' subtitle='Staff' />
      <>{children}</>
    </>
  );
}
