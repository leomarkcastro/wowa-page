'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createProvider } from '@/lib/services/createProvider';
import { UseFormReturn } from 'react-hook-form';
import { QuickFormProps } from './quick-form.types';

interface ResourceFormProps<T = any> extends Partial<QuickFormProps> {
  mode: 'create' | 'edit';
  title: string;
  subtitle: string;
  dataProvider: any;
  fields: any[];
  returnPath?: string;
  dontReturnOnSubmit?: boolean;
  transformSubmitData?: (data: any) => Promise<any> | any;
  preprocessData?: (data: any) => any;
  defaultValues?: any;
  gridCols?: number;
  onCancel?: () => void;
  onValueChange?: (form: UseFormReturn<T>) => void;
  onForm?: (form: UseFormReturn<T>) => void; // Add this line
  formRef?: any;
  onAfterSubmit?: (data: any) => void;
  getIDon?: any;
}

export function ResourceForm({
  mode,
  title,
  subtitle,
  dataProvider,
  fields,
  returnPath,
  transformSubmitData,
  preprocessData,
  defaultValues = {},
  gridCols = 2,
  onCancel,
  dontReturnOnSubmit,
  onValueChange,
  onForm, // Add this line
  onAfterSubmit,
  getIDon,
  ...resourceFormProps
}: ResourceFormProps) {
  const router = useRouter();
  const param = useParams();
  const id = getIDon ? getIDon() : param.id;
  const { toast } = useToast();

  const dataHookProvider = createProvider({
    name: dataProvider.name,
    dataProvider: dataProvider,
  });

  const [data, setData] = useState(defaultValues);
  const useCreate = dataHookProvider.useCreate();
  const useUpdate = dataHookProvider.useUpdate();
  const useDelete = dataHookProvider.useDelete();
  const { data: lData, isLoading: loading } =
    mode === 'edit'
      ? dataHookProvider.useOne(id)
      : { data: null, isLoading: false };

  useEffect(() => {
    if ((mode === 'edit' && !id) || !lData) return;
    if (lData) {
      let data = JSON.parse(JSON.stringify(lData.data));
      if (preprocessData) {
        data = preprocessData(data);
      }
      // convert all null fields to undefined
      for (const key in data) {
        if (data[key] === null) {
          data[key] = undefined;
        }
      }
      setData(data);
    }
  }, [lData, loading, mode, id, preprocessData]);

  async function submitData(formData: any) {
    // const r = true;

    // if (r) return;

    const processedData = transformSubmitData
      ? await transformSubmitData(formData)
      : formData;

    if (mode === 'edit') {
      await useUpdate.mutateAsync({
        id: id as string,
        variables: processedData,
        meta: {},
        resource: dataProvider.name.toLowerCase(),
      });

      toast({
        title: 'Updated Successfully',
        description: `${title} has been updated successfully`,
      });
    } else {
      await useCreate.mutateAsync({
        variables: processedData,
        meta: {},
        resource: dataProvider.name.toLowerCase(),
      });

      toast({
        title: 'Created Successfully',
        description: `${title} has been created successfully`,
      });
    }

    if (dontReturnOnSubmit) {
      if (onAfterSubmit) {
        onAfterSubmit(processedData);
      }
      return;
    }

    if (returnPath) {
      router.push(returnPath);
    } else {
      window.history.back();
    }
  }

  async function deleteData() {
    if (!id) return;
    await useDelete.mutateAsync({
      id: id as string,
    });

    toast({
      title: 'Deleted Successfully',
      description: `${title} has been deleted successfully`,
    });

    if (returnPath) {
      router.push(returnPath);
    } else {
      window.history.back();
    }
  }

  if (mode === 'edit' && loading)
    return <div className='p-4 text-center'>Loading...</div>;

  return (
    <QuickForm
      {...resourceFormProps}
      gridCols={gridCols}
      onCancel={onCancel || (() => window.history.back())}
      onSubmit={submitData}
      onDelete={mode === 'edit' ? deleteData : undefined}
      title={title}
      subtitle={subtitle}
      fields={fields}
      defaultValues={data}
      onValueChange={onValueChange}
      onForm={onForm} // Add this line
    />
  );
}
