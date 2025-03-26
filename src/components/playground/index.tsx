import { Card } from "../ui/card";
import ApiKey from "./apiKey";
import Cookies from "./cookies";
import Headers from "./headers";
import Nodes from "./nodes";
import Output from "./output";
import style from "./playground.module.scss";

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
        <div className={style.play__container}>
          <h2 className={`${style.play__title} ${style.right}`}>
            Run your query
          </h2>
          <p className={style.play__cost}>
            <span>Cost</span>
            <span className={style["play__cost--flag"]}>0.002 UPT ($0.02)</span>
          </p>
        </div>
        <ApiKey />
      </Card>
    </div>
  );
};

export default Playground;
