import React from 'react';

interface LoaderProps {
  isLoading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background'>
      <div className='flex flex-col items-center'>
        <div className='h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent'></div>
        <span className='mt-4 text-foreground'>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
