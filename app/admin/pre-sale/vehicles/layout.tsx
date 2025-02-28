'use client';

import PagePath from '../../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='dash' title='Pre-sale' subtitle='Vehicles' />
      <>{children}</>
    </>
  );
}
