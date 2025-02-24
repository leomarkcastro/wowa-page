'use client';

import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function QuickList<T>(props: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  menuOptions?: {
    label: string;
    action: () => void;
  }[];
}) {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-xl font-bold'>Transaction</CardTitle>
        {props.menuOptions && props.menuOptions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none'>
              <MoreVertical className='h-5 w-5 text-muted-foreground' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {props.menuOptions?.map((option, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={option.action}
                  className='z-20 cursor-pointer hover:bg-gray-200'
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardHeader>
      <CardContent className='grid gap-4'>
        {props.items.map((item, index) => (
          <div key={index} className='contents'>
            {props.renderItem(item)}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
