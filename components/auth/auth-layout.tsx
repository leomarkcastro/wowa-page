import NeumorphicClock from '../custom/neumorphic-clock';

interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  subheading: string;
}

export function AuthLayout({ children, heading, subheading }: AuthLayoutProps) {
  return (
    <div className='container relative grid min-h-screen grid-cols-1 flex-col items-center justify-center lg:max-w-screen-lg lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex'>
        <div className='relative z-20 flex flex-1 items-center justify-center'>
          <NeumorphicClock />
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>{heading}</h1>
            <p className='text-sm text-muted-foreground'>{subheading}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
