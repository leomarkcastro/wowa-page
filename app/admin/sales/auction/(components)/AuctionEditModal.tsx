'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ResourceForm } from '@/components/custom/resource-form';
import { useEffect, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AuctionsDataProvider } from '@/lib/dataProviders/auctions';
import { useSearchParams } from 'next/navigation';
import { FileItem } from '@/components/ui/MultiFileInput';
import { fMoment } from '@/lib/services/fMoment';
import { ChangeLogHistory } from '@/components/ChangeLogHistory';
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatMoney } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { FieldType } from '@/components/custom/quick-form.types';

interface AssignedCarsListProps {
  loadingCars: boolean;
  assignedCars: any[];
  carColumns: {
    accessorKey: string;
    header: string;
    cell?: ({
      row,
    }: {
      row: { getValue: (key: string) => any };
    }) => React.ReactNode;
  }[];
}

const AssignedCarsList: React.FC<AssignedCarsListProps> = ({
  loadingCars,
  assignedCars,
  carColumns,
}) => {
  return (
    <div className='w-full'>
      {loadingCars ? (
        <div className='flex items-center justify-center p-8'>
          <div className='mr-2 h-3 w-3 animate-spin bg-primary/50' />
          <p>Loading cars...</p>
        </div>
      ) : assignedCars.length === 0 ? (
        <div className='p-8 text-center text-muted-foreground'>
          No cars assigned to this auction yet.
        </div>
      ) : (
        <div className='w-full overflow-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                {carColumns.map((column) => (
                  <TableHead key={column.accessorKey}>
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignedCars.map((car) => (
                <TableRow
                  key={car.id}
                  className='cursor-pointer'
                  onClick={() =>
                    window.open(
                      `/admin/pre-sale/vehicles?id=${car.id}&readonly=true`,
                      '_blank',
                    )
                  }
                >
                  {carColumns.map((column) => (
                    <TableCell key={`${car.id}-${column.accessorKey}`}>
                      {column.cell
                        ? column.cell({
                            row: {
                              getValue: (key) => car[key],
                            },
                          })
                        : car[column.accessorKey]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

interface AuctionEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemID?: string;
  readOnly?: boolean;
}

export function AuctionEditModal({
  itemID,
  isOpen,
  onClose,
  readOnly,
}: AuctionEditModalProps) {
  const sp = useSearchParams();
  const [form, setForm] = useState<UseFormReturn<any>>();
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [readonly, setReadonly] = useState(readOnly);
  const [assignedCars, setAssignedCars] = useState<any[]>([]);
  const [loadingCars, setLoadingCars] = useState(false);

  useEffect(() => {
    setReadonly(readOnly);
  }, [readOnly]);

  useEffect(() => {
    if (isOpen && itemID) {
      fetchAssignedCars();
    }
  }, [isOpen, itemID]);

  const handleClose = () => {
    onClose();
    if (readOnly !== readonly) {
      setReadonly(readOnly);
    }
  };

  const dataProvider = AuctionsDataProvider;

  const onSubmit = async () => {
    if (formRef) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  const fetchAssignedCars = async () => {
    if (!itemID) return;

    setLoadingCars(true);
    try {
      const response = await CarsDataProvider.getList({
        pagination: { page: 1, perPage: 100 },
        sorters: [],
        search: '',
        filters: [
          {
            field: 'auctionId',
            operator: 'equals',
            value: itemID,
          },
          {
            field: 'deletedAt',
            operator: 'equals',
            value: 's:null',
          },
        ],
        meta: {},
      });

      setAssignedCars(response.data || []);
    } catch (error) {
      console.error('Error fetching assigned cars:', error);
    } finally {
      setLoadingCars(false);
    }
  };

  const carColumns = [
    {
      accessorKey: 'id',
      header: 'Ref ID',
      cell: ({ row }) => {
        const id = row.getValue('id') as string;
        return (
          <p className='font-mono'>
            {id.length > 10 ? id.slice(-7).toUpperCase() : id}
          </p>
        );
      },
    },
    {
      accessorKey: 'lotId',
      header: 'Lot ID',
    },
    {
      accessorKey: 'year',
      header: 'Year',
    },
    {
      accessorKey: 'make',
      header: 'Make',
    },
    {
      accessorKey: 'model',
      header: 'Model',
    },
    {
      accessorKey: 'marketValueLow',
      header: 'Low Est.',
      cell: ({ row }) => {
        const value = row.getValue('marketValueLow');
        return formatMoney(value as number);
      },
    },
    {
      accessorKey: 'marketValueHigh',
      header: 'High Est.',
      cell: ({ row }) => {
        const value = row.getValue('marketValueHigh');
        return formatMoney(value as number);
      },
    },
    {
      accessorKey: 'isSellWithoutReserve',
      header: 'Reserve',
      cell: ({ row }) => {
        const value = row.getValue('isSellWithoutReserve') as boolean;
        return value ? 'Y' : 'N';
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const value = (
          (row.getValue('status') as string) || 'pending'
        ).toUpperCase();
        let variant = 'secondary';
        if (['approved'].includes(value.toLowerCase())) {
          variant = 'default';
        } else if (
          ['declined', 'cancelled', 'withdrawn'].includes(value.toLowerCase())
        ) {
          variant = 'destructive';
        }
        return <Badge variant={variant as any}>{value}</Badge>;
      },
    },
  ];

  return (
    <>
      {isOpen && (
        // add a dark background
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50' />
      )}
      <Dialog
        modal={false}
        open={isOpen}
        onOpenChange={(open) => !open && handleClose()}
      >
        <DialogContent className='flex h-[90vh] max-w-4xl flex-col gap-0 p-0'>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-accent/50 bg-opacity-90 text-accent-foreground'>
              <div className='flex items-center gap-4'>
                <div className='h-3 w-3 animate-spin bg-background/50' />
                <p className='text-lg font-semibold text-foreground'>
                  Saving...
                </p>
              </div>
            </div>
          )}
          <DialogHeader className='border-b p-2'>
            <DialogTitle className='p-2 px-4 text-xl font-semibold text-primary'>
              {readonly
                ? 'View Auction'
                : itemID
                  ? 'Edit Auction'
                  : 'Add Auction'}
              {itemID && (
                <span className='ml-4 font-mono text-sm uppercase text-gray-600'>
                  {itemID.slice(-7)}
                </span>
              )}
              {readonly && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => {
                    setReadonly(false);
                  }}
                  className='ml-4'
                >
                  Edit
                </Button>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className='h-full overflow-auto px-4'>
            <ResourceForm
              key={(readonly ? 'readonly' : 'edit') + '::' + itemID || 'new'}
              mode={itemID ? 'edit' : 'create'}
              title={
                readonly
                  ? 'View Auction'
                  : itemID
                    ? 'Edit Auction'
                    : 'Add Auction'
              }
              subtitle={itemID ? 'Edit Auction' : 'Add Auction'}
              dataProvider={dataProvider}
              hideActionsCard={true}
              hideHeader={true}
              readonly={readonly}
              dontReturnOnSubmit={true}
              onForm={(form) => setForm(form)}
              formRef={formRef}
              preprocessData={(data) => {
                if (data.photos) {
                  data.photos = data.photos.map(
                    (photo) =>
                      ({
                        id: photo.id,
                        name: photo.url,
                      }) as FileItem,
                  );
                }
                // convert date start and end to 2025-03-29T15:09 format
                data.eventDateStart = fMoment(data.eventDateStart).format(
                  'YYYY-MM-DDTHH:mm',
                );
                data.eventDateEnd = fMoment(data.eventDateEnd).format(
                  'YYYY-MM-DDTHH:mm',
                );
                // Ensure updateID is displayed as readonly
                if (data.updateID) {
                  data.updateID = data.updateID.toString();
                }
                return data;
              }}
              transformSubmitData={(data) => {
                setLoading(true);
                setErrMessage('');
                const deepCopyData = JSON.parse(JSON.stringify(data));
                deepCopyData.photoIds =
                  deepCopyData.photos?.map((photo) => photo.id) || [];
                delete deepCopyData.photos;
                delete deepCopyData.createdAt;
                // Don't delete updateID as it's needed for tracking changes
                return deepCopyData;
              }}
              onAfterSubmit={() => {
                setLoading(false);
                return (!itemID ? handleClose : () => {})();
              }}
              onError={(err) => {
                setLoading(false);
                let errMessage = Object.keys(err).map((errKey) => {
                  return `${errKey}: ${err?.[errKey]?.message || err?.[errKey]?.root?.message || 'Please double check this field'}`;
                });
                setErrMessage(errMessage.join('. '));
              }}
              getIDon={() => {
                return sp.get('id');
              }}
              onDynamicField={(f, v) => {
                const toHide = [];
                if (v.isSellWithoutReserve) {
                  toHide.push({ id: 'reservePrice', toHide: true });
                }
                return toHide;
              }}
              fields={[
                {
                  type: 'tabs',
                  tabs: [
                    {
                      name: 'Basic Information',
                      fields: [
                        {
                          type: 'title',
                          label: 'Auction Details',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'auctionID',
                          label: 'Auction ID',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'name',
                          label: 'Auction Name',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'summary',
                          label: 'Summary',
                          row: 3,
                          cell: 2,
                        },
                        {
                          type: 'textarea',
                          name: 'body',
                          label: 'Description',
                          row: 4,
                          cell: 2,
                        },
                        {
                          type: 'divider',
                          row: 5,
                          cell: 2,
                        },
                        {
                          type: 'title',
                          label: 'Auction Schedule',
                          row: 6,
                          cell: 2,
                        },
                        {
                          type: 'datetime',
                          name: 'eventDateStart',
                          label: 'Start Date',
                          required: true,
                          row: 7,
                          cell: 1,
                        },
                        {
                          type: 'datetime',
                          name: 'eventDateEnd',
                          label: 'End Date',
                          required: true,
                          row: 7,
                          cell: 1,
                        },
                        {
                          type: 'divider',
                          row: 9,
                          cell: 2,
                        },
                      ],
                    },
                    {
                      name: 'Location',
                      fields: [
                        {
                          type: 'title',
                          label: 'Auction Location',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'addressLine1',
                          label: 'Address Line 1',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'addressLine2',
                          label: 'Address Line 2',
                          row: 3,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'city',
                          label: 'City',
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'state',
                          label: 'State/Province',
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'zip',
                          label: 'ZIP/Postal Code',
                          row: 5,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'country',
                          label: 'Country',
                          row: 5,
                          cell: 1,
                        },
                        {
                          type: 'divider',
                          row: 6,
                          cell: 2,
                        },
                      ],
                    },
                    {
                      name: 'Media & Tags',
                      fields: [
                        {
                          type: 'title',
                          label: 'Auction Media',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'multiFileInput',
                          name: 'photos',
                          label: 'Upload Photos',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'fileGallery',
                          name: 'photos',
                          label: '',
                          onDelete(file) {
                            console.log('onDelete', file);
                          },
                          onFileClick(file) {
                            window.open(file.url, '_blank');
                          },
                          row: 3,
                          cell: 2,
                          size: 250,
                          aspectRatio: 16 / 9,
                        },
                        {
                          type: 'divider',
                          row: 4,
                          cell: 2,
                        },
                        {
                          type: 'title',
                          label: 'Auction Tags',
                          row: 5,
                          cell: 2,
                        },
                        {
                          type: 'array',
                          name: 'tags',
                          label: 'Tags',
                          row: 6,
                          cell: 2,
                          field: {
                            type: 'text',
                            row: 1,
                            cell: 2,
                          },
                        },
                        {
                          type: 'divider',
                          row: 7,
                          cell: 2,
                        },
                      ],
                    },
                    ...(itemID
                      ? [
                          {
                            name: 'Assigned Cars',
                            fields: [
                              {
                                type: 'title',
                                label: 'Cars Assigned to this Auction',
                                row: 1,
                                cell: 2,
                              },
                              {
                                type: 'custom',
                                label: 'Cars List',
                                name: 'carsList',
                                row: 2,
                                cell: 2,
                                component() {
                                  return (
                                    <AssignedCarsList
                                      loadingCars={loadingCars}
                                      assignedCars={assignedCars}
                                      carColumns={carColumns}
                                    />
                                  );
                                },
                              } as FieldType,
                            ],
                          } as { name: string; fields: FieldType[] },
                          {
                            name: 'Edit History',
                            fields: [
                              {
                                type: 'custom',
                                label: 'Edit History Table',
                                name: 'created',
                                row: 1,
                                cell: 2,
                                component(form) {
                                  return (
                                    <ChangeLogHistory
                                      dataType='auction'
                                      dataId={itemID}
                                    />
                                  );
                                },
                              } as FieldType,
                            ],
                          } as { name: string; fields: FieldType[] },
                        ]
                      : []),
                  ],
                },
              ]}
            />
          </div>
          {!readonly && (
            <div className='flex items-center justify-end gap-4 p-4'>
              <p className='text-sm text-red-500'>{errMessage}</p>
              <Button
                variant='outline'
                onClick={handleClose}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button onClick={onSubmit} type='submit' disabled={loading}>
                Save
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
