'use client';

import { Pagination, Table } from '@bluewavelabs/prism-ui';
import { columns } from './columns';
import styles from './logs-data.module.scss';

import { getLogs } from '@src/utils/api';
import { useScraper } from '@src/utils/context';
import { ExtractedContent, Log, QueryData } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import LogDetails from './logDetails';

const ensureBaseFields = (item: any): ExtractedContent => {
  return {
    content: item.content ?? '',
    error: item.error ?? false,
    index: item.index ?? 0,
    tags: Array.isArray(item.tags) ? item.tags : [],
    ...item, // Spread the rest of the properties
  };
};

const transformData = (data: any): Log['data'] => {
  return {
    current_page: data.current_page,
    items: data.items.map((item: any) => ({
      ...item,
      extracted_content: item.extracted_content.map(ensureBaseFields),
    })),
    pages: data.pages,
    total: data.total,
  };
};

const LogsData = () => {
  const {
    requestState: { apiKey },
  } = useScraper();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Log['data']>({} as Log['data']);
  const [selectedLog, setSelectedLog] = useState<QueryData | null>(null);

  // useEffect(() => {
  //   setData(transformData(mockLogsSuccess[currentIndex].data));
  // }, [currentIndex]);

  useEffect(() => {
    if (!apiKey) return;
    getLogs(apiKey, 1)
      .then((res) => {
        if (!res) {
          toast.error('Error fetching logs');
          return;
        }
        setData(transformData(res.data));
      })
      .catch((err) => {
        toast.error(`Error fetching logs - ${err.message}`);
      });
  }, [apiKey]);

  if (!Object.keys(data).length) return null;

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={data.items}
        className="text-left mb-4"
        onRowClick={(row) => {
          const logs = data.items.find((it) => it.id === row.id);
          if (!logs) return;
          setSelectedLog(logs);
        }}
      />
      <div className="flex justify-between items-center w-full gap-4">
        <p className="text-xs text-gray-30">
          {(data.current_page - 1) * 10} - {data.items.length + (data.current_page - 1) * 10} of {data.total}
        </p>
        {data.pages > 1 ? (
          <Pagination
            currentPage={data.current_page}
            totalPages={data.pages}
            onPageChange={(page) => {
              getLogs(apiKey, page).then((res) => {
                if (!res) {
                  toast.error('Error fetching logs');
                  return;
                }
                setData(transformData(res.data));
              }).catch((err) => {
                toast.error(`Error fetching logs - ${err.message}`);
              });
            }}
            className="w-fit mx-0"
          />
        ) : null}
      </div>
      <LogDetails selectedLog={selectedLog} setSelectedLog={setSelectedLog} />
    </div>
  );
};

export default LogsData;
