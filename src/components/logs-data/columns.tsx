"use client"
 
import { QueryData } from "@src/utils/interfaces";
import { ColumnDef } from "@tanstack/react-table"
 
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
    cell: ({ row }) => row.original.action,
  },
];
