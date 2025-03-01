import Image from 'next/image';
import { Card } from '../custom/card';
import { WaveBackground } from '../custom/WaveBackground';
import { useEffect, useState } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  subheading: string;
}

export function AuthLayout({ children, heading, subheading }: AuthLayoutProps) {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='absolute inset-0 left-0 top-0'>
        <WaveBackground />
      </div>
      <div className='container relative z-10 grid min-h-screen grid-cols-1 flex-col items-center justify-center px-4 lg:max-w-screen-lg lg:grid-cols-1 lg:px-0'>
        <Card className='mx-auto w-fit p-8 pb-4 shadow-lg'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='relative w-full'>
              <Image src='/logo-text.png' width={350} height={120} alt='logo' />
            </div>
            <div className='flex flex-col space-y-2 text-center'>
              <p className='text-sm text-muted-foreground'>{subheading}</p>
            </div>
            {children}
          </div>
          <div className='text-center'>
            <span className='font-mono text-sm font-semibold text-foreground/65'>
              {currentTime}
            </span>
          </div>
        </Card>
      </div>
    </>
  );
}
