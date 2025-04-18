/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ReactNode, useEffect } from 'react';
import { useScraper } from '../../../../utils/context';
import HeaderField from './headerField';

const Headers = ({ renderTooltip }: { renderTooltip: (content: ReactNode, className?: string) => ReactNode }) => {
  const { requestState, setRequestState } = useScraper();
  const { headers } = requestState;

  useEffect(() => {
    if (headers.length === 0) {
      setRequestState((prev) => ({ ...prev, headers: [{ key: '', value: '', id: Date.now().toString() }] }));
    }
  }, []);

  return (
    <div className="mb-6 min-h-[96px] relative">
      <label htmlFor="headers" className="mb-2 flex items-center justify-between w-full font-medium text-gray-10">
        <span className="flex gap-2 items-center">
          Custom headers{' '}
          {renderTooltip(
            <p>
              Add custom headers to the request <br /> that will be applied to all pages
            </p>,
            'static'
          )}
        </span>

        <button
          onClick={() => {
            setRequestState((prev) => ({
              ...prev,
              headers: [...headers, { key: '', value: '', id: Date.now().toString() }],
            }));
          }}
          className="text-xl cursor-pointer"
        >
          +
        </button>
      </label>

      {headers?.map(({ key, value, id }) => <HeaderField key={id} id={id} headerKey={key} value={value} />)}
    </div>
  );
};

export default Headers;
