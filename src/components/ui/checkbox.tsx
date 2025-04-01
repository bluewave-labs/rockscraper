import { cn } from "@src/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Checkbox = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type='checkbox'
      className={cn(
        "w-5 h-5 relative appearance-none rounded-sm",
        "after:w-full after:h-full after:absolute after:top-0 after:left-0 checked:after:bg-blue-500 checked:after:border-blue-500 after:border after:border-zinc-800 bg-zinc-800 after:rounded-sm after:cursor-pointer",
        "before:w-2 before:h-3.5 before:absolute before:top-[1px] before:left-[6px] checked:before:border-r-2 checked:before:border-b-2 before:border-blue-200 before:z-10 before:rotate-45",
        className
      )}
      {...props}
    />
  );
};

export default Checkbox;
