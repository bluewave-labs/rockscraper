import { cn } from "@src/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Radio = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type='radio'
      className={cn(
        "w-5 h-5 relative appearance-none rounded-full",
        "after:rounded-full after:w-5 after:h-5 after:absolute after:top-0 after:left-0 checked:after:bg-blue-500 checked:after:border-blue-500 after:border after:border-zinc-400 after:cursor-pointer",
        "before:w-2 before:h-2 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 checked:before:bg-blue-200 before:z-10 before:rounded-full",
        className
      )}
      {...props}
    />
  );
};

export default Radio;
