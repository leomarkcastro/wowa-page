'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
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
import { cn } from '@/lib/utils';
import { Card, CardHeader } from './card';
import { CardFooter } from '../ui/card';
import { Combobox } from '../ui/combobox';
import { DeleteModal } from './delete-modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type BaseFieldProps = {
  before?: React.ReactNode | ((form: any) => React.ReactNode);
  after?: React.ReactNode | ((form: any) => React.ReactNode);
  row?: number;
  cell?: number;
};

export type FieldType =
  | ({
      type: 'tabs';
      name?: string;
      tabs: Array<{
        name: string;
        fields: FieldType[];
      }>;
    } & BaseFieldProps)
  | ({
      type: 'title';
      name?: string;
      label: string;
    } & BaseFieldProps)
  | ({
      type: 'divider';
      name?: string;
      label?: string;
    } & BaseFieldProps)
  | ({
      type: 'text';
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'number';
      name: string;
      label: string;
      min?: number;
      max?: number;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'select';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      readonly?: boolean;
      allowCustom?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'checkbox';
      name: string;
      label: string;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'multiselect';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'file';
      name: string;
      label: string;
      accept?: string;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'custom';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
      component: React.ReactNode | ((form: any) => React.ReactNode);
    } & BaseFieldProps)
  | ({
      type: 'date';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'time';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'datetime';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'textarea';
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      readonly?: boolean;
      rows?: number;
    } & BaseFieldProps)
  | ({
      type: 'display';
      name: string;
      label: string;
      component?: React.ReactNode | ((form: any) => React.ReactNode);
    } & BaseFieldProps);

export interface QuickFormProps {
  fields: FieldType[];
  onSubmit: (data: any) => void;
  onValueChange?: (form: any) => void;
  className?: string;
  gridCols?: number;
  onCancel?: () => void;
  onDelete?: () => void;
  title?: string;
  subtitle?: string;
  defaultValues?: Record<string, any>;
  hideActions?: boolean;
  hideSubmit?: boolean;
  hideDelete?: boolean;
  hideCancel?: boolean;
  onForm?: (form: any) => void;
  hideHeader?: boolean;
  hideActionsCard?: boolean;
}

