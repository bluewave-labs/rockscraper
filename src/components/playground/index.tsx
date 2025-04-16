'use client';
import { Button, Card } from '@bluewavelabs/prism-ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import ApiKey from './apiKey';
import Cookies from './cookies/cookies';
import Headers from './headers/headers';
import Nodes from './nodes';
import Output from './output';
import style from './playground.module.scss';
import Request from './request/request';
import QueryResult from './result/result';
import RightTitle from './rightTitle';
import Url from './url';

const Playground = () => {
  const [openFinetune, setOpenFinetune] = useState(false);

  return (
    <div className={style.play}>
      <div className={style.play__left}>
        <Output />
        <Nodes />
        <Button
          variant="link"
          className="text-xl text-gray-20 mb-6 mt-10 flex justify-between items-center cursor-pointer w-full has-[>svg]:p-0 p-0 hover:no-underline"
          onClick={() => setOpenFinetune(!openFinetune)}
        >
          Fine tune your query {openFinetune ? <ChevronUp /> : <ChevronDown />}
        </Button>
        {openFinetune ? (
          <>
            <Headers />
            <Cookies />
          </>
        ) : (
          <></>
        )}
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
