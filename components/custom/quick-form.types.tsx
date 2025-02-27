export type BaseFieldProps = {
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
        name?: string;
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
      type: 'asyncSelect';
      name: string;
      label: string;
      fetch: (query: string) => Promise<{ label: string; value: string }[]>;
      required?: boolean;
      readonly?: boolean;
      debounce?: number;
      addNewItemAction?: (inputValue: string) => void;
    } & BaseFieldProps)
  | ({
      type: 'checkbox';
      name: string;
      label: string;
      readonly?: boolean;
      yesText?: string;
      noText?: string;
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
      multiple?: boolean;
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
    } & BaseFieldProps)
  | ({
      type: 'fileGallery';
      name: string;
      label: string;
      pageSize?: number;
      size?: 'sm' | 'md' | 'lg' | number;
      aspectRatio?: number;
      onFileClick?: (file: {
        id: string;
        filename: string;
        url: string;
      }) => void;
      onDelete?: (file: { id: string; filename: string; url: string }) => void;
      required?: boolean;
    } & BaseFieldProps)
  | ({
      type: 'multiFileInput';
      name: string;
      label: string;
      maxFiles?: number;
      allowedTypes?: string[];
      showExistingFiles?: boolean;
      required?: boolean;
      trigger?: React.ReactNode;
    } & BaseFieldProps)
  | ({
      type: 'array';
      name: string;
      label: string;
      field: Omit<FieldType, 'name'>; // The field template to repeat
      min?: number;
      max?: number;
      required?: boolean;
    } & BaseFieldProps);

export interface QuickFormProps {
  fields: FieldType[];
  onSubmit: (data: any) => void;
  onError?: (err: any) => void;
  onValueChange?: (form: any) => void;
  className?: string;
  gridCols?: number;
  onCancel?: () => void;
  onDelete?: () => void;
  title?: string;
  subtitle?: string;
  defaultValues?: Record<string, any>;
  hideSubmit?: boolean;
  hideDelete?: boolean;
  hideCancel?: boolean;
  onForm?: (form: any) => void;
  hideHeader?: boolean;
  hideActionsCard?: boolean;
  formRef?: any;
  readonly?: boolean; // Add this line
  onDynamicField?: (
    fields: FieldType[],
    values: Record<string, any>,
  ) => Array<{ id: string; toHide: boolean }>;
}
