import * as React from 'react';
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu as DropdownMenuPrimitive,
} from '@/components/ui/dropdown-menu';

export function DropdownMenu({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  const onMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <DropdownMenuPrimitive open={open} onOpenChange={setOpen}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </DropdownMenuContent>
      </div>
    </DropdownMenuPrimitive>
  );
}
