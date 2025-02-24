'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect, useMemo, useState } from 'react';
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
import { FieldType, QuickFormProps } from './quick-form.types';
import { Plus, Trash2 } from 'lucide-react'; // Add this import
import { useMediaQuery } from '@/hooks/use-media-query';

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
      } else if (field.name) {
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

  const renderField = (field: FieldType) => {
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
      switch (field.type) {
        case 'tabs': {
          const isMobile = !useMediaQuery('(min-width: 768px)');
          const [tab, setTab] = useState(field.tabs[0]?.name);
          return wrapWithBeforeAfter(
            <Tabs
              value={tab}
              onValueChange={(value) => setTab(value)}
              className='w-full'
            >
              {field.tabs.length > 1 && (
                <>
                  {isMobile ? (
                    <Select
                      defaultValue={field.tabs[0]?.name}
                      onValueChange={(value) => {
                        setTab(value);
                      }}
                    >
                      <SelectTrigger className='mb-4 w-full'>
                        <SelectValue placeholder='Select tab' />
                      </SelectTrigger>
                      <SelectContent>
                        {field.tabs.map((tab) => (
                          <SelectItem key={tab.name} value={tab.name}>
                            {tab.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <TabsList className='w-full'>
                      {field.tabs.map((tab) => (
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
              {field.tabs.map((tab) => (
                <TabsContent key={tab.name} value={tab.name}>
                  <div className='space-y-4'>{renderFields(tab.fields)}</div>
                </TabsContent>
              ))}
            </Tabs>,
            field,
          );
        }
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
              {...form.register(field.name, {
                setValueAs: (value: string) => {
                  const parsed = parseFloat(value);
                  return isNaN(parsed) ? 0 : parsed;
                },
              })}
            />,
            field,
          );
        case 'select':
          if (field.allowCustom) {
            return wrapWithBeforeAfter(
              <Combobox
                value={watch[field.name]}
                setValue={(value) => {
                  form.setValue(field.name, value);
                  // form.trigger(field.name); // Add this
                }}
                content={field.options}
                allowCustom
              />,
              field,
            );
          }
          return wrapWithBeforeAfter(
            <Select
              onValueChange={(value) => {
                form.setValue(field.name, value);
                // form.trigger(field.name); // Add this
              }}
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
              onCheckedChange={(checked) => {
                form.setValue(field.name, checked);
                // form.trigger(field.name); // Add this
              }}
              checked={watch[field.name]}
            />,
            field,
          );
        case 'file':
          return wrapWithBeforeAfter(
            <Input
              type='file'
              accept={field.accept}
              multiple={field.multiple}
              onChange={(e) => {
                if (field.multiple) {
                  const files = Array.from(e.target.files || []);
                  form.setValue(field.name, files);
                  // form.trigger(field.name); // Add this
                } else {
                  const file = e.target.files?.[0];
                  if (file) {
                    form.setValue(field.name, file);
                    // form.trigger(field.name); // Add this
                  }
                }
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
        case 'array':
          const values = watch[field.name] || [];
          return wrapWithBeforeAfter(
            <div className='w-full space-y-4'>
              {values.map((_, index) => (
                <div key={index} className='flex w-full items-end gap-2'>
                  <div className='w-full'>
                    {/* @ts-ignore */}
                    {renderField({
                      ...field.field,
                      name: `${field.name}.${index}`,
                      label: `${field.label} ${index + 1}`,
                    })}
                  </div>
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 flex-shrink-0'
                    onClick={() => {
                      const newValues = [...values];
                      newValues.splice(index, 1);
                      form.setValue(field.name, newValues);
                      // form.trigger(field.name); // Add this
                    }}
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              ))}
              {(!field.max || values.length < field.max) && (
                <Button
                  type='button'
                  variant='outline'
                  className='w-full'
                  onClick={() => {
                    form.setValue(field.name, [...values, null]);
                    // form.trigger(field.name); // Add this
                  }}
                >
                  <Plus className='mr-2 h-4 w-4' />
                  Add {field.label}
                </Button>
              )}
            </div>,
            field,
          );
      }
    };

    // Common wrapper for all fields
    const content = fieldContent();
    if (!content) return null;

    return (
      <div
        key={field.name}
        className='flex flex-col gap-2'
        style={{
          gridColumn:
            field.type === 'tabs'
              ? 'span 1/-1'
              : field.cell
                ? `span ${field.cell}`
                : 'span 1',
        }}
      >
        {field.type !== 'title' && field.type !== 'tabs' && (
          <label className='text-xs font-medium'>
            {/* @ts-ignore */}
            {field.label}
            {/* @ts-ignore */}
            {field.type !== 'checkbox' && field.required && (
              <span className='pl-1 text-red-500'>*</span>
            )}
          </label>
        )}
        {content}
        {field.name && form.formState.errors[field.name] && (
          <p className='text-sm text-red-500'>
            {form.formState.errors[field.name]?.message as string}
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
            console.log('Form data:', data);
            onSubmit(data); // Use formData instead of data
          },
          (err) => {
            console.error('Form validation error:', err);
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
