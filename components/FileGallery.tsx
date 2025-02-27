'use client';

import { File, FileText, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { truncateFileName } from '@/lib/utils';

interface FileItem {
  id: string;
  filename: string;
  url: string; // Add URL property
}

interface FileGalleryProps {
  files: FileItem[];
  pageSize?: number;
  size?: 'sm' | 'md' | 'lg' | number;
  aspectRatio?: number; // width/height ratio (e.g., 16/9)
  onFileClick?: (file: FileItem) => void;
  onDelete?: (file: FileItem) => void;
}

const isImageFile = (filename: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

export function FileGallery({
  files,
  pageSize = 100,
  size = 'md',
  aspectRatio = 1, // default to square
  onFileClick,
  onDelete,
}: FileGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(files.length / pageSize);

  const getBoxSize = () => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'sm':
        return 96; // h-24 w-24
      case 'lg':
        return 160; // h-40 w-40
      default:
        return 128; // h-32 w-32 (md)
    }
  };

  const boxWidth = getBoxSize();
  const boxHeight = boxWidth / aspectRatio;
  const iconSize = Math.max(24, Math.min(boxWidth, boxHeight) / 4);

  const startIndex = (currentPage - 1) * pageSize;
  const visibleFiles = files.slice(startIndex, startIndex + pageSize);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap justify-center gap-4'>
        {visibleFiles.map((file) => (
          <div
            key={file.id}
            className='group relative cursor-pointer rounded-lg border border-gray-200 p-2 hover:border-primary'
            style={{ width: boxWidth, height: boxHeight }}
            onClick={() => onFileClick?.(file)}
          >
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(file);
                }}
                className='absolute right-1 top-1 z-10 hidden rounded-full bg-red-500 p-1 text-white opacity-90 transition-all hover:opacity-100 group-hover:block'
              >
                <Trash2 size={16} />
              </button>
            )}
            {isImageFile(file.filename) ? (
              <>
                <div className='relative h-full w-full bg-gray-200'>
                  <img
                    src={file.url}
                    alt={file.filename}
                    className='relative h-full w-full rounded object-contain'
                  />
                  <p className='absolute bottom-1 left-0 right-0 bg-white/50 text-center text-xs'>
                    {truncateFileName(file.filename.toLowerCase())}
                  </p>
                </div>
              </>
            ) : (
              <div className='flex h-full w-full flex-col items-center justify-center gap-1'>
                {file.filename.endsWith('.pdf') ? (
                  <FileText
                    style={{ width: iconSize, height: iconSize }}
                    className='text-red-500'
                  />
                ) : (
                  <File
                    style={{ width: iconSize, height: iconSize }}
                    className='text-blue-500'
                  />
                )}
                <p className='line-clamp-2 w-full text-center text-[10px] text-gray-600'>
                  {truncateFileName(file.filename)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className='flex items-center justify-center gap-4'>
          <Button
            variant='outline'
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className='text-sm'>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant='outline'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
