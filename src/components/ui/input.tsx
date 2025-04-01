import * as React from 'react';

import { cn } from '@src/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'textfield',
        className
      )}
      {...props}
    />
  );
}

export { Input };
