'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

export function SyncSettings() {
  const formatLastSync = (date: string | null) => {
    if (!date) return 'Never';
    let parsedDate = new Date(date);
    return `${formatDistanceToNow(parsedDate)} ago`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member List Synchronization</CardTitle>
        <CardDescription>
          Sync members between NetForum and WordPress platforms.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'></CardContent>
    </Card>
  );
}
