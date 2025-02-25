import { create } from 'zustand';
import { Card } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Car,
  Award,
  Gavel,
  Store,
  Users,
  UserCircle,
  Building2,
  LineChart,
  ChevronDown,
  LogOut,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/use-auth';
import { apolloClient } from '@/lib/apollo/ApolloClient';

// Add user store
interface UserState {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

export const pathTitle = create<{
  pathName: string;
  setPathName: (path: string) => void;
}>((set) => ({
  pathName: 'Dashboard',
  setPathName: (path: string) => set({ pathName: path }),
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
        href: '/admin/users/consignors',
        icon: Users,
        description: 'Manage seller accounts and consignments',
      },
      {
        name: 'Buyers',
        href: '/admin/users/buyers',
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
    name: 'Reports',
    href: '/admin/reports',
    icon: LineChart,
    description: 'View analytics and generate business reports',
  },
];

export const AppHeaders = () => {
  const { loading, user, logout } = useAuth();

  async function logoutRoutine() {
    /* Add logout handler */
    await logout();
    await apolloClient.resetStore();
    window.location.href = '/auth/login';
  }

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex items-center gap-2'>
          <User className='h-5 w-5' />
          <span>{user?.displayName}</span>
          <ChevronDown className='h-4 w-4' />
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
          onClick={() => {
            logoutRoutine();
          }}
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <Card className='flex items-center justify-between gap-6 rounded-2xl border-0 bg-card shadow-lg'>
      <div className='container mx-auto flex w-full items-center justify-between px-4 py-3'>
        <Image src='/logo-text.png' width={150} height={60} alt='logo' />

        <NavigationMenu className='hidden md:block'>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={item.name === 'Pre-sale' ? 'text-primary' : ''}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className='grid gap-3 p-6 md:w-[400px] lg:w-[500px]'>
                        <div className='grid gap-2'>
                          {item.children.map((child) => (
                            <NavigationMenuLink asChild key={child.name}>
                              <Link
                                href={child.href || '#'}
                                className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                              >
                                <div className='flex items-center gap-2 font-medium leading-none'>
                                  {child.icon && (
                                    <child.icon className='h-4 w-4' />
                                  )}
                                  {child.name}
                                </div>
                                <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href || '#'} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <span className='flex items-center gap-1'>
                        {item.icon && <item.icon className='h-4 w-4' />}
                        {item.name}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center'>
          {user ? (
            <>
              <div className='hidden md:block'>
                <UserMenu />
              </div>
            </>
          ) : (
            <>
              <Button variant='secondary' className='hidden px-2 md:block'>
                Login
              </Button>
              <Button className='ml-2 mr-2 hidden md:block'>Get Started</Button>
            </>
          )}

          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] p-0 sm:w-[400px]'>
                <SheetHeader className='border-b p-4'>
                  <Image
                    src='/logo-text.png'
                    width={120}
                    height={48}
                    alt='logo'
                  />
                </SheetHeader>
                <div className='flex h-full max-h-[90vh] flex-col'>
                  <div className='flex-1 overflow-auto'>
                    <Accordion type='single' collapsible className='px-4'>
                      {navigationItems.map((item) => (
                        <AccordionItem value={item.name} key={item.name}>
                          {item.children ? (
                            <>
                              <AccordionTrigger className='py-3'>
                                <span className='flex items-center gap-2'>
                                  {item.icon && (
                                    <item.icon className='h-4 w-4' />
                                  )}
                                  {item.name}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className='flex flex-col space-y-2'>
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.name}
                                      href={child.href || '#'}
                                      className='flex items-center gap-2 rounded-md p-2 hover:bg-accent'
                                    >
                                      {child.icon && (
                                        <child.icon className='h-4 w-4' />
                                      )}
                                      <span>{child.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </>
                          ) : (
                            <Link href={item.href || '#'}>
                              <div className='flex items-center gap-2 py-3'>
                                {item.icon && <item.icon className='h-4 w-4' />}
                                {item.name}
                              </div>
                            </Link>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div className='space-y-2 border-t p-4'>
                    {user ? (
                      <div className='flex items-center gap-2 p-2'>
                        <User className='h-5 w-5' />
                        <span>{user.displayName}</span>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='ml-auto'
                          onClick={() => {
                            logoutRoutine();
                          }}
                        >
                          <LogOut className='h-4 w-4' />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Button variant='secondary' className='w-full'>
                          Login
                        </Button>
                        <Button className='w-full'>Get Started</Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </Card>
  );
};
