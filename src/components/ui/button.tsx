import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@src/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800",
  {
    variants: {
      variant: {
        default: 'bg-blue-300 text-blue-600 shadow-xs cursor-pointer hover:bg-blue-400',
        action:
          'bg-purple-700 text-purple-200 shadow-xs cursor-pointer hover:bg-purple-800 focus-visible:ring-purple-700/20',
        destructive:
          'bg-red-800 text-rose-100 shadow-xs cursor-pointer hover:bg-red-900 focus-visible:ring-red-800/20',
        outline:
          'border border-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-60/20',
        outline_active: 'border border-gray-20 bg-gray-20 text-gray-80 shadow-xs',
        secondary: 'bg-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-70',
        ghost: 'hover:bg-gray-90 hover:text-gray-10 dark:hover:bg-gray-90/50',
        link: 'text-blue-300 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-2.5 has-[>svg]:px-3',
        sm: 'gap-1.5 py-1.5 px-4 has-[>svg]:px-2.5',
        lg: 'px-8 has-[>svg]:px-4',
        icon: 'size-9',
        xs: 'gap-1 py-1 px-4 has-[>svg]:px-2',
      },
      rounded: {
        default: 'rounded-[100px]',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, rounded, className }))} {...props} />;
}

export { Button, buttonVariants };
