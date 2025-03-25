import { Card } from "../ui/card";
import Cookies from "./cookies";
import Headers from "./headers";
import style from "./playground.module.scss";

const Playground = () => {
  return (
    <div className={style.play}>
      <div className={style.play__left}>
        <h2 className={style.play__title}>Fine tune your query</h2>
        <Headers />
        <Cookies />
      </div>
      <Card className={style.play__right}></Card>
    </div>
  );
};

export default Playground;
