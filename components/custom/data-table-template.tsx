'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { ColumnsDataTable, DataProviderTable } from './quick-table';
import { PlusIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { DataProvider } from '@/lib/services/dataProvider';
import { createProvider } from '@/lib/services/createProvider';

interface DataTableTemplateProps {
  title: string;
  description?: string;
  tabs?: Array<{ value: string; label: string }>;
  defaultTab?: string;
  onTabChange?: (value: string) => void;
  filterSection?: ReactNode;
  tableColumns: (args: {
    setIsEditing: (value: boolean) => void;
    setItemID: (value: string | null) => void;
    setReadOnly: (value: boolean) => void;
    setShowDeleteConfirm: (value: boolean) => void;
    setDeleteItemId: (value: string | null) => void;
  }) => ColumnsDataTable[];
  dataProvider: DataProvider;
  addNewLabel?: string;
  EditModal: React.ComponentType<{
    isOpen: boolean;
    onClose: () => void;
    itemID: string | null;
    readOnly: boolean;
  }>;
  initialFilters?: Record<string, any>;
}

export function DataTableTemplate({
  title,
  description,
  tabs,
  defaultTab = 'active',
  onTabChange,
  filterSection,
  tableColumns,
  dataProvider,
  addNewLabel = 'Add New',
  EditModal,
  initialFilters,
}: DataTableTemplateProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemID, setItemID] = useState<string | null>(null);
  const [readOnly, setReadOnly] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  const dataHookProvider = createProvider({
    name: dataProvider.name,
    dataProvider: dataProvider,
  });

  const useDelete = dataHookProvider.useDelete();

  const handleDelete = async (id: string) => {
    await useDelete.mutateAsync({
      id: id,
      meta: {},
      resource: dataProvider.name.toLowerCase(),
    });
    toast({
      title: 'Deleted Successfully',
      description: `Item has been deleted successfully`,
    });
    setShowDeleteConfirm(false);
    setDeleteItemId(null);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-primary'>{title}</h1>
          {description && (
            <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
          )}
        </div>

        <Button
          onClick={() => {
            setIsEditing(true);
            setItemID(null);
            setReadOnly(false);
          }}
        >
          <PlusIcon />
          {addNewLabel}
        </Button>
      </div>

      {tabs && (
        <Tabs
          defaultValue={defaultTab}
          className='mb-6 bg-white'
          onValueChange={onTabChange}
        >
          <TabsList className={`grid w-[400px] grid-cols-${tabs.length}`}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {filterSection && (
        <div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {filterSection}
        </div>
      )}

      <EditModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        itemID={itemID}
        readOnly={readOnly}
      />

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              item from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
              onClick={() => deleteItemId && handleDelete(deleteItemId)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DataProviderTable
        name={dataProvider.name}
        enableUrlPersistence={true}
        columns={tableColumns({
          setIsEditing,
          setItemID,
          setReadOnly,
          setShowDeleteConfirm,
          setDeleteItemId,
        })}
        initialFilters={initialFilters}
        passFilters
        dataSource={dataProvider}
      />
    </div>
  );
}
