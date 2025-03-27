"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type QueryData = {
  domain: string;
  lastQuery: string;
  duration: number;
  cost: number;
  action: string;
};
 
export const columns: ColumnDef<QueryData>[] = [
  {
    accessorKey: "domain",
    header: "Domain",
  },
  {
    accessorKey: "lastQuery",
    header: "Last Query",
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => `${row.original.duration} ms`,
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => `$${row.original.cost.toFixed(2)}`,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <button className="px-2 py-1 text-white bg-blue-500 rounded">
        {row.original.action}
      </button>
    ),
  },
];
