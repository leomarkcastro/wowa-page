'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { FieldType, QuickFormProps } from './quick-form.types';
import { Plus, Trash2 } from 'lucide-react'; // Add this import
import { useMediaQuery } from '@/hooks/use-media-query';
import { AsyncSelect } from '../ui/async-select';
import { FileItem, MultiFileInput } from '../ui/MultiFileInput';
import { FileGallery } from '../FileGallery';
import { Toggle } from '../ui/toggle';

const generateFieldSchema = (field?: FieldType): z.ZodTypeAny => {
  if (!field || !field.type) return z.any();

  let schema: z.ZodTypeAny;

  switch (field.type) {
    case 'select':
    case 'text':
    case 'textarea':
    case 'date':
    case 'time':
    case 'datetime':
      schema = z.string();
      // set minimum length to 1 if required
      // @ts-ignore
      if (field.required) schema = schema.min(1);
      break;
    case 'number':
      schema = z.coerce
        .number()
        .default(0)
        .transform((val) => (isNaN(val) ? 0 : val));
      // @ts-ignore
      if (field.min !== undefined) schema = schema.min(field.min);
      // @ts-ignore
      if (field.max !== undefined) schema = schema.max(field.max);
      break;
    case 'checkbox':
      schema = z.boolean().default(false);
      break;
    case 'multiselect':
      schema = z.array(z.string());
      break;
    case 'file':
      schema = field.multiple
        ? z.array(z.instanceof(File))
        : z.instanceof(File);
      break;
    case 'array':
      // Handle arrays of objects or primitive types
      // @ts-ignore
      if (field.field?.type === 'object') {
        const objectSchema: Record<string, z.ZodTypeAny> = {};
        // @ts-ignore
        field.field.fields?.forEach((f) => {
          if (f.name) {
            objectSchema[f.name] = generateFieldSchema(f);
          }
        });
        schema = z.array(z.object(objectSchema));
      } else {
        // @ts-ignore
        schema = z.array(generateFieldSchema(field.field));
      }
      // @ts-ignore
      if (field.min) schema = schema.min(field.min);
      // @ts-ignore
      if (field.max) schema = schema.max(field.max);
      // if the array is required, make it non-optional
      // @ts-ignore
      schema = field.required ? schema : schema.optional();
      break;
    default:
      schema = z.any();
  }

  // Handle required/optional for all types except checkbox and array
  if (field.type !== 'checkbox' && field.type !== 'array') {
    // @ts-ignore
    schema = field.required ? schema : schema.optional();
  }

  return schema;
};

const generateSchema = (args: { fields: FieldType[] }) => {
  const schema: Record<string, z.ZodTypeAny> = {};

  const processFields = (fields: FieldType[]) => {
    fields.forEach((field) => {
      if (field.type === 'tabs') {
        field.tabs.forEach((tab) => {
          processFields(tab.fields);
        });
      } else if (
        field.name &&
        !['title', 'divider', 'tabs', 'display', 'fileGallery'].includes(
          field.type,
        )
      ) {
        schema[field.name] = generateFieldSchema(field);
      }
    });
  };

  processFields(args.fields);
  const o = z.object(schema);
  return o;
};

