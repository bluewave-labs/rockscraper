'use client';
import { Button } from '@src/components/ui/button';
import codeToHtml from '@src/utils/codeToHtml';
import dummy_data from '@src/utils/dummy_data';
import { useEffect, useState } from 'react';
import mainStyle from '../playground.module.scss';
import style from './result.module.scss';

const QueryResult = () => {
  const [data, setData] = useState('');

  const buildData = async () => {
    const html = await codeToHtml(JSON.stringify(dummy_data, null, 2));
    setData(html);
  };

  useEffect(() => {
    buildData();
  }, []);

  return (
    <div>
      <h2 className={mainStyle.play__title}>Fine tune your query</h2>
      <div className={style.play__content}>
        <div className={style['play__content--info']}>
          <p className={style['play__content--flag']}>200 (success)</p>
          <p className={style['play__content--time']}>Data retrieved in 2.4 seconds</p>
        </div>
        <div className={style['play__content--result']}>
          <p className={style['play__content--result-text']} dangerouslySetInnerHTML={{ __html: data }}></p>

          <Button className={style['play__content--copy']}>Copy to clipboard</Button>
        </div>
      </div>
    </div>
  );
};

export default QueryResult;
