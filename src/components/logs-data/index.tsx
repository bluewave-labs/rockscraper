'use client';

import { Button, Pagination, Table } from '@bluewavelabs/prism-ui';
import { columns } from './columns';
import styles from './logs-data.module.scss';

import { QueryData } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import { Drawer } from '../ui/drawer';
import { mockLogs } from './mock';

const LogsData = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(mockLogs[0].data);
  const [selectedLog, setSelectedLog] = useState<QueryData | null>(null);

  const selectedLogErrors = selectedLog?.extracted_content.filter((it) => it.error);

  useEffect(() => {
    setData(mockLogs[currentIndex].data);
  }, [currentIndex]);

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
          {(data.current_page - 1) * 10} - {data.items.length + (data.current_page -1) * 10} of{' '}
          {data.total}
        </p>
        <Pagination
          currentPage={data.current_page}
          totalPages={data.pages}
          onPageChange={(page) => {
            setCurrentIndex(page - 1);
          }}
          className="w-fit mx-0"
        />
      </div>
      <Drawer open={!!selectedLog} onOpenChange={(val) => setSelectedLog(val ? selectedLog : null)}>
        <div>
          <p>
            <strong>URL:</strong> {selectedLog?.url}
          </p>
          <p>
            <strong>Date:</strong> {selectedLog?.date}
          </p>
          {selectedLogErrors?.map((it) => (
            <div key={it.index}>
              {it.error ? (
                <>
                  <p className="bg-red-500 text-white px-2 rounded-md w-fit my-4">Error</p>
                  <p>{it.content}</p>
                </>
              ) : null}
            </div>
          ))}
          <div className="flex gap-2 items-center justify-center mt-4">
            <Button>Download markdown</Button>
            <Button>Download html</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default LogsData;
