'use client';
import { Button } from '@src/components/ui/button';
import codeToHtml from '@src/utils/codeToHtml';
import dummy_data from '@src/utils/dummy_data';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import mainStyle from '../playground.module.scss';
import style from './result.module.scss';

const QueryResult = () => {
  const [formattedData, setFormattedData] = useState('');
  const [data] = useState<any>();

  const buildData = async () => {
    const html = await codeToHtml(JSON.stringify(data, null, 2));
    setFormattedData(html);
  };

  useEffect(() => {
    buildData();
  }, []);

  return (
    <div>
      <h2 className={mainStyle.play__title}>Your query result</h2>
      <div className={style.play__content}>
        <div className={style['play__content--info']}>
          <p className={`${style['play__content--flag']} ${style.success}`}>200 (success)</p>
          <p className={style['play__content--time']}>Data retrieved in 2.4 seconds</p>
        </div>
        <div className={style['play__content--result']}>
          <p className={style['play__content--result-text']} dangerouslySetInnerHTML={{ __html: formattedData }}></p>

          <Button
            className={style['play__content--copy']}
            onClick={() => {
              if (!data) return;
              navigator.clipboard.writeText(JSON.stringify(data, null, 2));
              toast('Response data copied to clipboard');
            }}
          >
            Copy to clipboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QueryResult;
