'use client';
import { Button, useIsMobile } from '@bluewavelabs/prism-ui';
import { cn } from '@src/lib/utils';
import codeToHtml from '@src/utils/codeToHtml';
import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'sonner';
import style from './result.module.scss';

const QueryResult = () => {
  const [formattedData, setFormattedData] = useState('');
  const [status] = useState(200);
  const [data] = useState<any>();
  const isMobile = useIsMobile();

  const buildData = async () => {
    if (!data) return;
    const html = await codeToHtml(JSON.stringify(data, null, 2));
    setFormattedData(html);
  };

  useEffect(() => {
    buildData();
  }, [data]);

  return (
    <div>
      <h2 className="text-xl text-gray-20 mb-6">Your query result</h2>
      <div className="flex flex-col">
        <div className="flex justify-between gap-4 mb-4 items-center">
          <p
            className={cn(
              'flex items-center justify-center p-1 md:px-2 md:py-1 rounded-md text-xs md:text-sm font-medium',
              status < 400 ? 'bg-green-500 border border-green-600' : 'bg-red-500 border border-red-600'
            )}
          >
            {status < 400 ? '200 (success)' : `${status} (fail)`}
          </p>
          <p className="text-xs text-gray-300 max-w-1/2 md:max-w-inherit">Data retrieved in 2.4 seconds</p>
        </div>
        <div className={style['play__content--result']}>
          <p
            className={style['play__content--result-text']}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(formattedData) }}
          ></p>

          <Button
            className={style['play__content--copy']}
            onClick={() => {
              if (!data) return;
              navigator.clipboard.writeText(JSON.stringify(data, null, 2));
              toast('Response data copied to clipboard');
            }}
            size={isMobile ? 'xs' : 'default'}
          >
            Copy to clipboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QueryResult;
