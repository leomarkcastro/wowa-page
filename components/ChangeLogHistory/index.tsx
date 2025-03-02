import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChangelogsDataProvider } from '@/lib/dataProviders/changelogs';
import { Loader2 } from 'lucide-react';
import { fMoment } from '@/lib/services/fMoment';
import { DiffView } from './DiffView';

interface ChangeLogHistoryProps {
  dataType?: string;
  dataId?: string;
}

interface ChangelogEntry {
  id: string;
  actor: string;
  dataType: string;
  dataID: string;
  data: any;
  metadata: any;
  createdAt: string;
}

export const ChangeLogHistory: React.FC<ChangeLogHistoryProps> = ({
  dataType,
  dataId,
}) => {
  const [changelogs, setChangelogs] = useState<ChangelogEntry[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchChangelogs = async () => {
    setIsLoading(true);
    try {
      const filters = [];
      if (dataType) {
        filters.push({
          field: 'dataType',
          operator: 'equals',
          value: dataType,
        });
      }
      if (dataId) {
        filters.push({ field: 'dataID', operator: 'equals', value: dataId });
      }

      const result = await ChangelogsDataProvider.getList({
        pagination: { page: 1, perPage: 100 },
        filters: filters,
        search: search,
        sorters: [],
      });

      setChangelogs(result.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChangelogs();
  }, [dataType, dataId, search]);

  const renderChangelogContent = (changelog: ChangelogEntry) => {
    return (
      <div className='space-y-4'>
        <div className='flex flex-col gap-1'>
          <p className='font-semibold'>Changed by: {changelog.actor}</p>
          <p className='text-muted-foreground'>
            {fMoment(changelog.createdAt).format('MMMM D, YYYY, h:mm:ss a')}
          </p>
        </div>
        <div>
          <h5 className='mb-2 text-sm font-semibold'>Changes:</h5>
          <DiffView diffData={changelog.data} />
        </div>
        {changelog.metadata && (
          <div>
            <h5 className='mb-2 text-sm font-semibold'>Metadata:</h5>
            <ScrollArea className='h-[200px] w-full rounded-md border p-4'>
              <pre className='text-sm'>
                {JSON.stringify(changelog.metadata, null, 2)}
              </pre>
            </ScrollArea>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change History</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Input
          placeholder='Search changes...'
          onChange={(e) => setSearch(e.target.value)}
          className='max-w-sm'
        />
        {isLoading ? (
          <div className='flex justify-center py-8'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        ) : changelogs.length === 0 ? (
          <div className='flex justify-center py-8 text-muted-foreground'>
            No changes found
          </div>
        ) : (
          <Accordion type='single' collapsible className='w-full'>
            {changelogs.map((changelog) => (
              <AccordionItem key={changelog.id} value={changelog.id}>
                <AccordionTrigger>
                  Changes on{' '}
                  {fMoment(changelog.createdAt).format('MMMM D, YYYY')} by{' '}
                  {changelog.actor}
                </AccordionTrigger>
                <AccordionContent>
                  {renderChangelogContent(changelog)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};
