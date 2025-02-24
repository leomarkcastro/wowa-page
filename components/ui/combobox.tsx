'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ComboboxProps {
  value: string;
  setValue: (value: string) => void;
  content: { value: string; label: string }[];
  allowCustom?: boolean;
}

export function Combobox({
  value,
  setValue,
  content,
  allowCustom = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // Update input value when value changes
  React.useEffect(() => {
    const matchingOption = content.find((item) => item.value === value);
    setInputValue(matchingOption?.label || value || '');
  }, [value, content]);

  const handleSelect = (currentValue: string) => {
    // Check if the selected value matches an existing option
    const matchingOption = content.find(
      (item) => item.value === currentValue || item.label === currentValue,
    );

    if (matchingOption) {
      setValue(matchingOption.value);
    } else if (allowCustom) {
      // If no match and custom values are allowed, use the input value
      setValue(currentValue);
    }
    setOpen(false);
  };

  const filteredOptions = content.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'
        >
          {value
            ? content.find((item) => item.value === value)?.label || value
            : 'Select...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput
            placeholder='Search...'
            value={inputValue}
            onValueChange={(value) => {
              setInputValue(value);
              if (allowCustom) {
                setValue(value);
              }
            }}
          />
          <CommandList>
            {allowCustom && inputValue && !filteredOptions.length && (
              <CommandItem
                className='cursor-pointer'
                onSelect={() => handleSelect(inputValue)}
              >
                + Add "{inputValue}"
              </CommandItem>
            )}
            {filteredOptions.length === 0 && !allowCustom && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            <CommandGroup>
              {filteredOptions.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => handleSelect(item.value)}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { PopoverContent as ComboboxContent };
export { CommandInput as ComboboxInput };
export { CommandItem as ComboboxItem };
export { PopoverTrigger as ComboboxTrigger };
