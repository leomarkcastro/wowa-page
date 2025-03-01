import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { AppHeaders } from './header';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full pt-16'>
        {/* <SidebarTrigger  /> */}
        <AppHeaders />
        {children}
      </main>
    </SidebarProvider>
  );
}
