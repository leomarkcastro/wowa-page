'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react';
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
import { useDebounce } from '@uidotdev/usehooks';

export interface AsyncSelectProps {
  value?: string;
  onChange: (value: string) => void;
  fetch: (query: string) => Promise<{ label: string; value: string }[]>;
  placeholder?: string;
  debounce?: number;
  disabled?: boolean;
  addNewItemAction?: (inputValue: string) => void;
}

export function AsyncSelect({
  value,
  onChange,
  fetch,
  placeholder = 'Select an option...',
  debounce = 500,
  disabled = false,
  addNewItemAction,
}: AsyncSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const [options, setOptions] = React.useState<
    { label: string; value: string }[]
  >([]);
  const debouncedSearch = useDebounce(inputValue, debounce);
  const [firstLoad, setFirstLoad] = React.useState(true);

  React.useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      if (!value) {
        fetch(value).then((results) => {
          setOptions(results);
          const matchingOption = results.find((item) => item.value === value);
          if (matchingOption) {
            setInputValue(matchingOption.label);
          }
        });
      }
    }
  }, [value, firstLoad]);

  // Load options when search changes
  React.useEffect(() => {
    const loadOptions = async () => {
      setLoading(true);
      // if (!debouncedSearch.trim()) {
      //   setLoading(false);
      //   return;
      // }
      try {
        const results = await fetch(debouncedSearch.trim());
        setOptions(results);
      } catch (error) {
        console.error('Error fetching options:', error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    };

    loadOptions();
  }, [debouncedSearch, fetch]);

  // // Initial load if there's a value
  // React.useEffect(() => {
  //   if (value && !options.length) {
  //     fetch(value).then((results) => {
  //       setOptions(results);
  //       const matchingOption = results.find((item) => item.value === value);
  //       if (matchingOption) {
  //         setInputValue(matchingOption.label);
  //       }
  //     });
  //   }
  // }, [value, fetch]);

  const handleSelect = (currentValue: string) => {
    const selectedOption = options.find((item) => item.value === currentValue);
    if (selectedOption) {
      onChange(selectedOption.value);
      // setInputValue(selectedOption.label);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          disabled={disabled}
          className='w-full justify-between'
        >
          {value
            ? options.find((item) => item.value === value)?.label || placeholder
            : placeholder}
          {loading ? (
            <Loader2 className='ml-2 h-4 w-4 animate-spin' />
          ) : (
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command shouldFilter={false}>
          <CommandInput
            placeholder='Search...'
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
            {loading && <CommandEmpty>Loading...</CommandEmpty>}
            {!loading && options.length === 0 && (
              <CommandEmpty>
                No results found.
                {addNewItemAction && inputValue && (
                  <Button
                    variant='link'
                    className='mt-2 h-auto p-0 text-xs'
                    onClick={() => {
                      addNewItemAction(inputValue);
                      setOpen(false);
                    }}
                  >
                    Add &apos;{inputValue}&apos;
                  </Button>
                )}
              </CommandEmpty>
            )}
            <CommandGroup>
              {options.map((item) => (
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
