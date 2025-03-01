import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AuctionsDataProvider } from '@/lib/dataProviders/auctions';
import { createProvider } from '@/lib/services/createProvider';
import { Skeleton } from '@/components/ui/skeleton';

interface AuctionSelectorProps {
  selectedAuction: string;
  setSelectedAuction: (value: string) => void;
}

export const AuctionSelector = ({
  selectedAuction,
  setSelectedAuction,
}: AuctionSelectorProps) => {
  const dataHookProvider = createProvider({
    name: AuctionsDataProvider.name,
    dataProvider: AuctionsDataProvider,
  });

  const { data, isLoading } = dataHookProvider.useList({
    resource: 'auction',
    pagination: { page: 1, perPage: 100 },
    sorters: [],
    search: '',
    filters: [],
    meta: {},
  });

  if (isLoading) {
    return (
      <div className='space-y-2'>
        <Skeleton className='h-4 w-16' />
        <Skeleton className='h-10 w-full' />
      </div>
    );
  }

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium text-muted-foreground'>
        Auction
      </label>
      <Select value={selectedAuction} onValueChange={setSelectedAuction}>
        <SelectTrigger>
          <SelectValue placeholder='Select auction' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='na'>All Cars</SelectItem>
          <SelectItem value='s:null'>Not in Auction</SelectItem>
          {data?.data?.map((auction) => (
            <SelectItem key={auction.id} value={auction.id}>
              {auction.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