export function QuickForm({
  fields,
  onSubmit,
  onError,
  onValueChange,
  onForm,
  onCancel,
  onDelete,
  className,
  gridCols = 1,
  title,
  subtitle,
  defaultValues,
  hideSubmit = false,
  hideDelete = false,
  hideCancel = false,
  hideHeader = false,
  hideActionsCard = false,
  formRef,
  readonly = false, // Add this line
  onDynamicField, // Add this line
}: QuickFormProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fieldsSchema = useMemo(() => {
    const f = generateSchema({
      fields,
    });
    return f;
  }, [fields]);

  const form = useForm({
    resolver: zodResolver(fieldsSchema),
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
        // form.trigger(key);
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

  const dynamicFields = useMemo(() => {
    return onDynamicField?.(fields, watch) || [];
  }, [fields, watch]);

  const renderField = (field: FieldType) => {
    // Get dynamic visibility rules
    const shouldHide = dynamicFields.find((df) => df.id === field.name)?.toHide;

    // If field should be hidden, return null
    if (shouldHide) return null;

    // Add this function to transform fields
    const transformFieldIfReadonly = (field: FieldType): FieldType => {
      if (!readonly) return field;

      // Don't transform these field types
      if (
        [
          'display',
          'array',
          'tabs',
          'title',
          'divider',
          'fileGallery',
        ].includes(field.type)
      ) {
        return field;
      }

      // Transform input fields to display type
      return {
        type: 'display',
        name: field.name,
        // @ts-ignore
        label: field.label || '',
        component: (form: any) => {
          const value = form.getValues(field.name);
          if (field.type === 'select' || field.type === 'multiselect') {
            const options = field.options;
            if (Array.isArray(value)) {
              return options
                .filter((opt) => value.includes(opt.value))
                .map((opt) => opt.label)
                .join(', ');
            }
            return (
              options.find((opt) => opt.value === value)?.label || value || '--'
            );
          }
          if (field.type === 'asyncSelect') {
            const [val, setVal] = useState(value);
            const [loading, setLoading] = useState(false);
            useEffect(() => {
              (async function fetchOptions() {
                if (!value) return;
                setLoading(true);
                const options = await field.fetch(value);
                console.log(value, options);
                setVal(
                  options.find((opt) => opt.value === value)?.label || value,
                );
                setLoading(false);
              })();
            }, [value]);
            return loading ? 'Loading...' : val || '--';
          }
          if (field.type === 'checkbox') {
            return value ? 'Yes' : 'No';
          }
          if (field.type === 'multiFileInput') {
            // NOTE that I assume you would rely on the FileGallery component to display files
            return '';
          }
          return value || '--';
        },
      };
    };

    const transformedField = transformFieldIfReadonly(field);

    // Continue with existing renderField logic using transformedField
    const renderFields = (fields: FieldType[]) => {
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

      return Object.entries(groupedFields).map(([row, rowFields]) => (
        <div
          key={row}
          className='grid h-full gap-4'
          style={{
            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
          }}
        >
          {rowFields.map((subField) => renderField(subField))}
        </div>
      ));
    };

    const fieldContent = () => {
      switch (transformedField.type) {
        case 'tabs': {
          const isMobile = !useMediaQuery('(min-width: 768px)');
          const [tab, setTab] = useState(transformedField.tabs[0]?.name);
          return wrapWithBeforeAfter(
            <Tabs
              value={tab}
              onValueChange={(value) => setTab(value)}
              className='w-full'
            >
              {transformedField.tabs.length > 1 && (
                <>
                  {isMobile ? (
                    <Select
                      defaultValue={transformedField.tabs[0]?.name}
                      onValueChange={(value) => {
                        setTab(value);
                      }}
                    >
                      <SelectTrigger className='mb-4 w-full'>
                        <SelectValue placeholder='Select tab' />
                      </SelectTrigger>
                      <SelectContent>
                        {transformedField.tabs.map((tab) => (
                          <SelectItem key={tab.name} value={tab.name}>
                            {tab.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <TabsList className='w-full'>
                      {transformedField.tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.name}
                          value={tab.name}
                          className='flex-1'
                        >
                          {tab.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  )}
                </>
              )}
              {transformedField.tabs.map((tab) => (
                <TabsContent key={tab.name} value={tab.name}>
                  <div className='space-y-4'>{renderFields(tab.fields)}</div>
                </TabsContent>
              ))}
            </Tabs>,
            transformedField,
          );
        }
        case 'display':
          return wrapWithBeforeAfter(
            typeof transformedField.component === 'function'
              ? transformedField.component(form)
              : transformedField.component || (
                  <div className='rounded-md bg-slate-50 p-2'>
                    {form.getValues(transformedField.name)}
                  </div>
                ),
            transformedField,
          );
        case 'title':
          return (
            <h3 className='pt-4 text-lg font-semibold'>
              {transformedField.label}
            </h3>
          );
        case 'divider':
          return <hr className='my-2 border-t border-gray-200' />;
        case 'text':
          return wrapWithBeforeAfter(
            <Input
              placeholder={transformedField.placeholder}
              readOnly={transformedField.readonly}
              {...form.register(transformedField.name)}
            />,
            transformedField,
          );
        case 'number':
          return wrapWithBeforeAfter(
            <Input
              type='number'
              readOnly={transformedField.readonly}
              {...form.register(transformedField.name, {
                setValueAs: (value: string) => {
                  const parsed = parseFloat(value);
                  return isNaN(parsed) ? 0 : parsed;
                },
              })}
            />,
            transformedField,
          );
        case 'select':
          if (transformedField.allowCustom) {
            return wrapWithBeforeAfter(
              <Combobox
                value={watch[transformedField.name]}
                setValue={(value) => {
                  form.setValue(transformedField.name, value);
                  // form.trigger(field.name); // Add this
                }}
                content={transformedField.options}
                allowCustom
              />,
              transformedField,
            );
          }
          return wrapWithBeforeAfter(
            <Select
              onValueChange={(value) => {
                form.setValue(transformedField.name, value);
                // form.trigger(field.name); // Add this
              }}
              value={watch[transformedField.name]}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select...' />
              </SelectTrigger>
              <SelectContent>
                {transformedField.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>,
            transformedField,
          );
        case 'checkbox':
          return wrapWithBeforeAfter(
            <Toggle
              pressed={watch[transformedField.name]}
              onPressedChange={(e) => {
                form.setValue(transformedField.name, e);
              }}
              className={cn(
                watch[transformedField.name]
                  ? '!bg-green-500 font-bold !text-white'
                  : 'bg-gray-100',
              )}
            >
              {watch[transformedField.name]
                ? transformedField.yesText || 'Yes'
                : transformedField.noText || 'No'}
            </Toggle>,
            transformedField,
          );
        case 'file':
          return wrapWithBeforeAfter(
            <Input
              type='file'
              accept={transformedField.accept}
              multiple={transformedField.multiple}
              onChange={(e) => {
                if (transformedField.multiple) {
                  const files = Array.from(e.target.files || []);
                  form.setValue(transformedField.name, files);
                  // form.trigger(field.name); // Add this
                } else {
                  const file = e.target.files?.[0];
                  if (file) {
                    form.setValue(transformedField.name, file);
                    // form.trigger(field.name); // Add this
                  }
                }
              }}
            />,
            transformedField,
          );
        case 'custom':
          return wrapWithBeforeAfter(
            typeof transformedField.component === 'function'
              ? transformedField.component(form)
              : transformedField.component,
            transformedField,
          );
        case 'date':
          return wrapWithBeforeAfter(
            <Input
              type='date'
              readOnly={transformedField.readonly}
              {...form.register(transformedField.name)}
            />,
            transformedField,
          );
        case 'time':
          return wrapWithBeforeAfter(
            <Input
              type='time'
              readOnly={transformedField.readonly}
              {...form.register(transformedField.name)}
            />,
            transformedField,
          );
        case 'datetime':
          return wrapWithBeforeAfter(
            <Input
              type='datetime-local'
              readOnly={transformedField.readonly}
              {...form.register(transformedField.name)}
            />,
            transformedField,
          );
        case 'textarea':
          return wrapWithBeforeAfter(
            <Textarea
              placeholder={transformedField.placeholder}
              readOnly={transformedField.readonly}
              rows={transformedField.rows}
              {...form.register(transformedField.name)}
            />,
            transformedField,
          );
        case 'array':
          const values = watch[transformedField.name] || [];
          return wrapWithBeforeAfter(
            <div className='w-full space-y-4'>
              {values.map((_, index) => (
                <div key={index} className='flex w-full items-end gap-2 pl-4'>
                  <div className='w-full'>
                    {/* @ts-ignore */}
                    {renderField({
                      ...transformedField.field,
                      name: `${transformedField.name}.${index}`,
                      label: `${transformedField.label} - Item ${index + 1}`,
                    })}
                  </div>
                  {!readonly && (
                    <Button
                      type='button'
                      variant='outline'
                      size='icon'
                      className='h-10 w-10 flex-shrink-0'
                      onClick={() => {
                        const newValues = [...values];
                        newValues.splice(index, 1);
                        form.setValue(transformedField.name, newValues);
                        // form.trigger(field.name); // Add this
                      }}
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  )}
                </div>
              ))}
              {((!readonly && !transformedField.max) ||
                values.length < transformedField.max) && (
                <Button
                  type='button'
                  variant='outline'
                  className='w-full'
                  onClick={() => {
                    form.setValue(transformedField.name, [...values, null]);
                    // form.trigger(field.name); // Add this
                  }}
                >
                  <Plus className='mr-2 h-4 w-4' />
                  Add {transformedField.label}
                </Button>
              )}
            </div>,
            transformedField,
          );
        case 'asyncSelect':
          return wrapWithBeforeAfter(
            <AsyncSelect
              value={watch[transformedField.name]}
              onChange={(value) => {
                form.setValue(transformedField.name, value);
                form.trigger(transformedField.name);
              }}
              fetch={transformedField.fetch}
              debounce={transformedField.debounce}
              disabled={transformedField.readonly}
              addNewItemAction={transformedField.addNewItemAction}
            />,
            transformedField,
          );
        case 'multiFileInput':
          return wrapWithBeforeAfter(
            <MultiFileInput
              initialFiles={watch[field.name] || []}
              onUploadComplete={(files) => {
                form.setValue(field.name, files);
                form.trigger(field.name);
              }}
              // @ts-ignore
              maxFiles={field.maxFiles}
              // @ts-ignore
              allowedTypes={field.allowedTypes}
              // @ts-ignore
              showExistingFiles={field.showExistingFiles}
              // @ts-ignore
              trigger={field.trigger}
            />,
            field,
          );
        case 'fileGallery':
          return wrapWithBeforeAfter(
            <FileGallery
              files={(watch[field.name] || []).map((f: FileItem) => ({
                ...f,
                filename: f.name || f.name,
                url: `http://localhost:3000/api/files/name/${f.name || f.name}`,
              }))}
              // @ts-ignore
              pageSize={field.pageSize}
              // @ts-ignore
              size={field.size}
              // @ts-ignore
              aspectRatio={field.aspectRatio}
              // @ts-ignore
              onFileClick={field.onFileClick}
              onDelete={
                // @ts-ignore
                field.onDelete
                  ? (file) => {
                      const files = watch[field.name] || [];
                      form.setValue(
                        field.name,
                        files.filter((f: any) => f.id !== file.id),
                      );
                      form.trigger(field.name);
                      // @ts-ignore
                      field.onDelete?.(file);
                    }
                  : undefined
              }
            />,
            field,
          );
      }
    };

    // Common wrapper for all fields
    const content = fieldContent();
    if (!content) return null;

    return (
      <div
        key={transformedField.name}
        className='flex flex-col gap-2'
        style={{
          gridColumn:
            transformedField.type === 'tabs'
              ? 'span 1/-1'
              : transformedField.cell
                ? `span ${transformedField.cell}`
                : 'span 1',
        }}
      >
        {transformedField.type !== 'title' &&
          transformedField.type !== 'tabs' && (
            <label className='text-xs font-medium'>
              {/* @ts-ignore */}
              {transformedField.label}
              {/* @ts-ignore */}
              {transformedField.type !== 'checkbox' &&
                // @ts-ignore
                transformedField.required && (
                  <span className='pl-1 text-red-500'>*</span>
                )}
            </label>
          )}
        {content}
        {transformedField.name &&
          form.formState.errors[transformedField.name] && (
            <p className='text-sm text-red-500'>
              {form.formState.errors[transformedField.name]?.message as string}
            </p>
          )}
      </div>
    );
  };

  // Update the form content rendering part
  const formContent = () => {
    if (fields.length === 1) {
      return renderField(fields[0]);
    } else {
      // Wrap multiple fields in an unnamed tab
      const wrappedFields: FieldType = {
        type: 'tabs',
        tabs: [
          {
            fields: fields,
          },
        ],
        name: 'wrapper',
      };
      return renderField(wrappedFields);
    }
  };

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
        onSubmit={form.handleSubmit(
          (data) => {
            // const formData = form.getValues(); // Get all form values
            // console.log('Raw form data:', formData);
            // // validate schema
            // const result = fieldsSchema.safeParse(formData);
            // if (!result.success) {
            //   console.error('Validation error:', result.error);
            //   return;
            // } else {
            //   console.log('Validated form data:', result.data);
            // }
            // console.log('zod form', fieldsSchema.shape);
            // console.log('Form data:', data);
            onSubmit(data); // Use formData instead of data
          },
          (err) => {
            console.error('Form validation error:', err);
            onError?.(err);
          },
        )}
        className={cn('grid grid-cols-1 gap-2 lg:grid-cols-4')}
        ref={formRef}
      >
        <div
          className={cn(
            'col-span-3 space-y-3 overflow-y-auto rounded-lg p-4',
            className,
            hideActionsCard && 'lg:col-span-4',
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
          {formContent()}
        </div>
        {!hideActionsCard && (
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
