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
      className='select'
    >
      <p className='select-selected'>
        {selected}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </p>
      <div
        className={cn(
          "select-container",
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
              'select-option',
              selected === item ? "bg-gray-0/12" : ""
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
