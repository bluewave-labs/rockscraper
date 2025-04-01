import { cn } from '@src/lib/utils';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

const Checkbox = ({
  className,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return <input type="checkbox" className={cn('checkbox', className)} {...props} />;
};

export default Checkbox;
