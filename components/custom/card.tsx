import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border-2 bg-card shadow-md ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export function CardHeader({ title, action }: CardHeaderProps) {
  return (
    <div className='flex items-center justify-between p-6'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      {action || (
        <Button variant='ghost' size='icon'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      )}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
