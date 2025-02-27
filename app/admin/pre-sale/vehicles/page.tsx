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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useMemo, useState } from 'react';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { VehicleEditModal } from './(dashboard)/VehicleEditModal';
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import { formatMoney } from '@/lib/utils';
import { AuctionSelector } from './(dashboard)/AuctionSelector';
import { useCarFilterStore } from './(dashboard)/useCarFilterStore';
import { createProvider } from '@/lib/services/createProvider';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('active');
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [vehicleID, setVehicleID] = useState<string | null>(null);
  const [readOnly, setReadOnly] = useState(false);
  const [carsFiltering, setCarsFiltering] = useCarFilterStore((state) => [
    state.filter,
    state.setFilter,
  ]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteVehicleId, setDeleteVehicleId] = useState<string | null>(null);
  const searchParam = useSearchParams();

  const selectedAuction = useMemo(() => {
    return carsFiltering;
  }, [carsFiltering]);

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

  const dataProvider = CarsDataProvider;

  const dataHookProvider = createProvider({
    name: dataProvider.name,
    dataProvider: dataProvider,
  });

  const useDelete = dataHookProvider.useDelete();

  const handleDeleteVehicle = async (id: string) => {
    // Placeholder for actual delete implementation
    // console.log('Deleting vehicle:', id);
    // TODO: Implement actual delete logic here
    await useDelete.mutateAsync({
      id: id,
      meta: {},
      resource: dataProvider.name.toLowerCase(),
    });
    toast({
      title: 'Deleted Successfully',
      description: `Vehicle has been deleted successfully`,
    });
    setShowDeleteConfirm(false);
    setDeleteVehicleId(null);
  };

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
        value={carsFiltering.deleted ? 'deleted' : 'active'}
        onValueChange={(value) => {
          setCarsFiltering({
            ...carsFiltering,
            deleted: value === 'deleted',
          });
        }}
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

        <AuctionSelector
          selectedAuction={selectedAuction.auction}
          setSelectedAuction={(val) => {
            setCarsFiltering({
              ...selectedAuction,
              auction: val,
            });
          }}
        />
      </div>

      {isAddingVehicle && (
        <VehicleEditModal
          isOpen={isAddingVehicle}
          onClose={() => setIsAddingVehicle(false)}
          itemID={vehicleID}
          readOnly={readOnly}
        />
      )}

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              vehicle from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
              onClick={() =>
                deleteVehicleId && handleDeleteVehicle(deleteVehicleId)
              }
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
                      setDeleteVehicleId(allValue.id);
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
        }}
        passFilters
        dataSource={CarsDataProvider}
      />
    </div>
  );
};

export default Dashboard;
