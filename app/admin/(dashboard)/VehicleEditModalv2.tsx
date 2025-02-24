'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ResourceForm } from '@/components/custom/resource-form';
import { useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CarsDataProvider } from '@/lib/dataProviders/cars';
import { useSearchParams } from 'next/navigation';

interface VehicleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemID?: string;
}

export function VehicleEditModal({
  itemID,
  isOpen,
  onClose,
}: VehicleEditModalProps) {
  const sp = useSearchParams();
  const [form, setForm] = useState<UseFormReturn<any>>();
  const formRef = useRef<any>(null);

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
    window.history.pushState({}, '', url.toString());

    onClose();
  };

  // if itemID is given, push it to search params
  if (itemID) {
    const url = new URL(window.location.href);
    url.searchParams.set('id', itemID);
    window.history.pushState({}, '', url.toString());
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col gap-0 p-0'>
        <DialogHeader className='border-b p-2'>
          <DialogTitle className='p-2 px-4 text-xl font-semibold text-gray-900'>
            Add Vehicle
          </DialogTitle>
        </DialogHeader>

        <div className='h-full overflow-auto'>
          <ResourceForm
            mode={itemID ? 'edit' : 'create'}
            title='Add Vehicle'
            subtitle='Add a new vehicle to the inventory'
            dataProvider={dataProvider}
            hideActionsCard={true}
            hideHeader={true}
            dontReturnOnSubmit={true}
            onForm={(form) => setForm(form)}
            formRef={formRef}
            onAfterSubmit={!itemID ? () => handleClose() : () => {}}
            getIDon={() => {
              return sp.get('id');
            }}
            transformSubmitData={(data) => {
              // delete createdAt
              delete data.createdAt;
              delete data.auction;
              delete data.photos;
              return data;
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
                        type: 'file',
                        name: 'photos',
                        label: 'Photos',
                        multiple: true,
                        row: 1,
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
                        name: 'reservePrice',
                        label: 'Reserve Price',
                        row: 1,
                        cell: 1,
                      },
                      {
                        type: 'number',
                        name: 'marketValueHigh',
                        label: 'Market Value (High)',
                        row: 1,
                        cell: 1,
                      },
                      {
                        type: 'number',
                        name: 'marketValueLow',
                        label: 'Market Value (Low)',
                        row: 2,
                        cell: 1,
                      },
                      {
                        type: 'title',
                        label: 'Payment Status',
                        row: 3,
                        cell: 2,
                      },
                      {
                        type: 'checkbox',
                        name: 'isSellWithoutReserve',
                        label: 'Sell Without Reserve',
                        row: 2,
                        cell: 1,
                      },
                      {
                        type: 'checkbox',
                        name: 'isPaymentProcessed',
                        label: 'Payment Processed',
                        row: 3,
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
                        row: 1,
                        cell: 1,
                      },
                      {
                        type: 'text',
                        name: 'contactSeller',
                        label: 'Contact Seller',
                        row: 1,
                        cell: 1,
                      },
                      {
                        type: 'text',
                        name: 'contactConsignor',
                        label: 'Contact Consignor',
                        row: 2,
                        cell: 1,
                      },
                      {
                        type: 'text',
                        name: 'contactSpecialist',
                        label: 'Contact Specialist',
                        row: 2,
                        cell: 1,
                      },
                      {
                        type: 'title',
                        label: 'Process Status',
                        row: 4,
                        cell: 2,
                      },
                      {
                        type: 'text',
                        name: 'contactApprovedBy',
                        label: 'Approved By',
                        row: 3,
                        cell: 1,
                      },
                      {
                        type: 'text',
                        name: 'auction',
                        label: 'Auction',
                        row: 3,
                        cell: 1,
                      },
                      {
                        type: 'date',
                        name: 'createdAt',
                        label: 'Created At',
                        row: 4,
                        cell: 2,
                      },
                      {
                        type: 'checkbox',
                        name: 'isTitleReceived',
                        label: 'Title Received',
                        row: 4,
                        cell: 2,
                      },
                      {
                        type: 'checkbox',
                        name: 'isVehicleCollected',
                        label: 'Vehicle Collected',
                        row: 5,
                        cell: 2,
                      },
                      {
                        type: 'checkbox',
                        name: 'isTransportationDelivered',
                        label: 'Transportation Delivered',
                        row: 5,
                        cell: 2,
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>
        <div className='flex justify-end gap-4 p-4'>
          <Button variant='outline' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit} type='submit'>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
