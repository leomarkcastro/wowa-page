import React from 'react';
import { getDiffLabel, getPathString, parseDiff } from '@/lib/utils/diffParser';
import { Badge } from '@/components/ui/badge';

interface DiffViewProps {
  diffData: string;
}

export const DiffView: React.FC<DiffViewProps> = ({ diffData }) => {
  const diffs = parseDiff(diffData);

  if (diffs.length === 0) {
    return (
      <div className='flex justify-center py-4 text-sm text-muted-foreground'>
        No changes detected
      </div>
    );
  }

  return (
    <div className='space-y-2'>
      {diffs.map((diff, index) => (
        <div key={index} className='rounded-md border p-3'>
          <div className='flex items-center gap-2'>
            <Badge variant={diff.kind === 'D' ? 'destructive' : 'default'}>
              {getDiffLabel(diff.kind)}
            </Badge>
            <span className='font-mono text-sm'>
              {getPathString(diff.path)}
            </span>
          </div>

          {diff.kind === 'E' && (
            <div className='mt-2 grid grid-cols-2 gap-4'>
              <div>
                <p className='text-xs text-muted-foreground'>Old value:</p>
                <pre className='mt-1 rounded bg-muted p-2 text-sm'>
                  {JSON.stringify(diff.lhs, null, 2)}
                </pre>
              </div>
              <div>
                <p className='text-xs text-muted-foreground'>New value:</p>
                <pre className='mt-1 rounded bg-muted p-2 text-sm'>
                  {JSON.stringify(diff.rhs, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {diff.kind === 'N' && (
            <div className='mt-2'>
              <p className='text-xs text-muted-foreground'>Added value:</p>
              <pre className='mt-1 rounded bg-muted p-2 text-sm'>
                {JSON.stringify(diff.rhs, null, 2)}
              </pre>
            </div>
          )}

          {diff.kind === 'D' && (
            <div className='mt-2'>
              <p className='text-xs text-muted-foreground'>Deleted value:</p>
              <pre className='mt-1 rounded bg-muted p-2 text-sm'>
                {JSON.stringify(diff.lhs, null, 2)}
              </pre>
            </div>
          )}

          {diff.kind === 'A' && diff.item && (
            <div className='mt-2'>
              <p className='text-xs text-muted-foreground'>
                Array index {diff.index}:
              </p>
              <div className='mt-1'>
                <Badge>{getDiffLabel(diff.item.kind)}</Badge>
                <pre className='mt-1 rounded bg-muted p-2 text-sm'>
                  {JSON.stringify(
                    diff.item.kind === 'D' ? diff.item.lhs : diff.item.rhs,
                    null,
                    2,
                  )}
                </pre>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
