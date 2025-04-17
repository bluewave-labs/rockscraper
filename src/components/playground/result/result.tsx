'use client';
import { Button } from '@bluewavelabs/prism-ui';
import { cn } from '@src/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { usePlayground } from '../context';
import ProgressBar from '../progress';

const QueryResult = () => {
  const { result, time, start, end } = usePlayground();
  const [progress, setProgress] = useState(50);

  const renderStatus = () => {
    if (!result) return 'In progress...';
    if (result.success) return '200 (success)';
    return `(fail)`;
  };

  return (
    <div>
      <h2 className="text-xl text-gray-20 mb-4">Your query result</h2>
      <div className="flex flex-col">
        <div className="flex justify-between gap-4 mb-4 items-center">
          {!start ? null : (
            <p
              className={cn(
                'flex items-center justify-center p-1 md:px-2 md:py-1 rounded-md text-xs md:text-sm font-medium',
                result && result?.success ? 'bg-green-500 border border-green-600' : '',
                result && !result?.success ? 'bg-red-500 border border-red-600' : '',
                !result ? 'bg-gray-500 border border-gray-600' : ''
              )}
            >
              {renderStatus()}
            </p>
          )}
          {!result ? null : (
            <p className="text-xs text-gray-300 max-w-1/2 md:max-w-inherit">Data retrieved in {time} seconds</p>
          )}
        </div>
        {start && !end ? <ProgressBar /> : null}
        {result ? (
          <Button asChild>
            <Link href="/logs-data">View logs</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default QueryResult;
