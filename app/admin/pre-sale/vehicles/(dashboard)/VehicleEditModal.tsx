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
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import { useSearchParams } from 'next/navigation';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { FileItem } from '@/components/ui/MultiFileInput';
import { CircleDollarSign } from 'lucide-react';
import { VEHICLE_STATUSES } from '@/lib/constants/vehicle';
import { AuctionsDataProvider } from '@/lib/dataProviders/auctions';
import { ChangeLogHistory } from '@/components/ChangeLogHistory';

interface VehicleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemID?: string;
  readOnly?: boolean;
}

export function VehicleEditModal({
  itemID,
  isOpen,
  onClose,
  readOnly,
}: VehicleEditModalProps) {
  const sp = useSearchParams();
  const [form, setForm] = useState<UseFormReturn<any>>();
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [readonly, setReadonly] = useState(readOnly);

  useEffect(() => {
    setReadonly(readOnly);
  }, [readOnly]);

  const dataProvider = CarsDataProvider;

  const onSubmit = async () => {
    if (formRef) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  const handleClose = () => {
    // remove itemID from search params
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    url.searchParams.delete('readonly');
    window.history.pushState({}, '', url.toString());

    console.log('close');

    onClose();
  };

  // if itemID is given, push it to search params
  if (itemID) {
    const url = new URL(window.location.href);
    url.searchParams.set('id', itemID);
    url.searchParams.set('readonly', readonly.toString());
    window.history.pushState({}, '', url.toString());
  }

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
        <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col gap-0 p-0'>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-white/50 bg-opacity-90'>
              <div className='flex items-center gap-4'>
                <div className='h-3 w-3 animate-spin bg-gray-700' />
                <p className='text-lg font-semibold text-primary'>Saving...</p>
              </div>
            </div>
          )}
          <DialogHeader className='border-b p-2'>
            <DialogTitle className='p-2 px-4 text-xl font-semibold text-primary'>
              {readonly
                ? 'View Vehicle'
                : itemID
                  ? 'Edit Vehicle'
                  : 'Add Vehicle'}
              {itemID && (
                <span className='ml-4 font-mono text-sm uppercase text-gray-600'>
                  {itemID.slice(-7)}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className='h-full overflow-auto px-4'>
            <ResourceForm
              mode={itemID ? 'edit' : 'create'}
              title={
                readonly
                  ? 'View Vehicle'
                  : itemID
                    ? 'Edit Vehicle'
                    : 'Add Vehicle'
              }
              subtitle={itemID ? 'Edit Vehicle' : 'Add Vehicle'}
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
                return data;
              }}
              transformSubmitData={(data) => {
                setLoading(true);
                setErrMessage('');
                const deepCopyData = JSON.parse(JSON.stringify(data));
                deepCopyData.photoIds = deepCopyData.photos?.map(
                  (photo) => photo.id,
                );
                delete deepCopyData.photos;
                delete deepCopyData.auction;
                delete deepCopyData.createdAt;

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
                      name: 'Vehicle Information',
                      fields: [
                        {
                          type: 'title',
                          label: 'Basic Information',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'select',
                          name: 'status',
                          label: 'Status',
                          required: true,
                          row: 2,
                          cell: 1,
                          // allowCustom: true,
                          options: VEHICLE_STATUSES.map((status) => ({
                            label: status.label,
                            value: status.value,
                          })).filter((status) => status.value !== 'all'),
                        },
                        {
                          type: 'text',
                          name: 'lotId',
                          label: 'Lot ID',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'vin',
                          label: 'VIN',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'number',
                          name: 'year',
                          label: 'Year',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'make',
                          label: 'Make',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'model',
                          label: 'Model',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'title',
                          label: 'Engine & Body',
                          row: 3,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'transmission',
                          label: 'Transmission',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'engineSize',
                          label: 'Engine Size',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'engineNumber',
                          label: 'Engine Number',
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'bodyStyle',
                          label: 'Body Style',
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'title',
                          label: 'Appearance',
                          row: 5,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'exteriorColor',
                          label: 'Exterior Color',
                          row: 5,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'interiorColor',
                          label: 'Interior Color',
                          row: 5,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'interiorSurfaceMaterial',
                          label: 'Interior Surface Material',
                          row: 6,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Condition',
                      fields: [
                        {
                          type: 'title',
                          label: 'Usage & Status',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'number',
                          name: 'mileage',
                          label: 'Mileage',
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'select',
                          name: 'mileageType',
                          label: 'Mileage Type',
                          options: [
                            { label: 'Miles', value: 'miles' },
                            { label: 'Kilometers', value: 'km' },
                          ],
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'title',
                          label: 'Vehicle History',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'checkbox',
                          name: 'isNumbersMatching',
                          label: 'Numbers Matching',

                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'checkbox',
                          name: 'isRestored',
                          label: 'Restored',

                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'checkbox',
                          name: 'isInDamageOrAccident',
                          label: 'Damage or Accident History',

                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'title',
                          label: 'Condition Details',
                          row: 4,
                          cell: 2,
                        },
                        {
                          type: 'multiselect',
                          name: 'exteriorFlags',
                          label: 'Exterior Condition',
                          options: [
                            { label: 'Glossy Paint', value: 'glossyPaint' },
                            {
                              label: 'Original Paint',
                              value: 'originalPaint',
                            },
                            {
                              label: 'Original Paint Color',
                              value: 'originalPaintColor',
                            },
                            { label: 'Touch Ups', value: 'touchUps' },
                            {
                              label: 'No Visible Scratches/Dents',
                              value: 'noScratches',
                            },
                            { label: 'No Visible Rust', value: 'noRust' },
                            {
                              label: 'Exterior Fully Detailed',
                              value: 'fullyDetailed',
                            },
                          ],
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'textarea',
                          name: 'mechanicalSuspensionNote',
                          label: 'Mechanical & Suspension Notes',
                          row: 5,
                          cell: 2,
                        },
                        {
                          type: 'textarea',
                          name: 'frameNote',
                          label: 'Frame Notes',
                          row: 6,
                          cell: 2,
                        },
                        {
                          type: 'textarea',
                          name: 'interiorCondition',
                          label: 'Interior Condition',
                          row: 7,
                          cell: 2,
                        },
                      ],
                    },
                    {
                      name: 'Photos & Documents',
                      fields: [
                        {
                          type: 'title',
                          label: 'Vehicle Documentation',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'multiFileInput',
                          name: 'photos',
                          label: 'Upload Image',
                          row: 1,
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
                            window.open(
                              process.env.NEXT_PUBLIC_SERVER_URL +
                                '/api/files/name/' +
                                file.filename,
                              '_blank',
                            );
                          },
                          row: 1,
                          cell: 2,
                          size: 250,
                          aspectRatio: 16 / 9,
                        },
                        {
                          type: 'divider',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'array',
                          name: 'notablePoints',
                          label: 'Notable Points',
                          row: 2,
                          cell: 2,
                          field: {
                            type: 'text',
                            row: 1,
                            cell: 2,
                          },
                          // required: true,
                          // min: 1,
                        },
                      ],
                    },
                    {
                      name: 'Financial Status',
                      fields: [
                        {
                          type: 'title',
                          label: 'Pricing Information',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'number',
                          name: 'marketValueLow',
                          label: 'Market Value (Low)',
                          before: (
                            <CircleDollarSign className='text-gray-500' />
                          ),
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'number',
                          name: 'marketValueHigh',
                          label: 'Market Value (High)',
                          before: (
                            <CircleDollarSign className='text-gray-500' />
                          ),
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'checkbox',
                          name: 'isSellWithoutReserve',
                          label: 'Sell Without Reserve',

                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'number',
                          name: 'reservePrice',
                          label: 'Reserve Price',
                          before: (
                            <CircleDollarSign className='text-gray-500' />
                          ),
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'title',
                          label: 'Payment Status',
                          row: 4,
                          cell: 2,
                        },
                        {
                          type: 'checkbox',
                          name: 'isPaymentProcessed',
                          label: 'Payment Processed',

                          row: 5,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Status & Process',
                      fields: [
                        {
                          type: 'title',
                          label: 'Contact Information',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'checkbox',
                          name: 'isConfirmedSeller',
                          label: 'Confirmed Seller',
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'asyncSelect',
                          name: 'contactSellerId',
                          label: 'Contact Seller',
                          row: 2,
                          cell: 1,
                          addNewItemAction(inputValue) {
                            window.open('/admin/users/consignor', '_blank');
                          },
                          async fetch(query) {
                            return (
                              await MembersDataProvider.getList({
                                sorters: [],
                                search: query,
                                filters: [],
                                pagination: { page: 1, perPage: 10 },
                              })
                            ).data.map((item) => ({
                              label: [item.name, item.lastName].join(' '),
                              value: item.id,
                            }));
                          },
                        },
                        {
                          type: 'asyncSelect',
                          name: 'contactConsignorId',
                          label: 'Contact Consignor',
                          row: 3,
                          cell: 1,
                          addNewItemAction(inputValue) {
                            window.open('/admin/users/consignor', '_blank');
                          },
                          async fetch(query) {
                            return (
                              await MembersDataProvider.getList({
                                sorters: [],
                                search: query,
                                filters: [],
                                pagination: { page: 1, perPage: 10 },
                              })
                            ).data.map((item) => ({
                              label: [item.name, item.lastName].join(' '),
                              value: item.id,
                            }));
                          },
                        },
                        {
                          type: 'text',
                          name: 'contactSpecialist',
                          label: 'Contact Specialist',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'asyncSelect',
                          name: 'contactApprovedById',
                          label: 'Contact Approved By',
                          row: 4,
                          cell: 1,
                          addNewItemAction(inputValue) {
                            window.open('/admin/users/consignor', '_blank');
                          },
                          async fetch(query) {
                            return (
                              await MembersDataProvider.getList({
                                sorters: [],
                                search: query,
                                filters: [],
                                pagination: { page: 1, perPage: 10 },
                              })
                            ).data.map((item) => ({
                              label: [item.name, item.lastName].join(' '),
                              value: item.id,
                            }));
                          },
                        },
                        {
                          type: 'title',
                          label: 'Process Status',
                          row: 5,
                          cell: 2,
                        },
                        {
                          type: 'asyncSelect',
                          name: 'auctionId',
                          label: 'Auction',
                          row: 6,
                          cell: 1,
                          addNewItemAction(inputValue) {
                            window.open('/admin/sales/auction', '_blank');
                          },
                          async fetch(query) {
                            return (
                              await AuctionsDataProvider.getList({
                                sorters: [],
                                search: query,
                                filters: [],
                                pagination: { page: 1, perPage: 10 },
                              })
                            ).data.map((item) => ({
                              label: [item.auctionID, item.name].join(' - '),
                              value: item.id,
                            }));
                          },
                        },
                        {
                          type: 'checkbox',
                          name: 'isTitleReceived',
                          label: 'Title Received',
                          row: 6,
                          cell: 1,
                        },
                        {
                          type: 'checkbox',
                          name: 'isVehicleCollected',
                          label: 'Vehicle Collected',
                          row: 7,
                          cell: 1,
                        },
                        {
                          type: 'checkbox',
                          name: 'isTransportationDelivered',
                          label: 'Transportation Delivered',
                          row: 7,
                          cell: 1,
                        },
                      ],
                    },
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
                                dataType='car'
                                dataId={itemID}
                              />
                            );
                          },
                        },
                      ],
                    },
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
