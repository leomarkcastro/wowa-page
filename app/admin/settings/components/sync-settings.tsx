'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RefreshCw } from 'lucide-react';
import { useMutation, useQuery } from '@apollo/client';
import {
  Api_sync_from_wordpress,
  Api_sync_from_netforum,
  Api_timecheck,
} from '@/graphql/declarations/admin';
import { formatDistanceToNow } from 'date-fns';
import { toast } from '@/hooks/use-toast';

export function SyncSettings() {
  const [syncWordPress, { loading: wpLoading }] = useMutation(
    Api_sync_from_wordpress,
  );
  const [syncNetForum, { loading: nfLoading }] = useMutation(
    Api_sync_from_netforum,
  );

  const { data: wpLastSync } = useQuery(Api_timecheck, {
    variables: {
      input: {
        data: {
          key: 'wordpressSync-done',
        },
      },
    },
    pollInterval: 300000, // Poll every 5 minutes
  });

  const { data: nfLastSync } = useQuery(Api_timecheck, {
    variables: {
      input: {
        data: {
          key: 'netforumSync-done',
        },
      },
    },
    pollInterval: 300000, // Poll every 5 minutes
  });

  const handleWordPressSync = async () => {
    try {
      await syncWordPress({
        variables: {
          input: {
            data: {},
          },
        },
      });
      toast({
        title: 'WordPress Sync',
        description: 'WordPress members have been synced successfully.',
      });
    } catch (error) {
      console.error('WordPress sync failed:', error);
    }
  };

  const handleNetForumSync = async () => {
    try {
      await syncNetForum({
        variables: {
          input: {
            data: {},
          },
        },
      });
      toast({
        title: 'NetForum Sync',
        description: 'NetForum members have been synced successfully',
      });
    } catch (error) {
      console.error('NetForum sync failed:', error);
    }
  };

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
      <CardContent className='space-y-6'>
        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-medium'>NetForum Members</h3>
              <p className='text-sm text-muted-foreground'>
                Last synced:{' '}
                {formatLastSync(nfLastSync?.api_timecheck?.time || null)}
              </p>
            </div>
            <Button
              variant='outline'
              className='space-x-2'
              onClick={handleNetForumSync}
              disabled={nfLoading}
            >
              <RefreshCw
                className={`h-4 w-4 ${nfLoading ? 'animate-spin' : ''}`}
              />
              <span>{nfLoading ? 'Syncing...' : 'Sync Now'}</span>
            </Button>
          </div>
        </div>

        <Separator />

        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-medium'>WordPress Members</h3>
              <p className='text-sm text-muted-foreground'>
                Last synced:{' '}
                {formatLastSync(wpLastSync?.api_timecheck?.time || null)}
              </p>
            </div>
            <Button
              variant='outline'
              className='space-x-2'
              onClick={handleWordPressSync}
              disabled={wpLoading}
            >
              <RefreshCw
                className={`h-4 w-4 ${wpLoading ? 'animate-spin' : ''}`}
              />
              <span>{wpLoading ? 'Syncing...' : 'Sync Now'}</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
