import { useState, useEffect } from 'react';
import { Camera, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Vehicle } from './types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface VehicleEditModalProps {
  isOpen: boolean;
  vehicle?: Vehicle;
  onClose: () => void;
  onSave: (updatedVehicle: Vehicle) => void;
}

type TabType = 'info' | 'photos' | 'financial' | 'status';

const defaultVehicle: Vehicle = {
  id: '',
  lotId: '',
  refId: '',
  vin: '',
  year: new Date().getFullYear(),
  make: '',
  model: '',
  color: '',
  estimateRange: {
    low: 0,
    high: 0,
  },
  hasReserve: false,
  reservePrice: null,
  consignor: '',
  company: '',
  specialist: '',
  dateCreated: new Date().toISOString(),
  status: 'Pending',
  approvedBy: null,
  auction: 'EA25',
  condition: {
    exterior: '',
    interior: '',
    mechanical: '',
    overall: '',
    notes: '',
  },
  photos: [],
  processStatus: {
    title: false,
    payment: false,
    collection: false,
    transportation: false,
  },
  comments: [],
};

export function VehicleEditModal({
  isOpen,
  vehicle,
  onClose,
  onSave,
}: VehicleEditModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Vehicle>({
    defaultValues: vehicle || defaultVehicle,
  });

  // Reset form when vehicle changes
  useEffect(() => {
    reset(vehicle || defaultVehicle);
  }, [vehicle, reset]);

  // Generate a new Ref ID when creating a new vehicle
  useEffect(() => {
    if (!vehicle) {
      const randomRefId = Math.floor(Math.random() * 900 + 100).toString();
      setValue('refId', randomRefId);
    }
  }, [vehicle, setValue]);

  // Watch status field for changes
  const watchStatus = watch('status');

  // Update approvedBy when status changes to Approved
  useEffect(() => {
    if (watchStatus === 'Approved') {
      setValue('approvedBy', 'John Lauer');
    } else if (watchStatus !== 'Approved') {
      setValue('approvedBy', null);
    }
  }, [watchStatus, setValue]);

  const onSubmitForm = (data: Vehicle) => {
    const finalFormData = {
      ...data,
      id: data.id || Math.random().toString(36).substr(2, 9),
      reservePrice: data.hasReserve ? data.reservePrice : null,
    };

    onSave(finalFormData);
    onClose();
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'info', label: 'Vehicle Information' },
    { id: 'photos', label: 'Photos' },
    { id: 'financial', label: 'Financial Information' },
    { id: 'status', label: 'Status & Process' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col gap-0 p-0'>
        <DialogHeader className='border-b px-6 py-4'>
          <DialogTitle className='text-xl font-semibold text-gray-900'>
            {vehicle ? 'Edit Vehicle' : 'Add Vehicle'}{' '}
            {vehicle?.lotId && `- Lot #${vehicle.lotId.padStart(3, '0')}`}
          </DialogTitle>
        </DialogHeader>

        <div className='border-gray-200'>
          <nav className='flex px-6'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mr-8 border-b-2 py-4 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className='flex-1 overflow-y-auto'
        >
          <div className='px-6 py-4'>
            {activeTab === 'info' && (
              <div className='space-y-8'>
                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Basic Information
                  </h3>
                  <div className='grid grid-cols-3 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Lot ID
                      </label>
                      <Input
                        {...register('lotId', {
                          required: 'Lot ID is required',
                          pattern: {
                            value: /^\d+$/,
                            message: 'Please enter a valid lot number',
                          },
                        })}
                      />
                      {errors.lotId && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.lotId.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        VIN
                      </label>
                      <Input
                        {...register('vin', {
                          required: 'VIN is required',
                        })}
                      />
                      {errors.vin && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.vin.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Year
                      </label>
                      <Input
                        type='number'
                        {...register('year', {
                          required: 'Year is required',
                          min: {
                            value: 1900,
                            message: 'Please enter a valid year',
                          },
                          max: {
                            value: new Date().getFullYear() + 1,
                            message: 'Please enter a valid year',
                          },
                        })}
                      />
                      {errors.year && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.year.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Make
                      </label>
                      <Input
                        {...register('make', {
                          required: 'Make is required',
                        })}
                      />
                      {errors.make && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.make.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Model
                      </label>
                      <Input
                        {...register('model', {
                          required: 'Model is required',
                        })}
                      />
                      {errors.model && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.model.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Color
                      </label>
                      <Input {...register('color')} />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Auction
                      </label>
                      <Select
                        value={watch('auction')}
                        onValueChange={(value) => setValue('auction', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select auction' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='AU25'>AU25</SelectItem>
                          <SelectItem value='EA25'>EA25</SelectItem>
                          <SelectItem value='AU24'>AU24</SelectItem>
                          <SelectItem value='EA24'>EA24</SelectItem>
                          <SelectItem value='Not Listed'>Not Listed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Condition
                  </h3>
                  <div className='grid grid-cols-2 gap-8'>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Exterior
                        </label>
                        <Textarea
                          {...register('condition.exterior')}
                          placeholder='Describe exterior condition...'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Interior
                        </label>
                        <Textarea
                          {...register('condition.interior')}
                          placeholder='Describe interior condition...'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Mechanical
                        </label>
                        <Textarea
                          {...register('condition.mechanical')}
                          placeholder='Describe mechanical condition...'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Overall
                        </label>
                        <Textarea
                          {...register('condition.overall')}
                          placeholder='Describe overall condition...'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Condition Notes
                      </label>
                      <Textarea
                        {...register('condition.notes')}
                        placeholder="Enter any additional notes about the vehicle's condition..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className='space-y-8'>
                <div>
                  <h3 className='mb-4 flex items-center text-lg font-medium text-gray-900'>
                    <Camera className='mr-2 h-5 w-5' />
                    Vehicle Photos
                  </h3>

                  <div className='grid grid-cols-2 gap-8'>
                    <div>
                      <h4 className='mb-2 text-sm font-medium text-gray-900'>
                        Consignor Photos
                      </h4>
                      <div className='rounded-lg border-2 border-dashed border-gray-300 p-6 text-center'>
                        <Upload className='mx-auto h-12 w-12 text-gray-400' />
                        <p className='mt-1 text-sm text-gray-500'>
                          Drag and drop photos here, or click to select files
                        </p>
                        <input
                          type='file'
                          multiple
                          accept='image/*'
                          className='hidden'
                          onChange={() => {}}
                        />
                        <button
                          type='button'
                          className='mt-4 inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                        >
                          Upload Photos
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className='mb-2 text-sm font-medium text-gray-900'>
                        Marketing Photos
                      </h4>
                      <div className='rounded-lg border-2 border-dashed border-gray-300 p-6 text-center'>
                        <Upload className='mx-auto h-12 w-12 text-gray-400' />
                        <p className='mt-1 text-sm text-gray-500'>
                          Drag and drop photos here, or click to select files
                        </p>
                        <input
                          type='file'
                          multiple
                          accept='image/*'
                          className='hidden'
                          onChange={() => {}}
                        />
                        <button
                          type='button'
                          className='mt-4 inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                        >
                          Upload Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financial' && (
              <div className='space-y-8'>
                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Financial Details
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Low Estimate
                      </label>
                      <Input
                        type='number'
                        {...register('estimateRange.low', {
                          required: 'Low estimate is required',
                          validate: (value) =>
                            value <= watch('estimateRange.high') ||
                            'Low estimate cannot be greater than high estimate',
                        })}
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        High Estimate
                      </label>
                      <Input
                        type='number'
                        {...register('estimateRange.high', {
                          required: 'High estimate is required',
                        })}
                      />
                    </div>
                  </div>
                  {errors.estimateRange?.low && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.estimateRange.low.message}
                    </p>
                  )}

                  <div className='mt-4 space-y-2'>
                    <div className='flex items-center justify-between'>
                      <label className='text-sm font-medium text-gray-700'>
                        Has Reserve
                      </label>
                      <div className='relative mr-2 inline-block w-10 select-none align-middle'>
                        <Checkbox id='hasReserve' {...register('hasReserve')} />
                      </div>
                    </div>

                    {watch('hasReserve') && (
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Reserve Price
                        </label>
                        <Input
                          type='number'
                          {...register('reservePrice', {
                            required: 'Reserve price is required',
                            min: {
                              value: 0,
                              message: 'Please enter a valid reserve price',
                            },
                          })}
                        />
                        {errors.reservePrice && (
                          <p className='mt-1 text-sm text-red-600'>
                            {errors.reservePrice.message}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Contacts
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Consignor
                      </label>
                      <Input
                        {...register('consignor', {
                          required: 'Consignor is required',
                        })}
                      />
                      {errors.consignor && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.consignor.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Company
                      </label>
                      <Input {...register('company')} />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Specialist
                      </label>
                      <Input {...register('specialist')} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'status' && (
              <div className='space-y-8'>
                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Status Information
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Status
                      </label>
                      <Select
                        value={watch('status')}
                        onValueChange={(value) => setValue('status', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select status' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Approved'>Approved</SelectItem>
                          <SelectItem value='Pending'>Pending</SelectItem>
                          <SelectItem value='Declined'>Declined</SelectItem>
                          <SelectItem value='Withdrawn'>Withdrawn</SelectItem>
                          <SelectItem value='Cancelled'>Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {watch('status') === 'Approved' && (
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Approved By
                        </label>
                        <Input
                          type='text'
                          value={watch('approvedBy') || ''}
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className='mb-4 text-lg font-medium text-gray-900'>
                    Process Status
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='title'
                        {...register('processStatus.title')}
                      />
                      <label
                        htmlFor='title'
                        className='text-sm font-medium leading-none'
                      >
                        Title Received
                      </label>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='payment'
                        {...register('processStatus.payment')}
                      />
                      <label
                        htmlFor='payment'
                        className='text-sm font-medium leading-none'
                      >
                        Payment Processed
                      </label>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='collection'
                        {...register('processStatus.collection')}
                      />
                      <label
                        htmlFor='collection'
                        className='text-sm font-medium leading-none'
                      >
                        Vehicle Collected
                      </label>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='transportation'
                        {...register('processStatus.transportation')}
                      />
                      <label
                        htmlFor='transportation'
                        className='text-sm font-medium leading-none'
                      >
                        Transportation Arranged
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='sticky bottom-0 border-t border-gray-200 bg-white px-6 py-4'>
            <div className='flex justify-end space-x-3'>
              <button
                type='button'
                onClick={onClose}
                className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              >
                {vehicle ? 'Save Changes' : 'Add Vehicle'}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
