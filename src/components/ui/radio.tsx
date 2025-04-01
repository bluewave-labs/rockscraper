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
        "radio",
        className
      )}
      {...props}
    />
  );
};

export default Radio;
