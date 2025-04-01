import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@src/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-blue-300 text-blue-600 shadow-xs cursor-pointer hover:bg-blue-400',
        destructive:
          'bg-purple-700 text-purple-200 shadow-xs cursor-pointer hover:bg-purple-800 focus-visible:ring-purple-700/20 dark:focus-visible:ring-purple-800 dark:bg-purple-800',
        outline:
          'border border-zinc-400 text-zinc-300 shadow-xs cursor-pointer hover:bg-zinc-100 hover:border-zinc-100 hover:text-zinc-800 dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        outline_active: 'border border-zinc-100 bg-zinc-100 text-zinc-800 shadow-xs',
        secondary: 'bg-zinc-500 text-zinc-200 shadow-xs cursor-pointer hover:bg-zinc-600',
        ghost: 'hover:bg-gray-90 hover:text-gray-10 dark:hover:bg-gray-90/50',
        link: 'text-blue-300 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-2.5 has-[>svg]:px-3',
        sm: 'rounded-md gap-1.5 py-1.5 px-4 has-[>svg]:px-2.5',
        lg: 'rounded-md px-8 has-[>svg]:px-4',
        icon: 'size-9',
        xs: 'rounded-md gap-1 py-1 px-4 has-[>svg]:px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
