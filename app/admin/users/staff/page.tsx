'use client';

import { DataTableTemplate } from '@/components/custom/data-table-template';
import { Button } from '@/components/ui/button';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { EyeIcon, PencilIcon } from 'lucide-react';
import { fMoment } from '@/lib/services/fMoment';
import {
  ACTORTYPE_ENUM,
  ConsignorEditModal,
} from '../(components)/ConsignorEditModal';

const ConsignorList = () => {
  return (
    <DataTableTemplate
      title='Staff'
      description='Staff Members and Possible Unregistered Accounts'
      initialFilters={{
        actorType: [
          {
            operator: 'nequals',
            value: ACTORTYPE_ENUM.Consignor,
          },
          {
            operator: 'nequals',
            value: ACTORTYPE_ENUM.Bidder,
          },
        ],
      }}
      dataProvider={MembersDataProvider}
      addNewLabel='Add New Account'
      EditModal={ConsignorEditModal}
      defaultValues={{
        actorType: ACTORTYPE_ENUM.CustomerSupport,
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
          label: 'ID',
          sortable: true,
          filterable: ['contains', 'equals'],
          renderCell(value) {
            return <p className='font-mono'>{value.slice(-7).toUpperCase()}</p>;
          },
        },
        {
          key: 'name',
          label: 'Name',
          sortable: true,
          filterable: ['contains', 'equals'],
          renderCell(value, allValue) {
            return [value, allValue.lastName].join(' ');
          },
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'actorType',
          label: 'User Type',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'lastLogin',
          label: 'Last Login',
          sortable: true,
          renderCell(value) {
            return value ? fMoment(value).format('MMM DD, YYYY hh:mm A') : '-';
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
              </div>
            );
          },
        },
      ]}
    />
  );
};

export default ConsignorList;
