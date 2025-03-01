import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { create } from 'zustand';

export const pathTitle = create<{
  pathName: string;
  subPathName?: string;
  setPathName: (path: string, subPath?: string) => void;
}>((set) => ({
  pathName: 'Dashboard',
  setPathName: (path: string, subPath?: string) => {
    set({ pathName: path, subPathName: subPath });
  },
}));

export const AppHeaders = () => {
  const pathName = pathTitle((state) => state.pathName);
  const subPathName = pathTitle((state) => state.subPathName);

  const { open } = useSidebar();

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-20 w-full border-b bg-background pl-0 shadow-md transition-[padding]',
        open && 'md:pl-64',
      )}
    >
      <div className='flex h-16 items-center gap-4 px-4'>
        <SidebarTrigger />
        <h2 className='text-lg font-semibold'>{pathName}</h2>
        <div className='ml-auto flex items-center gap-2'></div>
        <ThemeToggle />
        <div className='mr-2'></div>
      </div>
    </header>
  );
};
