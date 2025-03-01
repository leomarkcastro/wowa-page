import { AppHeaders } from './header';
import { Sidebar } from './sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      <AppHeaders />
      <div className='flex'>
        <aside className='hidden w-64 border-r md:block'>
          <Sidebar />
        </aside>
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  );
}
