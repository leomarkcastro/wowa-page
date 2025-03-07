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

  useEffect(() => {
    setReadonly(readOnly);
  }, [readOnly]);

  const handleClose = () => {
    onClose();
  };

  const dataProvider = AuctionsDataProvider;

  const onSubmit = async () => {
    if (formRef) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

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
            </DialogTitle>
          </DialogHeader>

          <div className='h-full overflow-auto px-4'>
            <ResourceForm
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
                          type: 'text',
                          name: 'auctionID',
                          label: 'Auction ID',
                          required: true,
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'name',
                          label: 'Auction Name',
                          required: true,
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'summary',
                          label: 'Summary',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'textarea',
                          name: 'body',
                          label: 'Description',
                          row: 3,
                          cell: 2,
                        },
                        {
                          type: 'datetime',
                          name: 'eventDateStart',
                          label: 'Start Date',
                          required: true,
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'datetime',
                          name: 'eventDateEnd',
                          label: 'End Date',
                          required: true,
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'updateID',
                          label: 'Update ID',
                          readonly: true,
                          row: 5,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Location',
                      fields: [
                        {
                          type: 'text',
                          name: 'addressLine1',
                          label: 'Address Line 1',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'addressLine2',
                          label: 'Address Line 2',
                          row: 2,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'city',
                          label: 'City',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'state',
                          label: 'State/Province',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'zip',
                          label: 'ZIP/Postal Code',
                          row: 4,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'country',
                          label: 'Country',
                          row: 4,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Media & Tags',
                      fields: [
                        {
                          type: 'multiFileInput',
                          name: 'photos',
                          label: 'Upload Photos',
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
                            window.open(file.url, '_blank');
                          },
                          row: 3,
                          cell: 2,
                          size: 250,
                          aspectRatio: 16 / 9,
                        },
                        {
                          type: 'array',
                          name: 'tags',
                          label: 'Tags',
                          row: 4,
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
