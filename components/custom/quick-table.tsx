'use client';

import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Loader2,
} from 'lucide-react';
import { DataProvider } from '@/lib/services/dataProvider';
import { cn } from '@/lib/utils';
import { useDebounce } from '@uidotdev/usehooks';
import { createProvider } from '@/lib/services/createProvider';

export type FilterOperator =
  | 'contains'
  | 'equals'
  | 'gt'
  | 'lt'
  | 'gte'
  | 'lte'
  | 'ncontains'
  | 'nequals'
  | 'startsWith'
  | 'endsWith'
  | 'nstartsWith'
  | 'nendsWith';

export interface ColumnsDataTable {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: FilterOperator[];
  specialType?: 'datetime' | 'number' | 'boolean' | 'date' | 'time';
  renderCell?: (value: any, allValue: any) => React.ReactNode;
}

// Update interfaces
interface DataTableProps {
  name: string;
  dataSource: DataProvider;
  columns: ColumnsDataTable[];
  actionButtons?: React.ReactNode;
  onRowClick?: (row: any) => void;
  initialFilters?: Record<string, FilterValue[]>; // Add this line
  enableUrlPersistence?: boolean; // Add this line
  passFilters?: boolean; // Add this line
}

interface FilterValue {
  value: string;
  operator: FilterOperator;
}

interface TempFilter {
  column: string;
  operator: FilterOperator;
  value: string;
}

// Add these utility functions after the interfaces
const getStateFromUrl = (tableName: string) => {
  if (typeof window === 'undefined') return null;

  let returnState: any = {};

  const params = new URLSearchParams(window.location.search);
  // console.log(params);
  for (let val of [
    'currentPage',
    'pageSize',
    'search',
    'sortConfig',
    'filters',
  ]) {
    const stateStr = params.get(`${tableName}_${val}`);
    if (!stateStr) continue;

    try {
      returnState[val] = JSON.parse(decodeURIComponent(stateStr));
    } catch (error) {
      console.log(error);
      // return null;
    }
  }
  // const stateStr = params.get(`${tableName}_state`);
  // if (!stateStr) return null;

  try {
    return returnState;
  } catch {
    return null;
  }
};

const updateUrlState = (tableName: string, state: any) => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  // params.set(`${tableName}_state`, encodeURIComponent(JSON.stringify(state)));
  for (let val of [
    'currentPage',
    'pageSize',
    'search',
    'sortConfig',
    'filters',
  ]) {
    if (state[val]) {
      params.set(
        `${tableName}_${val}`,
        encodeURIComponent(JSON.stringify(state[val])),
      );
    }
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
};

