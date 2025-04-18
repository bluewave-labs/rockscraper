import { X } from 'lucide-react';
import { ReactNode, useState } from 'react';

const PillInput = ({
  renderTooltip,
  tooltipContent,
  placeholder,
  id,
  label,
  onChange,
  initialValues,
}: {
  renderTooltip?: (content: ReactNode, className?: string) => ReactNode;
  tooltipContent?: ReactNode;
  placeholder?: string;
  id: string;
  label: string;
  onChange: (values: string[]) => void;
  initialValues?: string[];
}) => {
  const [values, setValues] = useState<string[]>(initialValues ?? []);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const currValue = e.currentTarget.value.trim();
      if (!currValue) return;
      setValues([...values, currValue]);
      e.currentTarget.value = '';
    }
    if (e.key === 'Backspace') {
      if (e.currentTarget.value === '') {
        setValues(values.slice(0, -1));
      }
    }
    onChange(values);
  };

  return (
    <div className="mb-6">
      <label htmlFor="cookies" className="mb-4 flex items-center gap-2 w-full font-medium text-gray-10 text-md">
        {label} {renderTooltip?.(tooltipContent, 'static')}
      </label>
      <div className={'textfield flex flex-wrap gap-2'}>
        {values.map((value, index) => (
          <span key={index} className="flex items-center gap-1 border border-gray-0/20 rounded-sm px-2 py-1">
            {value}

            <X
              onClick={() => {
                setValues(values.slice(0, -1));
              }}
              className="cursor-pointer"
              size={16}
            />
          </span>
        ))}
        <input
          placeholder={placeholder}
          id={id}
          name="key"
          onKeyDown={handleKeyDown}
          className="grow outline-none focus:border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PillInput;
