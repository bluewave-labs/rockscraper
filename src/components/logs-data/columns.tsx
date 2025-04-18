'use client';

import { Button } from '@bluewavelabs/prism-ui';
import { QueryData } from '@src/utils/interfaces';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<QueryData>[] = [
  {
    accessorKey: 'domain',
    header: 'Domain',
    cell: ({ row }) => (row.original.url.length > 50 ? row.original.url.slice(0, 50) + '...' : row.original.url),
  },
  {
    accessorKey: 'lastQuery',
    header: 'Last Query',
    cell: ({ row }) => new Date(row.original.date).toLocaleString(),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => <Button size="sm">See logs</Button>,
  },
];