export function DataProviderTable({
  name,
  dataSource,
  columns,
  actionButtons,
  onRowClick,
  initialFilters = {}, // Add default value
  enableUrlPersistence = false,
  passFilters = false,
}: DataTableProps) {
  const dataHookProvider = createProvider({
    name: dataSource.name,
    dataProvider: dataSource,
  });

  const [data, setData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0); // Add this line
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [_filters, setFilters] = useState<Record<string, FilterValue[]>>({});

  const filters = useMemo(() => {
    // combbined initialFilters and _filters keys
    const keys = [
      ...Object.keys(initialFilters),
      ...Object.keys(_filters),
    ].filter((v, i, a) => a.indexOf(v) === i);

    return keys.reduce(
      (acc, key) => {
        return {
          ...acc,
          [key]: [...(_filters[key] || []), ...(initialFilters[key] || [])],
        };
      },
      {} as Record<string, FilterValue[]>,
    );
  }, [_filters, initialFilters]);

  // Filter modal state
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState<TempFilter>({
    column: '',
    operator: 'equals',
    value: '',
  });

  const getOperatorSymbol = (operator: FilterOperator): string => {
    switch (operator) {
      case 'equals':
        return '==';
      case 'contains':
        return '⊃';
      case 'gt':
        return '>';
      case 'lt':
        return '<';
      case 'gte':
        return '≥';
      case 'lte':
        return '≤';
      case 'nequals':
        return '≠';
      default:
        return operator;
    }
  };

  const [persistanceLoaded, setPersistanceLoaded] =
    useState(!enableUrlPersistence);

  const { data: lData, isLoading: lLoading } = dataHookProvider.useList({
    // Add total to destructuring
    resource: 'users',
    pagination: { page: currentPage, perPage: pageSize },
    sorters: sortConfig
      ? [{ field: sortConfig.key, order: sortConfig.direction }]
      : [],
    search: debouncedSearch,
    filters: Object.entries(filters).flatMap(([field, values]) =>
      values.map(({ value, operator }) => ({ field, operator, value })),
    ),
    meta: {},
  });

  useEffect(() => {
    if (!persistanceLoaded) {
      return;
    }
    setIsLoading(lLoading);
    setData(lData?.data);
    setTotalPages(lData?.totalPages);
    setTotalRecords(lData?.total); // Add this line
  }, [persistanceLoaded, lLoading, lData]);

  const lastFilter = useRef('');

  // Add this new useEffect before the existing useEffect
  useEffect(() => {
    let debounceStringify = JSON.stringify({
      debouncedSearch,
      filters,
      pageSize,
    });
    if (lastFilter.current !== debounceStringify) {
      lastFilter.current = debounceStringify;
      setCurrentPage(1);
    }
  }, [debouncedSearch, filters, pageSize]);

  const alreadyLoaded = useRef(false);

  // Replace the problematic useEffect
  // useEffect(() => {
  //   if (alreadyLoaded.current && !passFilters) {
  //     return;
  //   }
  //   // const filtersChanged =
  //   //   JSON.stringify(filters) !== JSON.stringify(initialFilters);
  //   // if (filtersChanged) {
  //   if (initialFilters) {
  //     setFilters(initialFilters);
  //     alreadyLoaded.current = true;
  //   }
  //   // }
  // }, [initialFilters]);

  // Add this useEffect at the beginning
  useEffect(() => {
    if (!enableUrlPersistence) return;

    const savedState = getStateFromUrl(name);
    // console.log(savedState);
    if (savedState) {
      if (savedState.currentPage) setCurrentPage(savedState.currentPage);
      if (savedState.pageSize) setPageSize(savedState.pageSize);
      if (savedState.search) setSearch(savedState.search);
      if (savedState.sortConfig) setSortConfig(savedState.sortConfig);
      if (savedState.filters) setFilters(savedState.filters);
    }
    setTimeout(() => {
      setPersistanceLoaded(true);
    }, 1000);
  }, []);

  // Add this useEffect after other useEffects
  useEffect(() => {
    if (!enableUrlPersistence) return;
    if (!persistanceLoaded) return;

    // console.log('Updating URL state');
    updateUrlState(name, {
      currentPage,
      pageSize,
      search,
      sortConfig,
      filters: _filters,
    });
  }, [currentPage, pageSize, search, sortConfig, _filters]);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        if (current.direction === 'asc') {
          return { key, direction: 'desc' };
        }
        return null;
      }
      return { key, direction: 'asc' };
    });
  };

  const removeFilter = (column: string, filterValue: FilterValue) => {
    setFilters((prev) => ({
      ...prev,
      [column]: prev[column]?.filter(
        (v) =>
          !(
            v.value === filterValue.value && v.operator === filterValue.operator
          ),
      ),
    }));
  };

  const handleAddFilter = () => {
    if (!tempFilter.column || !tempFilter.value) return;

    let value: string = tempFilter.value;
    const column = columns.find((col) => col.key === tempFilter.column);

    if (column?.specialType) {
      switch (column.specialType) {
        case 'datetime':
        case 'date':
        case 'time':
          value = `d:${value}`;
          break;
        case 'number':
          value = `n:${value}`;
          break;
        case 'boolean':
          value = `b:${value.toLowerCase()}`;
          break;
        default:
          break;
      }
    }

    setFilters((prev) => ({
      ...prev,
      [tempFilter.column]: [
        ...(prev[tempFilter.column] || []),
        { value: value, operator: tempFilter.operator },
      ],
    }));

    setTempFilter({ column: '', operator: 'equals', value: '' });
    setFilterModalOpen(false);
  };

  if (!data && !isLoading) {
    return null;
  }

  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <Input
          placeholder='Search...'
          className='max-w-sm'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='flex space-x-2'>
          <Dialog open={filterModalOpen} onOpenChange={setFilterModalOpen}>
            <DialogTrigger asChild>
              <Button variant='outline'>
                <Filter className='mr-2 h-4 w-4' />
                Filter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Filter</DialogTitle>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid gap-2'>
                  <Label>Column</Label>
                  <Select
                    value={tempFilter.column}
                    onValueChange={(value) =>
                      setTempFilter((prev) => ({ ...prev, column: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select column' />
                    </SelectTrigger>
                    <SelectContent>
                      {columns
                        .filter(
                          (col) => col.filterable && col.filterable.length > 0,
                        )
                        .map((column) => (
                          <SelectItem key={column.key} value={column.key}>
                            {column.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                {tempFilter.column && (
                  <div className='grid gap-2'>
                    <Label>Operator</Label>
                    <Select
                      value={tempFilter.operator}
                      onValueChange={(value) =>
                        setTempFilter((prev) => ({
                          ...prev,
                          operator: value as FilterOperator,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {columns
                          .find((col) => col.key === tempFilter.column)
                          ?.filterable?.map((op) => (
                            <SelectItem key={op} value={op}>
                              {op === 'equals' && 'Equals'}
                              {op === 'contains' && 'Contains'}
                              {op === 'gt' && 'Greater than'}
                              {op === 'lt' && 'Less than'}
                              {op === 'gte' && 'Greater or equal'}
                              {op === 'lte' && 'Less or equal'}
                              {op === 'nequals' && 'Not equal'}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {tempFilter.column && (
                  <div className='grid gap-2'>
                    <Label>Value</Label>
                    {(() => {
                      const columnType = columns.find(
                        (col) => col.key === tempFilter.column,
                      )?.specialType;

                      switch (columnType) {
                        case 'boolean':
                          return (
                            <div className='flex items-center space-x-2'>
                              <input
                                type='checkbox'
                                checked={tempFilter.value === 'true'}
                                onChange={(e) =>
                                  setTempFilter((prev) => ({
                                    ...prev,
                                    value: e.target.checked.toString(),
                                  }))
                                }
                                className='h-4 w-4'
                              />
                              <span className='text-sm'>
                                {tempFilter.value === 'true' ? 'Yes' : 'No'}
                              </span>
                            </div>
                          );
                        case 'number':
                          return (
                            <Input
                              type='number'
                              value={tempFilter.value}
                              onChange={(e) =>
                                setTempFilter((prev) => ({
                                  ...prev,
                                  value: e.target.value,
                                }))
                              }
                              placeholder='Enter number...'
                            />
                          );
                        case 'datetime':
                          return (
                            <Input
                              type='datetime-local'
                              value={tempFilter.value}
                              onChange={(e) =>
                                setTempFilter((prev) => ({
                                  ...prev,
                                  value: e.target.value,
                                }))
                              }
                            />
                          );
                        case 'date':
                          return (
                            <Input
                              type='date'
                              value={tempFilter.value}
                              onChange={(e) =>
                                setTempFilter((prev) => ({
                                  ...prev,
                                  value: e.target.value,
                                }))
                              }
                            />
                          );
                        case 'time':
                          return (
                            <Input
                              type='time'
                              value={tempFilter.value}
                              onChange={(e) =>
                                setTempFilter((prev) => ({
                                  ...prev,
                                  value: e.target.value,
                                }))
                              }
                            />
                          );
                        default:
                          return (
                            <Input
                              value={tempFilter.value}
                              onChange={(e) =>
                                setTempFilter((prev) => ({
                                  ...prev,
                                  value: e.target.value,
                                }))
                              }
                              placeholder='Enter value...'
                            />
                          );
                      }
                    })()}
                  </div>
                )}
              </div>
              <Button
                onClick={handleAddFilter}
                disabled={!tempFilter.column || !tempFilter.value}
              >
                Add Filter
              </Button>
            </DialogContent>
          </Dialog>
          {actionButtons}
        </div>
      </div>

      <div className='flex flex-wrap gap-2'>
        {Object.entries(filters).flatMap(([column, filterValues]) =>
          filterValues.map((filterValue) => (
            <Badge
              key={`${column}-${filterValue.value}-${filterValue.operator}`}
              variant={(!_filters[column] ? 'outline' : 'secondary') as any}
            >
              {column} {getOperatorSymbol(filterValue.operator)}{' '}
              {filterValue.value}
              <button
                className={cn('ml-1 text-xs', !_filters[column] && 'hidden')}
                onClick={() => removeFilter(column, filterValue)}
              >
                ×
              </button>
            </Badge>
          )),
        )}
      </div>

      <p className='text-sm text-foreground/60'>
        Total: {totalRecords} records{' '}
      </p>
      <div className='rounded-md'>
        <Table>
          <TableHeader className=''>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(
                    'font-semibold',
                    column.sortable ? 'cursor-pointer' : '',
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  {column.label}
                  {sortConfig?.key === column.key && (
                    <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading || !persistanceLoaded ? (
              <TableRow className='border-none'>
                <TableCell
                  colSpan={columns.length}
                  className='py-8 text-center'
                >
                  <div className='flex items-center justify-center'>
                    <Loader2 className='h-6 w-6 animate-spin' />
                    <span className='ml-2'>Loading...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='py-8 text-center'
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow
                  key={index}
                  className={cn(
                    onRowClick && 'cursor-pointer hover:bg-muted/50',
                  )}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.renderCell
                        ? column.renderCell(row[column.key], row)
                        : row[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className='px-2 pt-4'>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center space-x-2'>
            <p className='text-sm font-medium'>Rows per page</p>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => setPageSize(Number(value))}
            >
              <SelectTrigger className='h-8 w-[70px]'>
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent side='top'>
                {[10, 25, 50, 100].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center space-x-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <span className='text-sm font-medium'>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant='outline'
              size='sm'
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
