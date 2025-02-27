'use client';

import { FileGallery } from '@/components/FileGallery';
import { MultiFileInput } from '@/components/ui/MultiFileInput';
import { useState } from 'react';

export default function Page() {
  const [fileList, setFileList] = useState<
    {
      name: string;
      id: string;
    }[]
  >([
    {
      name: 'faviconforapp1-cy1eiqd5p0.zip',
      id: 'cm7n5f3sg0002o9x5t623kuw4',
    },
  ]);
  return (
    <div>
      <h2>Upload Files</h2>
      <br />
      <FileGallery
        files={fileList.map((file) => ({
          id: file.id,
          filename: file.name,
          url: `http://localhost:3000/api/files/name/${file.name}`,
        }))}
        onFileClick={(file) => {
          // open file in new tab
          window.open(file.url, '_blank');
        }}
        aspectRatio={16 / 9}
        size={300}
        onDelete={(file) => {
          setFileList((prev) => prev.filter((f) => f.id !== file.id));
        }}
      />
      <br />
      <MultiFileInput
        initialFiles={fileList}
        maxFiles={5}
        showExistingFiles={false}
        allowedTypes={['image/*', 'application/pdf']}
        onUploadComplete={(fileIds) => {
          setFileList(fileIds);
        }}
      />
    </div>
  );
}
