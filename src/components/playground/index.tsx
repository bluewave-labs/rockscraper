import { Card } from "../ui/card";
import ApiKey from "./apiKey";
import Cookies from "./cookies";
import Headers from "./headers";
import Nodes from "./nodes";
import Output from "./output";
import style from "./playground.module.scss";
import Request from "./request";
import RightTitle from "./rightTitle";

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
        <Request />
      </Card>
    </div>
  );
};

export default Playground;
