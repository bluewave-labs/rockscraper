/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect } from 'react';
import { usePlayground } from '../context';
import mainStyle from '../playground.module.scss';
import HeaderField from './headerField';
import style from './headers.module.scss';

const Headers = () => {
  const { headers, setHeaders } = usePlayground();

  useEffect(() => {
    if (headers.length === 0) {
      setHeaders([{ key: '', value: '', id: Date.now().toString() }]);
    }
  }, []);

  return (
    <div className={style.play__headers}>
      <label htmlFor="headers" className={mainStyle['play__label']}>
        Custom headers{' '}
        <button
          onClick={() => {
            console.log('headers', headers);
            setHeaders([...headers, { key: '', value: '', id: Date.now().toString() }]);
          }}
          className={style['play__headers--add']}
        >
          +
        </button>
      </label>

      {headers?.map(({ key, value, id }) => (
        <HeaderField key={id} id={id} headerKey={key} value={value} />
      ))}
    </div>
  );
};

export default Headers;
