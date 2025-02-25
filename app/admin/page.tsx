'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { VehicleEditModal } from './(dashboard)/VehicleEditModal';
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import { formatMoney } from '@/lib/utils';

const Dashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('active');
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [vehicleID, setVehicleID] = useState<string | null>(null);
  const [readOnly, setReadOnly] = useState(false);
  const searchParam = useSearchParams();

  // if id is in search params, open edit modal and set vehicleID
  useEffect(() => {
    const id = searchParam.get('id');
    if (id) {
      const readonly = searchParam.get('readonly');
      setVehicleID(id);
      setIsAddingVehicle(true);
      setReadOnly(readonly === 'true');
    }
  }, [searchParam]);

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-primary'>Vehicle Inventory</h1>
          <p className='mt-2 text-sm text-muted-foreground'>
            Manage and track vehicle listings
          </p>
        </div>
      </div>

      <Tabs
        defaultValue='active'
        className='mb-6 bg-white'
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className='grid w-[400px] grid-cols-2'>
          <TabsTrigger value='active'>Active Listings</TabsTrigger>
          <TabsTrigger value='deleted'>Deleted Listings</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-muted-foreground'>
            Status
          </label>
          <Select defaultValue='all'>
            <SelectTrigger>
              <SelectValue placeholder='Select status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Statuses</SelectItem>
              <SelectItem value='approved'>Approved</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='declined'>Declined</SelectItem>
              <SelectItem value='withdrawn'>Withdrawn</SelectItem>
              <SelectItem value='cancelled'>Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium text-muted-foreground'>
            Auction
          </label>
          <Select defaultValue='AU25'>
            <SelectTrigger>
              <SelectValue placeholder='Select auction' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='AU25'>AU25</SelectItem>
              <SelectItem value='AU24'>AU24</SelectItem>
              <SelectItem value='not-listed'>Not in Auction</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAddingVehicle && (
        <VehicleEditModal
          isOpen={isAddingVehicle}
          onClose={() => setIsAddingVehicle(false)}
          itemID={vehicleID}
          readOnly={readOnly}
        />
      )}

      <DataProviderTable
        name='Vehicles'
        enableUrlPersistence={true}
        // onRowClick={(row) => {
        //   // router.push(`/admin/vehicles/edit/${row.id}`);
        //   setVehicleID(row.id);
        //   setIsAddingVehicle(true);
        // }}
        actionButtons={
          <Button
            onClick={() => {
              setIsAddingVehicle(true);
              setVehicleID(null);
              setReadOnly(false);
            }}
          >
            <PlusIcon />
            Add New Vehicle
          </Button>
        }
        columns={[
          {
            key: 'id',
            label: 'Ref ID',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return (
                <p className='font-mono'>
                  {value.length > 10
                    ? value.slice(-7).toUpperCase() + ''
                    : value}
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
            filterable: ['contains', 'equals'],
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
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return formatMoney(value);
            },
          },
          {
            key: 'marketValueHigh',
            label: 'High Est.',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return formatMoney(value);
            },
          },
          {
            key: 'isSellWithoutReserve',
            label: 'Reserve',
            sortable: true,
            filterable: ['contains', 'equals'],
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
              return value || '--';
            },
          },
          {
            key: 'status',
            label: 'Status',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              return value || 'Pending';
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
                      setVehicleID(allValue.id);
                      setIsAddingVehicle(true);
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
                      setVehicleID(allValue.id);
                      setIsAddingVehicle(true);
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
        dataSource={CarsDataProvider}
      />
    </div>
  );
};

export default Dashboard;
