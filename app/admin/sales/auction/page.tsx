'use client';

import { DataTableTemplate } from '@/components/custom/data-table-template';
import { Button } from '@/components/ui/button';
import { AuctionsDataProvider } from '@/lib/dataProviders/auctions';
import { fMoment } from '@/lib/services/fMoment';
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';
import { AuctionEditModal } from './(components)/AuctionEditModal';
import { useMemo } from 'react';
import { useAuctionFilterStore } from './(components)/useAuctionFilterStore';

const Dashboard = () => {
  const [auctionsFiltering, setAuctionsFiltering] = useAuctionFilterStore(
    (state) => [state.filter, state.setFilter],
  );

  const selectedAuction = useMemo(() => {
    return auctionsFiltering;
  }, [auctionsFiltering]);

  return (
    <DataTableTemplate
      title='Auction Events'
      description='Manage auction events and listings'
      tabs={[
        { value: 'active', label: 'Active Auctions' },
        { value: 'deleted', label: 'Past Auctions' },
      ]}
      defaultTab={auctionsFiltering.deleted ? 'deleted' : 'active'}
      onTabChange={(value) => {
        setAuctionsFiltering({
          ...auctionsFiltering,
          deleted: value === 'deleted',
        });
      }}
      initialFilters={{}}
      filterSection={<></>}
      dataProvider={AuctionsDataProvider}
      EditModal={AuctionEditModal}
      addNewLabel='Create New Auction'
      tableColumns={({
        setIsEditing,
        setItemID,
        setReadOnly,
        setShowDeleteConfirm,
        setDeleteItemId,
      }) => [
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
                    setItemID(allValue.id);
                    setIsEditing(true);
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
                    setItemID(allValue.id);
                    setIsEditing(true);
                  }}
                >
                  <PencilIcon className='h-4 w-4' />
                </Button>
                <Button
                  size='icon'
                  variant='ghost'
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteItemId(allValue.id);
                    setShowDeleteConfirm(true);
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
    />
  );
};

export default Dashboard;
