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
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { useSearchParams } from 'next/navigation';

interface ConsignorEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemID?: string;
  readOnly?: boolean;
}

export function ConsignorEditModal({
  itemID,
  isOpen,
  onClose,
  readOnly,
}: ConsignorEditModalProps) {
  const sp = useSearchParams();
  const [form, setForm] = useState<UseFormReturn<any>>();
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [readonly, setReadonly] = useState(readOnly);

  useEffect(() => {
    setReadonly(readOnly);
  }, [readOnly]);

  const onSubmit = async () => {
    if (formRef) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  const handleClose = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    url.searchParams.delete('readonly');
    window.history.pushState({}, '', url.toString());
    onClose();
  };

  if (itemID) {
    const url = new URL(window.location.href);
    url.searchParams.set('id', itemID);
    url.searchParams.set('readonly', readonly.toString());
    window.history.pushState({}, '', url.toString());
  }

  return (
    <>
      {isOpen && <div className='fixed inset-0 z-50 bg-black bg-opacity-50' />}
      <Dialog
        modal={false}
        open={isOpen}
        onOpenChange={(open) => !open && handleClose()}
      >
        <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col gap-0 p-0'>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-accent/50 bg-opacity-90 text-accent-foreground'>
              <div className='flex items-center gap-4'>
                <div className='h-3 w-3 animate-spin bg-gray-700' />
                <p className='text-lg font-semibold text-primary'>Saving...</p>
              </div>
            </div>
          )}
          <DialogHeader className='border-b p-2'>
            <DialogTitle className='p-2 px-4 text-xl font-semibold text-primary'>
              {readonly
                ? 'View Consignor'
                : itemID
                  ? 'Edit Consignor'
                  : 'Add Consignor'}
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
                  ? 'View Consignor'
                  : itemID
                    ? 'Edit Consignor'
                    : 'Add Consignor'
              }
              subtitle='Consignor Information'
              dataProvider={MembersDataProvider}
              hideActionsCard={true}
              hideHeader={true}
              readonly={readonly}
              dontReturnOnSubmit={itemID ? true : false}
              onForm={(form) => setForm(form)}
              formRef={formRef}
              transformSubmitData={(data) => {
                setLoading(true);
                setErrMessage('');
                data.actorType = 'consignor';
                return data;
              }}
              onAfterSubmit={() => {
                setLoading(false);
                return (!itemID ? handleClose : () => {})();
              }}
              onError={(err) => {
                setLoading(false);
                let errMessage = Object.keys(err).map((errKey) => {
                  return `${errKey}: ${err?.[errKey]?.message || err?.[errKey]?.root?.message || 'Please check this field'}`;
                });
                setErrMessage(errMessage.join('. '));
              }}
              getIDon={() => {
                return sp.get('id');
              }}
              fields={[
                {
                  type: 'tabs',
                  tabs: [
                    {
                      name: 'Personal Information',
                      fields: [
                        {
                          type: 'text',
                          name: 'prefix',
                          label: 'Prefix',
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'name',
                          label: 'First Name',
                          required: true,
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'middleName',
                          label: 'Middle Name',
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'lastName',
                          label: 'Last Name',
                          required: true,
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'suffix',
                          label: 'Suffix',
                          row: 3,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Contact Information',
                      fields: [
                        {
                          type: 'text',
                          name: 'email',
                          label: 'Email',
                          required: true,
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'secondaryEmail',
                          label: 'Secondary Email',
                          row: 1,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'mobileNumber',
                          label: 'Mobile Number',
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'homeNumber',
                          label: 'Home Number',
                          row: 2,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'faxNumber',
                          label: 'Fax Number',
                          row: 3,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Address',
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
                          label: 'State',
                          row: 3,
                          cell: 1,
                        },
                        {
                          type: 'text',
                          name: 'postalCode',
                          label: 'Postal Code',
                          row: 4,
                          cell: 1,
                        },
                      ],
                    },
                    {
                      name: 'Company Information',
                      fields: [
                        {
                          type: 'text',
                          name: 'company',
                          label: 'Company Name',
                          row: 1,
                          cell: 2,
                        },
                        {
                          type: 'text',
                          name: 'companyContact',
                          label: 'Company Contact',
                          row: 2,
                          cell: 2,
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
