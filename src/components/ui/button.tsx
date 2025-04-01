import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@src/lib/utils';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      default: 'button-default',
      action: 'button-action',
      destructive: 'button-destructive',
      outline: 'button-outline',
      outline_active: 'button-outline_active',
      secondary: 'button-secondary',
      ghost: 'button-ghost',
      link: 'button-link',
    },
    size: {
      default: 'button-size-default',
      sm: 'button-sm',
      lg: 'button-lg',
      icon: 'button-icon',
      xs: 'button-xs',
    },
    rounded: {
      default: 'rounded-[100px]',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
  },
});

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
