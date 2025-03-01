'use client';

import {
  LogOut,
  Car,
  Award,
  Store,
  Users,
  UserCircle,
  Building2,
  LineChart,
  Gavel,
  Settings2,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { create } from 'zustand';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { pathTitle } from './header';

export const pathLocation = create<{
  pathName: string;
  subPathName?: string;
  setPathName: (path: string, subPath?: string) => void;
}>((set) => ({
  pathName: 'Dashboard',
  setPathName: (path: string, subPath?: string) => {
    set({ pathName: path, subPathName: subPath });
  },
}));

type NavItem = {
  name: string;
  href?: string;
  icon?: React.ElementType;
  description?: string;
  children?: Array<{
    name: string;
    href?: string;
    icon: React.ElementType;
    description: string;
  }>;
};

const navigationItems: NavItem[] = [
  {
    name: 'Pre-sale',
    description: 'Manage inventory and items before they go on sale',
    children: [
      {
        name: 'Vehicles',
        href: '/admin/pre-sale/vehicles',
        icon: Car,
        description: 'Add and manage vehicle listings before auction',
      },
      {
        name: 'Memorabilia',
        href: '/admin/pre-sale/memorabilia',
        icon: Award,
        description: 'Catalog and prepare memorabilia items for sale',
      },
    ],
  },
  {
    name: 'Sales Channel',
    description: 'Manage different sales platforms and methods',
    children: [
      {
        name: 'Auction',
        href: '/admin/sales/auction',
        icon: Gavel,
        description: 'Set up and manage live and online auctions',
      },
      {
        name: 'Private Gallery',
        href: '/admin/sales/gallery',
        icon: Store,
        description: 'Exclusive listings for premium clients',
      },
    ],
  },
  {
    name: 'Users',
    description: 'Manage all user accounts and permissions',
    children: [
      {
        name: 'Consignors',
        href: '/admin/users/consignor',
        icon: Users,
        description: 'Manage seller accounts and consignments',
      },
      {
        name: 'Buyers',
        href: '/admin/users/buyer',
        icon: UserCircle,
        description: 'View and manage buyer profiles',
      },
      {
        name: 'Staff',
        href: '/admin/users/staff',
        icon: Building2,
        description: 'Manage employee accounts and access',
      },
    ],
  },

  {
    name: 'Admin',
    description: 'Extra tools and settings for administrators',
    children: [
      {
        name: 'Reports',
        href: '/admin/reports',
        icon: LineChart,
        description: 'View analytics and generate business reports',
      },
      {
        name: 'Settings',
        href: '/admin/settings',
        icon: Settings2,
        description: 'Manage site settings and configurations',
      },
    ],
  },
];

export function AppSidebar() {
  const { logout, loading, user } = useAuth();
  const pathID = pathTitle((state) => state.pathName);
  const subPathID = pathTitle((state) => state.subPathName);

  const handleLogout = () => {
    logout();
  };

  return (
    <Sidebar className='z-30 w-64 border-r border-none bg-accent text-accent-foreground'>
      <SidebarContent className='noScrollbar border-r-2 bg-accent pb-24 text-accent-foreground'>
        <div className='p-6 pb-1'>
          <h1 className='flex items-center gap-2 text-xl font-semibold'>
            <div className='relative mx-auto -ml-1 aspect-[24/4] w-full'>
              <Image src='/logo-text.png' width={200} height={60} alt='logo' />
            </div>
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <div
                        className={cn(
                          'mb-2 mt-4 px-3 text-xs font-medium text-foreground/50',

                          pathID === item.name ? '' : '',
                        )}
                      >
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <SidebarMenuItem key={child.name}>
                          <SidebarMenuButton asChild>
                            <Link
                              href={child.href || '#'}
                              className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2 text-accent-foreground transition-colors hover:bg-primary/20 hover:text-foreground/50',
                                (pathID === child.name ||
                                  subPathID === child.name) &&
                                  'bg-primary/75 text-white',
                              )}
                              title={child.description}
                            >
                              <child.icon className='h-4 w-4' />
                              <span>{child.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </>
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.href || '#'}
                          className={cn(
                            'flex items-center gap-3 rounded-lg px-3 py-2 text-accent-foreground transition-colors hover:bg-primary/20 hover:text-foreground/50',
                            (pathID === item.name || subPathID === item.name) &&
                              'bg-primary/75 text-white',
                          )}
                          title={item.description}
                        >
                          {item.icon && <item.icon className='h-4 w-4' />}
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* 
        <SidebarGroup>
          <SidebarGroupContent className='mt-8'>
            <SidebarMenu>
              {generalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className='flex items-center gap-3 rounded-lg px-3 py-2 text-accent-foreground transition-colors hover:bg-primary/20 hover:text-foreground/50'
                    >
                      <item.icon className='h-4 w-4' />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      {!loading && (
        <div className='absolute bottom-0 flex w-full items-center justify-between gap-4 border-r-2 bg-accent px-4 py-4 text-accent-foreground'>
          <div className='flex flex-1 items-center gap-3'>
            <div className='h-8 w-8 rounded-full bg-secondary' />
            <div className='flex flex-col text-primary-foreground'>
              <span className='max-w-36 truncate text-sm font-medium text-foreground'>
                {user?.displayName}
              </span>
              <span className='max-w-36 truncate text-xs text-foreground'>
                {user?.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='text-accent-foreground hover:text-foreground/50'
            title='Logout'
          >
            <LogOut className='h-6 w-6' />
          </button>
        </div>
      )}
    </Sidebar>
  );
}
