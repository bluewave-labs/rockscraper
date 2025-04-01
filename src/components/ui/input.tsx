import * as React from 'react';

import { cn } from '@src/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-gray-10 placeholder:text-zinc-300 selection:bg-gray-20 selection:text-gray-10 dark:bg-gray-0/30 border-zinc-600 flex w-full min-w-0 rounded-sm border bg-transparent px-4 py-3.5 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800',
        className
      )}
      {...props}
    />
  );
}

export { Input };
