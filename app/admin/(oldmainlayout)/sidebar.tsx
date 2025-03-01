import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Car, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
  {
    name: 'Pre-sale',
    icon: Car,
    children: [
      {
        name: 'Vehicles',
        href: '/admin/pre-sale/vehicles',
        icon: Car,
      },
      {
        name: 'Memorabilia',
        href: '/admin/pre-sale/memorabilia',
        icon: Award,
      },
    ],
  },
  {
    name: 'Auctions',
    icon: Award,
    children: [
      {
        name: 'Active Auctions',
        href: '/admin/auctions/active',
        icon: Award,
      },
      {
        name: 'Past Auctions',
        href: '/admin/auctions/past',
        icon: Award,
      },
      {
        name: 'Scheduled',
        href: '/admin/auctions/scheduled',
        icon: Award,
      },
    ],
  },
  {
    name: 'Users',
    icon: Award,
    children: [
      {
        name: 'Buyers',
        href: '/admin/users/buyers',
        icon: Award,
      },
      {
        name: 'Sellers',
        href: '/admin/users/sellers',
        icon: Award,
      },
      {
        name: 'Administrators',
        href: '/admin/users/administrators',
        icon: Award,
      },
    ],
  },
  {
    name: 'Reports',
    icon: Award,
    children: [
      {
        name: 'Sales Analytics',
        href: '/admin/reports/sales',
        icon: Award,
      },
      {
        name: 'User Activity',
        href: '/admin/reports/activity',
        icon: Award,
      },
      {
        name: 'Financial Reports',
        href: '/admin/reports/financial',
        icon: Award,
      },
    ],
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed?: boolean;
}

export function Sidebar({ className, isCollapsed = false }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections((current) =>
      current.includes(sectionName)
        ? current.filter((item) => item !== sectionName)
        : [...current, sectionName],
    );
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <ScrollArea className='flex-1'>
        <div className='flex flex-col gap-4 p-4'>
          {navigationItems.map((item) => (
            <div key={item.name} className='flex flex-col gap-2'>
              <div
                className='flex cursor-pointer items-center justify-between rounded-lg px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-accent/50'
                onClick={() => !isCollapsed && toggleSection(item.name)}
              >
                <div className='flex items-center gap-2'>
                  {item.icon && <item.icon className='h-4 w-4' />}
                  {!isCollapsed && <span>{item.name}</span>}
                </div>
                {!isCollapsed && item.children && (
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      expandedSections.includes(item.name)
                        ? 'rotate-180 transform'
                        : '',
                    )}
                  />
                )}
              </div>
              {!isCollapsed && (
                <div
                  className={cn(
                    'grid transition-all',
                    expandedSections.includes(item.name)
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className='overflow-hidden'>
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href || '#'}
                        className='ml-4 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-accent'
                      >
                        {child.icon && <child.icon className='h-4 w-4' />}
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[240px] p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
