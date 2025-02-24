'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { FilesDataProvider } from '@/lib/dataProviders/files';
import { useSearchParams } from 'next/navigation';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import { Files_Upload } from '@/graphql/declarations/files';

export default function FilesAdd() {
  const searchParams = useSearchParams();
  const assignedTo = searchParams.get('assignedTo');

  const transformData = async (data) => {
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

    return {
      name: data.name,
      url: uploadURL.data.file_upload.files[0].url,
      mime: data.file.type,
      size: data.file.size.toString(),
      assignedTo: assignedTo,
      category: data.category,
      note: data.note,
    };
  };

  return (
    <ResourceForm
      mode='create'
      title='Upload File'
      subtitle='Upload a new file'
      dataProvider={FilesDataProvider}
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
          row: 3,
          cell: 2,
        },
        {
          type: 'file',
          name: 'file',
          label: 'File',
          required: true,
          row: 4,
          cell: 2,
        },
      ]}
    />
  );
}
