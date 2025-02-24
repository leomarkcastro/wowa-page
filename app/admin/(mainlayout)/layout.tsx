import { AppHeaders } from './header';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='w-full'>
      {/* <SidebarTrigger  /> */}
      <AppHeaders />
      {children}
    </main>
  );
}