export function QuickForm({
  fields,
  onSubmit,
  onValueChange,
  onForm,
  onCancel,
  onDelete,
  className,
  gridCols = 1,
  title,
  subtitle,
  defaultValues,
  hideActions = false,
  hideSubmit = false,
  hideDelete = false,
  hideCancel = false,
  hideHeader = false,
  hideActionsCard = false,
}: QuickFormProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Dynamically generate Zod schema based on fields
  const generateSchema = () => {
    const schema: Record<string, any> = {};

    fields.forEach((field) => {
      switch (field.type) {
        case 'text':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case 'number':
          let numberSchema = z.number();
          if (field.min !== undefined)
            numberSchema = numberSchema.min(field.min);
          if (field.max !== undefined)
            numberSchema = numberSchema.max(field.max);
          schema[field.name] = field.required
            ? numberSchema
            : numberSchema.optional();
          break;
        case 'select':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case 'checkbox':
          schema[field.name] = z.boolean().default(false);
          break;
        case 'multiselect':
          schema[field.name] = field.required
            ? z.array(z.string()).min(1)
            : z.array(z.string());
          break;
        case 'file':
          schema[field.name] = field.required
            ? z.instanceof(File)
            : z.instanceof(File).optional();
          break;
        case 'date':
        case 'time':
        case 'datetime':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case 'textarea':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
      }
    });

    return z.object(schema);
  };

  const form = useForm({
    resolver: zodResolver(generateSchema()),
    defaultValues: defaultValues,
  });

  // Add this effect
  useEffect(() => {
    onForm?.(form);
  }, [form, onForm]);

  const watch = form.watch();

  // Add effect to update form values when defaultValues change
  useEffect(() => {
    if (defaultValues) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        form.setValue(key, value);
      });
    }
  }, [defaultValues, form]);

  // Add this effect after the form declaration
  useEffect(() => {
    const subscription = form.watch((value) => {
      onValueChange?.(form);
    });
    return () => subscription.unsubscribe();
  }, []);

  const renderComponent = (
    component: React.ReactNode | ((form: any) => React.ReactNode),
  ) => {
    return typeof component === 'function' ? component(form) : component;
  };

  const wrapWithBeforeAfter = (input: React.ReactNode, field: FieldType) => {
    if (!field.before && !field.after) return input;

    return (
      <div className='flex items-center gap-2'>
        {field.before && (
          <div className='flex-shrink-0'>{renderComponent(field.before)}</div>
        )}
        <div className='flex-grow'>{input}</div>
        {field.after && (
          <div className='flex-shrink-0'>{renderComponent(field.after)}</div>
        )}
      </div>
    );
  };

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'tabs':
        return wrapWithBeforeAfter(
          <Tabs defaultValue={field.tabs[0]?.name} className='w-full'>
            <TabsList className='w-full'>
              {field.tabs.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name} className='flex-1'>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {field.tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <div className='space-y-4'>
                  {Object.entries(
                    tab.fields.reduce(
                      (acc: Record<number, FieldType[]>, field) => {
                        const row = field.row ?? 0;
                        if (!acc[row]) acc[row] = [];
                        acc[row].push(field);
                        return acc;
                      },
                      {},
                    ),
                  ).map(([row, rowFields]) => (
                    <div
                      key={row}
                      className={`grid grid-cols-${gridCols} gap-4`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                      }}
                    >
                      {rowFields.map((subField) => (
                        <div
                          key={subField.name}
                          className='flex flex-col gap-2'
                          style={{
                            gridColumn: subField.cell
                              ? `span ${subField.cell}`
                              : 'span 1',
                          }}
                        >
                          {subField.type !== 'title' && (
                            <label className='text-xs font-medium'>
                              {/* @ts-ignore */}
                              {subField.label}
                              {/* @ts-ignore */}
                              {subField.type !== 'checkbox' &&
                                // @ts-ignore
                                subField.required && (
                                  <span className='pl-1 text-red-500'>*</span>
                                )}
                            </label>
                          )}
                          {renderField(subField)}
                          {subField.name &&
                            form.formState.errors[subField.name] && (
                              <p className='text-sm text-red-500'>
                                {
                                  form.formState.errors[subField.name]
                                    ?.message as string
                                }
                              </p>
                            )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>,
          field,
        );
      case 'display':
        return wrapWithBeforeAfter(
          typeof field.component === 'function'
            ? field.component(form)
            : field.component || (
                <div className='rounded-md bg-slate-50 p-2'>
                  {form.getValues(field.name)}
                </div>
              ),
          field,
        );
      case 'title':
        return <h3 className='pt-4 text-lg font-semibold'>{field.label}</h3>;
      case 'divider':
        return <hr className='my-2 border-t border-gray-200' />;
      case 'text':
        return wrapWithBeforeAfter(
          <Input
            placeholder={field.placeholder}
            readOnly={field.readonly}
            {...form.register(field.name)}
          />,
          field,
        );
      case 'number':
        return wrapWithBeforeAfter(
          <Input
            type='number'
            readOnly={field.readonly}
            {...form.register(field.name, { valueAsNumber: true })}
          />,
          field,
        );
      case 'select':
        if (field.allowCustom) {
          return wrapWithBeforeAfter(
            <Combobox
              value={watch[field.name]}
              setValue={(value) => form.setValue(field.name, value)}
              content={field.options}
              allowCustom
            />,
            field,
          );
        }
        return wrapWithBeforeAfter(
          <Select
            onValueChange={(value) => form.setValue(field.name, value)}
            value={watch[field.name]}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select...' />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>,
          field,
        );
      case 'checkbox':
        return wrapWithBeforeAfter(
          <Checkbox
            onCheckedChange={(checked) => form.setValue(field.name, checked)}
            checked={watch[field.name]}
          />,
          field,
        );
      case 'file':
        return wrapWithBeforeAfter(
          <Input
            type='file'
            accept={field.accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) form.setValue(field.name, file);
            }}
          />,
          field,
        );
      case 'custom':
        return wrapWithBeforeAfter(
          typeof field.component === 'function'
            ? field.component(form)
            : field.component,
          field,
        );
      case 'date':
        return wrapWithBeforeAfter(
          <Input
            type='date'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />,
          field,
        );
      case 'time':
        return wrapWithBeforeAfter(
          <Input
            type='time'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />,
          field,
        );
      case 'datetime':
        return wrapWithBeforeAfter(
          <Input
            type='datetime-local'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />,
          field,
        );
      case 'textarea':
        return wrapWithBeforeAfter(
          <Textarea
            placeholder={field.placeholder}
            readOnly={field.readonly}
            rows={field.rows}
            {...form.register(field.name)}
          />,
          field,
        );
    }
  };

  // Group fields by row
  const groupedFields = fields.reduce(
    (acc: Record<number, FieldType[]>, field) => {
      const row = field.row ?? 0;
      if (!acc[row]) acc[row] = [];
      acc[row].push(field);
      return acc;
    },
    {},
  );

  return (
    <Form {...form}>
      <DeleteModal
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={() => {
          setShowDeleteModal(false);
          onDelete?.();
        }}
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid grid-cols-1 gap-2 lg:grid-cols-4')}
      >
        <div
          className={cn(
            'col-span-3 space-y-3 rounded-lg bg-slate-100 p-4',
            className,
            (hideActions || hideActionsCard) && 'lg:col-span-4',
          )}
        >
          {!hideHeader && (title || subtitle) && (
            <div className='mb-6 space-y-2'>
              {subtitle && (
                <p className='ml-1 text-xs text-muted-foreground'>{subtitle}</p>
              )}
              {title && <h2 className='text-2xl font-semibold'>{title}</h2>}
            </div>
          )}

          {Object.entries(groupedFields).map(([row, rowFields]) => (
            <div
              key={row}
              className={`grid grid-cols-${gridCols} gap-4`}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              }}
            >
              {rowFields.map((field) => (
                <div
                  key={field.name}
                  className='flex flex-col gap-2'
                  style={{
                    gridColumn: field.cell ? `span ${field.cell}` : 'span 1',
                  }}
                >
                  {field.type === 'title' ? (
                    ''
                  ) : (
                    <label className='text-xs font-medium'>
                      {/* @ts-ignore */}
                      {field.label}
                      {/* @ts-ignore */}
                      {field.type !== 'checkbox' && field.required && (
                        <span className='pl-1 text-red-500'>*</span>
                      )}
                    </label>
                  )}
                  {renderField(field)}
                  {form.formState.errors[field.name] && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        {!hideActions && !hideActionsCard && (
          <div className='flex justify-end gap-2'>
            <Card className='h-fit w-full'>
              <CardHeader title='Actions' action={false} />
              <CardFooter className='flex w-full flex-col gap-2'>
                {!hideSubmit && (
                  <Button className='w-full' type='submit'>
                    Submit
                  </Button>
                )}
                {onDelete && !hideDelete && (
                  <Button
                    className='w-full border-destructive'
                    type='button'
                    variant='outline'
                    onClick={() => setShowDeleteModal(true)}
                  >
                    Delete
                  </Button>
                )}
                {onCancel && !hideCancel && (
                  <Button
                    className='w-full'
                    type='button'
                    variant='outline'
                    onClick={onCancel}
                  >
                    Back
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        )}
      </form>
    </Form>
  );
}
