'use client';

import { Button, Table } from '@bluewavelabs/prism-ui';
import { columns } from './columns';
import styles from './logs-data.module.scss';

import { QueryData } from '@src/utils/interfaces';
import { useState } from 'react';
import { Drawer } from '../ui/drawer';
import { mockLogs } from './mock';

const LogsData = () => {
  const [data, setData] = useState(mockLogs[0].data.items);
  const [selectedLog, setSelectedLog] = useState<QueryData | null>(null);

  const selectedLogErrors = selectedLog?.extracted_content.filter((it) => it.error);

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={data}
        className="text-left"
        onRowClick={(row) => {
          const logs = data.find((it) => it.id === row.id);
          if (!logs) return;
          setSelectedLog(logs);
        }}
      />
      <Drawer open={!!selectedLog} onOpenChange={(val) => setSelectedLog(val ? selectedLog : null)}>
        <div>
          <p>{selectedLog?.url}</p>
          <p>{selectedLog?.date}</p>
          {selectedLogErrors?.map((it) => (
            <div key={it.index}>
              {it.error ? (
                <>
                  <p className="text-red-500">Error</p>
                  <p>{it.content}</p>
                </>
              ) : null}
            </div>
          ))}
          <div>
            <Button>Download markdown</Button>
            <Button>Download html</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default LogsData;
