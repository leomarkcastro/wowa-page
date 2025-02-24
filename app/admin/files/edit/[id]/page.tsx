'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { FilesDataProvider } from '@/lib/dataProviders/files';
import { useSearchParams } from 'next/navigation';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import { Files_Upload } from '@/graphql/declarations/files';
import { formatBytes } from '@/lib/utils';

export default function FilesEdit() {
  const searchParams = useSearchParams();
  const assignedTo = searchParams.get('assignedTo');

  const transformData = async (data) => {
    let fileData = data.file ? data.file : data.url;
    let mime = data.file ? data.file.type : data.mime;
    let size = data.file ? data.file.size.toString() : data.size;

    if (fileData instanceof File) {
      const uploadURL = await apolloClient.mutate({
        mutation: Files_Upload,
        variables: {
          input: {
            files: [
              {
                filename: data.file.name,
                mimetype: data.file.type,
                b64: await new Promise<string>((resolve) => {
                  const reader = new FileReader();
                  reader.onload = () => resolve(reader.result as string);
                  reader.readAsDataURL(data.file);
                }),
              },
            ],
          },
        },
      });
      fileData = uploadURL.data.file_upload.files[0].url;
    }

    return {
      name: data.name,
      url: fileData,
      mime: mime,
      size: size,
      category: data.category,
      note: data.note,
    };
  };

  return (
    <ResourceForm
      mode='edit'
      title='Edit File'
      subtitle='Edit file details'
      dataProvider={FilesDataProvider}
      dontReturnOnSubmit
      // returnPath={`/admin/members/edit/${assignedTo}?tab=files`}
      transformSubmitData={transformData}
      fields={[
        {
          type: 'text',
          name: 'name',
          label: 'Filename',
          required: true,
          row: 1,
          cell: 2,
        },
        {
          type: 'select',
          name: 'category',
          label: 'Category',
          allowCustom: true,
          options: [
            { label: 'Application', value: 'Application' },
            { label: 'Certificates', value: 'Certificates' },
            { label: 'Letters', value: 'Letters' },
            { label: 'Others', value: 'Others' },
          ],
          row: 2,
          cell: 1,
        },
        {
          type: 'textarea',
          name: 'note',
          label: 'Note',
          row: 2,
          cell: 1,
        },
        {
          type: 'display',
          name: 'mime',
          label: 'MIME Type',
          row: 2,
          cell: 1,
        },
        {
          type: 'display',
          name: 'size',
          label: 'Size',
          row: 2,
          cell: 1,
          component: (props) => <p>{formatBytes(props.value)}</p>,
        },
        {
          type: 'display',
          name: 'url',
          label: 'File URL',
          row: 3,
          cell: 1,
          component: (props) => (
            <a
              href={props.value}
              target='_blank'
              rel='noreferrer'
              className='text-blue-600'
            >
              {props.value}
            </a>
          ),
        },
        {
          type: 'file',
          name: 'file',
          label: 'Replace File',
          row: 4,
          cell: 2,
        },
      ]}
    />
  );
}
