'use client';
import { Button } from '@src/components/ui/button';
import mainStyle from '../playground.module.scss';
import style from './result.module.scss';
import dummy_data from '@src/utils/dummy_data';

const QueryResult = () => {

  return (
    <div>
      <h2 className={mainStyle.play__title}>Fine tune your query</h2>
      <div className={style.play__content}>
        <div className={style['play__content--info']}>
          <p className={style['play__content--flag']}>200 (success)</p>
          <p className={style['play__content--time']}>Data retrieved in 2.4 seconds</p>
        </div>
        <div className={style['play__content--result']}>
          <p className={style['play__content--result-text']}>
            {JSON.stringify(dummy_data, null, 2)}
          </p>
          
          <Button className={style['play__content--copy']}>Copy to clipboard</Button>
        </div>
      </div>
    </div>
  );
};

export default QueryResult;
