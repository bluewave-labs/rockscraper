'use client';
import { useScraper } from '@src/utils/context';
import { useEffect } from 'react';
import style from './content.module.scss';

const Content = ({ children, token }: { children: React.ReactNode; token: string }) => {
  const { setRequestState } = useScraper();

  useEffect(() => {
    if (token) {
      setRequestState((prev) => ({
        ...prev,
        apiKey: token,
      }));
    }
  }, [token]);

  return <div className={`${style.content}`}>{children}</div>;
};

export default Content;
