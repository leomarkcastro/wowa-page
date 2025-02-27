'use client';

import PagePath from '../(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='dash' title='Auction' />
      <div className='flex flex-1 flex-col p-4'>{children}</div>
    </>
  );
}
