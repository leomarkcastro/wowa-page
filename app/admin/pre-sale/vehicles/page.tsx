'use client';

import { DataTableTemplate } from '@/components/custom/data-table-template';
import { VehicleEditModal } from './(dashboard)/VehicleEditModal';
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import { formatMoney } from '@/lib/utils';
import { AuctionSelector } from './(dashboard)/AuctionSelector';
import { StatusSelector } from './(dashboard)/StatusSelector';
import { useCarFilterStore } from './(dashboard)/useCarFilterStore';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';
import { VehicleStatus } from '@/lib/constants/vehicle';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [carsFiltering, setCarsFiltering] = useCarFilterStore((state) => [
    state.filter,
    state.setFilter,
  ]);

  const selectedAuction = useMemo(() => {
    return carsFiltering;
  }, [carsFiltering]);

  return (
    <DataTableTemplate
      title='Vehicle Inventory'
      description='Manage and track vehicle listings'
      tabs={[
        { value: 'active', label: 'Active Listings' },
        { value: 'deleted', label: 'Deleted Listings' },
      ]}
      defaultTab={carsFiltering.deleted ? 'deleted' : 'active'}
      onTabChange={(value) => {
        setCarsFiltering({
          ...carsFiltering,
          deleted: value === 'deleted',
        });
      }}
      filterSection={
        <>
          <StatusSelector
            selectedStatus={carsFiltering.status || ('all' as VehicleStatus)}
            setSelectedStatus={(val) => {
              setCarsFiltering({
                ...carsFiltering,
                status: val as any,
              });
            }}
          />
          <AuctionSelector
            selectedAuction={selectedAuction.auction}
            setSelectedAuction={(val) => {
              setCarsFiltering({
                ...selectedAuction,
                auction: val,
              });
            }}
          />
        </>
      }
      dataProvider={CarsDataProvider}
      EditModal={VehicleEditModal}
      addNewLabel='Add New Vehicle'
      initialFilters={{
        auctionId:
          selectedAuction.auction === 'na'
            ? []
            : [
                {
                  operator: 'equals',
                  value: selectedAuction.auction,
                },
              ],
        deletedAt: [
          {
            operator: !carsFiltering.deleted ? 'equals' : 'nequals',
            value: 's:null',
          },
        ],
        status:
          carsFiltering.status === 'all'
            ? []
            : [
                {
                  operator: 'equals',
                  value: carsFiltering.status || 'all',
                },
              ],
      }}
      tableColumns={({
        setIsEditing,
        setItemID,
        setReadOnly,
        setShowDeleteConfirm,
        setDeleteItemId,
      }) => [
        {
          key: 'id',
          label: 'Ref ID',
          sortable: true,
          filterable: ['contains', 'equals'],
          renderCell(value) {
            return (
              <p className='font-mono'>
                {value.length > 10 ? value.slice(-7).toUpperCase() + '' : value}
              </p>
            );
          },
        },
        {
          key: 'lotId',
          label: 'Lot ID',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'year',
          label: 'Year',
          sortable: true,
          specialType: 'number',
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
        },
        {
          key: 'make',
          label: 'Make',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'model',
          label: 'Model',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'marketValueLow',
          label: 'Low Est.',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          specialType: 'number',
          renderCell(value) {
            return formatMoney(value);
          },
        },
        {
          key: 'marketValueHigh',
          label: 'High Est.',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          specialType: 'number',
          renderCell(value) {
            return formatMoney(value);
          },
        },
        {
          key: 'isSellWithoutReserve',
          label: 'Reserve',
          sortable: true,
          specialType: 'boolean',
          filterable: ['equals'],
          renderCell(value) {
            return value ? 'Y' : 'N';
          },
        },
        {
          key: 'contactConsignor',
          label: 'Consignor',
          sortable: true,
          filterable: ['contains', 'equals'],
          renderCell(value) {
            return value
              ? [value.name, value.middleName, value.lastName].join(' ')
              : '--';
          },
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true,
          filterable: ['contains', 'equals'],
          renderCell(value) {
            let statusText = (value || 'pending').toUpperCase();
            let variant = 'secondary';
            if (['approved'].includes(statusText.toLowerCase())) {
              variant = 'default';
            } else if (
              ['declined', 'cancelled', 'withdrawn'].includes(
                statusText.toLowerCase(),
              )
            ) {
              variant = 'destructive';
            }
            return <Badge variant={variant as any}>{statusText}</Badge>;
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
