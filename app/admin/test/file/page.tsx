'use client';

import { File_UploadURL } from '@/graphql/declarations/files';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import axios from 'axios';
import { useState } from 'react';

type UploadedFile = {
  id: string;
  url: string;
  viewURL: string;
  fileName: string;
};

type UploadProgress = {
  [key: string]: number;
};

export default function Page() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});

  const cloudUploadFunction = async (args: { files: File[] }) => {
    const uploadURL = await apolloClient.mutate({
      mutation: File_UploadURL,
      variables: {
        input: {
          files: args.files.map((file) => ({
            filename: file.name,
            mimetype: file.type,
            size: file.size,
          })),
          saveToDB: true,
        },
      },
    });

    // upload files to cloud storage via signed URL (multipart upload)
    const uploadPromises = args.files.map(async (file, index) => {
      const uploadResponse = await axios.put(
        uploadURL.data.file_uploadURL.files[index].uploadURL,
        file,
        {
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total ?? 0),
            );
            setUploadProgress((prev) => ({
              ...prev,
              [file.name]: progress,
            }));
          },
        },
      );

      if (uploadResponse.status !== 200) {
        throw new Error('Upload failed');
      }
    });

    await Promise.all(uploadPromises);

    return uploadURL.data.file_uploadURL.files.map((file) => ({
      id: file.id,
      url: file.uploadURL,
      viewURL: file.viewURL,
      fileName: file.fileName,
    }));
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      // Reset progress for new uploads
      setUploadProgress({});
      const fileArray = Array.from(files);
      const result = await cloudUploadFunction({ files: fileArray });
      setUploadedFiles(result);
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Test File Upload</h1>

      <div className='space-y-4'>
        <input
          type='file'
          multiple
          onChange={handleFileUpload}
          className='block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100'
        />

        <div className='text-sm text-gray-500'>
          Upload multiple files to test the cloud upload functionality
        </div>

        {/* Upload Progress */}
        {Object.keys(uploadProgress).length > 0 && (
          <div className='mt-4 space-y-2'>
            <h2 className='text-sm font-semibold'>Upload Progress:</h2>
            {Object.entries(uploadProgress).map(([fileName, progress]) => (
              <div key={fileName} className='space-y-1'>
                <div className='flex justify-between text-xs'>
                  <span>{fileName}</span>
                  <span>{progress}%</span>
                </div>
                <div className='h-2 w-full rounded-full bg-gray-200'>
                  <div
                    className='h-2 rounded-full bg-blue-500 transition-all duration-300'
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className='mt-6'>
            <h2 className='mb-2 text-lg font-semibold'>Uploaded Files:</h2>
            <ul className='space-y-2'>
              {uploadedFiles.map((file) => (
                <li key={file.id} className='flex items-center gap-2'>
                  <span className='text-sm'>{file.fileName}</span>
                  <a
                    href={file.viewURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-md bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600'
                  >
                    View File
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
