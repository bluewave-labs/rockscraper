'use client';
import { Card } from '@bluewavelabs/prism-ui';
import ApiKey from './apiKey';
import FineTune from './fineTune/fineTune';
import Nodes from './nodes';
import Output from './output';
import style from './playground.module.scss';
import Request from './request/request';
import QueryResult from './result/result';
import RightTitle from './rightTitle';
import Url from './url';

const Playground = () => {
  return (
    <div className={style.play}>
      <div className={style.play__left}>
        <Output />
        <Nodes />
        <FineTune />
      </div>
      <Card className={style.play__right}>
        <RightTitle />
        <ApiKey />
        <Url />
        <Request />
        <QueryResult />
      </Card>
    </div>
  );
};

export default Playground;
