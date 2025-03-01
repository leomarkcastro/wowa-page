import { create } from 'zustand';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/use-auth';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileSidebar } from './sidebar';

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
  const { user, logout } = useAuth();

  async function logoutRoutine() {
    await logout();
    await apolloClient.resetStore();
    window.location.href = '/auth/login';
  }

  return (
    <Card className='flex items-center justify-between gap-6 rounded-2xl border-0 bg-card shadow-lg'>
      <div className='container mx-auto flex w-full items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-4'>
          <MobileSidebar />
          <Image src='/logo-text.png' width={150} height={60} alt='logo' />
        </div>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='flex items-center gap-2'>
                  <User className='h-5 w-5' />
                  <span className='hidden md:inline'>{user?.displayName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                <Link href='/admin/settings'>
                  <DropdownMenuItem className='cursor-pointer'>
                    <User className='mr-2 h-4 w-4' />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='cursor-pointer'
                  onClick={logoutRoutine}
                >
                  <LogOut className='mr-2 h-4 w-4' />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant='secondary' className='hidden md:block'>
                Login
              </Button>
              <Button className='hidden md:block'>Get Started</Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};
