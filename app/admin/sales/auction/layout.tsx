'use client';

import PagePath from '../../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='sales Channel' title='Sales Channel' subtitle='Auction' />
      <>{children}</>
    </>
  );
}
