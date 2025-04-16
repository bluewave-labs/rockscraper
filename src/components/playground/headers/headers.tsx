/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect } from 'react';
import { usePlayground } from '../context';
import HeaderField from './headerField';

const Headers = () => {
  const { headers, setHeaders } = usePlayground();

  useEffect(() => {
    if (headers.length === 0) {
      setHeaders([{ key: '', value: '', id: Date.now().toString() }]);
    }
  }, []);

  return (
    <div className="mb-6 min-h-[96px]">
      <label htmlFor="headers" className="mb-2 flex items-center justify-between w-full font-medium text-gray-10">
        Custom headers{' '}
        <button
          onClick={() => {
            console.log('headers', headers);
            setHeaders([...headers, { key: '', value: '', id: Date.now().toString() }]);
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
