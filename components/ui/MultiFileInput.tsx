'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { File_UploadURL } from '@/graphql/declarations/files';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import { cn, truncateFileName } from '@/lib/utils';
import axios from 'axios';
import { Upload } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export interface FileItem {
  name: string;
  id: string;
}

interface MultiFileInputProps {
  onUploadComplete?: (files: FileItem[]) => void;
  trigger?: React.ReactNode;
  initialFiles?: FileItem[];
  maxFiles?: number;
  allowedTypes?: string[]; // e.g. ['image/*', 'application/pdf']
  showExistingFiles?: boolean;
}

type UploadProgress = {
  [key: string]: number;
};

export function MultiFileInput({
  onUploadComplete,
  trigger,
  initialFiles = [],
  maxFiles,
  allowedTypes,
  showExistingFiles = true,
}: MultiFileInputProps) {
  const [open, setOpen] = useState(false);
  const [existingFiles, setExistingFiles] = useState<FileItem[]>(initialFiles);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});

  useEffect(() => {
    setExistingFiles(initialFiles);
  }, [initialFiles]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remainingSlots = maxFiles
        ? maxFiles - existingFiles.length - newFiles.length
        : Infinity;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);
      setNewFiles((prev) => [...prev, ...filesToAdd]);
    },
    [maxFiles, existingFiles.length, newFiles.length],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: maxFiles ? maxFiles - existingFiles.length : undefined,
      accept: allowedTypes
        ? Object.fromEntries(allowedTypes.map((type) => [type, []]))
        : undefined,
      onDropRejected: (rejections) => {
        console.error('Files rejected:', rejections);
      },
    });

  const removeExistingFile = (id: string) => {
    setExistingFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const removeNewFile = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (newFiles.length === 0) {
      onUploadComplete?.(existingFiles);
      setOpen(false);
      return;
    }

    setUploading(true);

    try {
      const uploadURL = await apolloClient.mutate({
        mutation: File_UploadURL,
        variables: {
          input: {
            files: newFiles.map((file) => ({
              filename: file.name,
              mimetype: file.type,
              size: file.size,
            })),
            saveToDB: true,
          },
        },
      });

      const uploadPromises = newFiles.map(async (file, index) => {
        await axios.put(
          uploadURL.data.file_uploadURL.files[index].uploadURL,
          file,
          {
            headers: { 'Content-Type': file.type },
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
      });

      await Promise.all(uploadPromises);

      const newFileItems: FileItem[] = uploadURL.data.file_uploadURL.files.map(
        (file: any) => ({
          name: file.fileName,
          id: file.id,
        }),
      );

      const allFiles = [...existingFiles, ...newFileItems];
      onUploadComplete?.(allFiles);
      setOpen(false);
      setNewFiles([]);
      setUploadProgress({});
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const hasChanges = () => {
    if (newFiles.length > 0) return true;
    if (existingFiles.length !== initialFiles.length) return true;
    return !existingFiles.every((file) =>
      initialFiles.some((initial) => initial.id === file.id),
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant='outline'>
            <Upload className='mr-2 h-4 w-4' />
            Upload Files
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          {!maxFiles || existingFiles.length + newFiles.length < maxFiles ? (
            <div
              {...getRootProps()}
              className={cn(
                'cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center',
                isDragActive && 'border-primary bg-primary/10',
              )}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <div className='space-y-1'>
                  <p>Drag & drop files here, or click to select files</p>
                  {allowedTypes && (
                    <p className='text-sm text-muted-foreground'>
                      Allowed types: {allowedTypes.join(', ')}
                    </p>
                  )}
                  {maxFiles && (
                    <p className='text-sm text-muted-foreground'>
                      Maximum files: {maxFiles} (remaining:{' '}
                      {maxFiles - (existingFiles.length + newFiles.length)})
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className='text-center text-sm text-muted-foreground'>
              Maximum number of files reached ({maxFiles})
            </p>
          )}

          {showExistingFiles && existingFiles.length > 0 && (
            <div className='space-y-2'>
              <div className='text-sm font-medium'>Existing Files:</div>
              {existingFiles.map((file) => (
                <div
                  key={file.id}
                  className='flex items-center justify-between gap-2'
                >
                  <span className='text-sm' title={file.name}>
                    {truncateFileName(file.name)}
                  </span>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => removeExistingFile(file.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}

          {newFiles.length > 0 && (
            <div className='space-y-2'>
              <div className='text-sm font-medium'>New Files:</div>
              {newFiles.map((file, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between gap-2'
                >
                  <span className='text-sm' title={file.name}>
                    {truncateFileName(file.name)}
                  </span>
                  {uploadProgress[file.name] !== undefined && (
                    <div className='h-2 w-24 rounded-full bg-gray-200'>
                      <div
                        className='h-2 rounded-full bg-primary transition-all duration-300'
                        style={{ width: `${uploadProgress[file.name]}%` }}
                      />
                    </div>
                  )}
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => removeNewFile(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}

          {hasChanges() && (
            <Button onClick={handleUpload} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Save Changes'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
