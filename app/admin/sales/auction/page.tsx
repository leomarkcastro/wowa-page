'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { AuctionsDataProvider } from '@/lib/dataProviders/auctions';
import { AuctionEditModal } from './AuctionEditModal';
import { fMoment } from '@/lib/services/fMoment';

const Dashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('active');
  const [isAddingAuction, setIsAddingAuction] = useState(false);
  const [auctionID, setAuctionID] = useState<string | null>(null);
  const [readOnly, setReadOnly] = useState(false);
  const searchParam = useSearchParams();

  useEffect(() => {
    const id = searchParam.get('id');
    if (id) {
      const readonly = searchParam.get('readonly');
      setAuctionID(id);
      setIsAddingAuction(true);
      setReadOnly(readonly === 'true');
    }
  }, [searchParam]);

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-primary'>Auction Events</h1>
          <p className='mt-2 text-sm text-muted-foreground'>
            Manage auction events and listings
          </p>
        </div>
      </div>

      <Tabs
        defaultValue='active'
        className='mb-6 bg-white'
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className='grid w-[400px] grid-cols-2'>
          <TabsTrigger value='active'>Active Auctions</TabsTrigger>
          <TabsTrigger value='deleted'>Past Auctions</TabsTrigger>
        </TabsList>
      </Tabs>

      {isAddingAuction && (
        <AuctionEditModal
          isOpen={isAddingAuction}
          onClose={() => setIsAddingAuction(false)}
          itemID={auctionID}
          readOnly={readOnly}
        />
      )}

      <DataProviderTable
        name='Auctions'
        enableUrlPersistence={true}
        actionButtons={
          <Button
            onClick={() => {
              setIsAddingAuction(true);
              setAuctionID(null);
              setReadOnly(false);
            }}
          >
            <PlusIcon />
            Create New Auction
          </Button>
        }
        columns={[
          {
            key: 'id',
            label: 'Record ID',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return (
                <p className='font-mono'>
                  {value.length > 10 ? value.slice(-7).toUpperCase() : value}
                </p>
              );
            },
          },
          {
            key: 'auctionID',
            label: 'Auction ID',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return (
                <p className='font-mono'>
                  {value.length > 10 ? value.slice(-7).toUpperCase() : value}
                </p>
              );
            },
          },
          {
            key: 'summary',
            label: 'Summary',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'eventDateStart',
            label: 'Start Date',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return fMoment(value).format('MMM DD, YYYY hh:mm A');
            },
          },
          {
            key: 'eventDateEnd',
            label: 'End Date',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return fMoment(value).format('MMM DD, YYYY hh:mm A');
            },
          },
          {
            key: 'city',
            label: 'Location',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value, allValue) {
              return `${value}, ${allValue.state}`;
            },
          },
          {
            key: 'actions',
            label: 'Action',
            renderCell(value, allValue) {
              return (
                <div className='flex w-fit items-center'>
                  <Button
                    size='icon'
                    variant='ghost'
                    onClick={(e) => {
                      e.stopPropagation();
                      setReadOnly(true);
                      setAuctionID(allValue.id);
                      setIsAddingAuction(true);
                    }}
                  >
                    <EyeIcon className='h-4 w-4' />
                  </Button>
                  <Button
                    size='icon'
                    variant='ghost'
                    onClick={(e) => {
                      e.stopPropagation();
                      setReadOnly(false);
                      setAuctionID(allValue.id);
                      setIsAddingAuction(true);
                    }}
                  >
                    <PencilIcon className='h-4 w-4' />
                  </Button>
                  <Button
                    size='icon'
                    variant='ghost'
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className='text-destructive'
                  >
                    <TrashIcon className='h-4 w-4' />
                  </Button>
                </div>
              );
            },
          },
        ]}
        dataSource={AuctionsDataProvider}
      />
    </div>
  );
};

export default Dashboard;
