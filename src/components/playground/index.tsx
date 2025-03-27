import { Card } from "../ui/card";
import ApiKey from "./apiKey";
import Cookies from "./cookies/cookies";
import Headers from "./headers/headers";
import Nodes from "./nodes";
import Output from "./output";
import style from "./playground.module.scss";
import Request from "./request/request";
import RightTitle from "./rightTitle";
import Url from "./url";

const Playground = () => {
  return (
    <div className={style.play}>
      <div className={style.play__left}>
        <h2 className={style.play__title}>Fine tune your query</h2>
        <Headers />
        <Cookies />
        <Output />
        <Nodes />
      </div>
      <Card className={style.play__right}>
        <RightTitle />
        <ApiKey />
        <Url />
        <Request />
      </Card>
    </div>
  );
};

export default Playground;
