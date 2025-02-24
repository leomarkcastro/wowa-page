'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { QuickForm } from '@/components/custom/quick-form';

interface VehicleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VehicleEditModal({ isOpen, onClose }: VehicleEditModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col gap-0 p-0'>
        <DialogHeader className='border-b px-6 py-4'>
          <DialogTitle className='text-xl font-semibold text-gray-900'>
            Add Vehicle
          </DialogTitle>
        </DialogHeader>

        <QuickForm
          title='New Vehicle'
          subtitle='Enter vehicle details'
          onSubmit={(data) => {
            console.log(data);
            onClose();
          }}
          fields={[
            {
              type: 'tabs',
              tabs: [
                {
                  name: 'Basic Info',
                  fields: [
                    {
                      type: 'text',
                      name: 'plateNumber',
                      label: 'Plate Number',
                      required: true,
                      row: 1,
                      cell: 1,
                    },
                    {
                      type: 'select',
                      name: 'type',
                      label: 'Vehicle Type',
                      options: [
                        { label: 'Car', value: 'car' },
                        { label: 'Truck', value: 'truck' },
                        { label: 'Van', value: 'van' },
                      ],
                      required: true,
                      row: 1,
                      cell: 1,
                    },
                    {
                      type: 'text',
                      name: 'brand',
                      label: 'Brand',
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
                  ],
                },
                {
                  name: 'Details',
                  fields: [
                    {
                      type: 'number',
                      name: 'year',
                      label: 'Year',
                      required: true,
                      row: 1,
                      cell: 1,
                    },
                    {
                      type: 'text',
                      name: 'color',
                      label: 'Color',
                      row: 1,
                      cell: 1,
                    },
                    {
                      type: 'number',
                      name: 'seats',
                      label: 'Number of Seats',
                      required: true,
                      row: 2,
                      cell: 2,
                    },
                  ],
                },
                {
                  name: 'Documents',
                  fields: [
                    {
                      type: 'file',
                      name: 'registration',
                      label: 'Registration Document',
                      required: true,
                      row: 1,
                      cell: 2,
                    },
                    {
                      type: 'file',
                      name: 'insurance',
                      label: 'Insurance Document',
                      required: true,
                      row: 2,
                      cell: 2,
                    },
                    {
                      type: 'textarea',
                      name: 'notes',
                      label: 'Additional Notes',
                      row: 3,
                      cell: 2,
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </DialogContent>
    </Dialog>
  );
}
