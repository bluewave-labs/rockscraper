"use client";
import { cn } from "@src/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Select = ({
  selected,
  list,
  onChange,
  disabled = false,
}: {
  selected: string;
  list: string[];
  onChange: (val: string) => void;
  disabled?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [showAbove, setShowAbove] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        setShowAbove(spaceBelow < 200 && spaceAbove > spaceBelow);
      }
    };

    if (isOpen) {
      handlePosition();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => {
        if (disabled) {
          return;
        }
        setIsOpen(!isOpen);
      }}
      className='relative w-[204px]'
    >
      <p className='flex items-center justify-between border border-zinc-700 bg-zinc-900 py-2.5 px-3.5 rounded-md cursor-pointer'>
        {selected}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </p>
      <div
        className={cn(
          "absolute border border-zinc-700 bg-zinc-900 flex-col z-20 text-zinc-100 gap-0 w-full max-h-[200px] overflow-y-auto",
          isOpen ? "flex" : "hidden",
          showAbove ? "bottom-full rounded-t-sm" : "top-full rounded-b-sm"
        )}
      >
        {list.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              onChange(item);
              setIsOpen(false);
            }}
            className={cn(
              'py-2 px-3 text-sm w-full text-left hover:bg-zinc-800 cursor-pointer',
              selected === item ? "bg-zinc-800" : ""
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
