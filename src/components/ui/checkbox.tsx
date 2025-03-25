import { cn } from "@src/lib/utils";

const Checkbox = () => {
  return (
    <input
      type='checkbox'
      className={cn(
        "w-0 h-0 relative",
        "after:w-5 after:h-5 after:absolute after:top-0 after:left-0 checked:after:bg-blue-500 after:border after:border-blue-500 after:rounded-sm after:cursor-pointer",
        "before:w-2 before:h-3.5 before:absolute before:top-[1px] before:left-[6px] checked:before:border-r-2 checked:before:border-b-2 before:border-blue-200 before:z-10 before:rotate-45",
      )}
    />
  );
};

export default Checkbox;
