import { Card } from "../ui/card";
import Checkbox from "../ui/checkbox";
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
        <div className='mt-10'>
          <h2 className={style.play__title}>Output</h2>
          <label htmlFor='use_ai' className={style["play__checkbox--label"]}>
            <Checkbox id='use_ai' />
            <span>
              Make an AI query on the data retrieved. This will be applied to
              all pages.
            </span>
          </label>
          <textarea
            className={style.play__textarea}
            placeholder='Your AI query here'
          ></textarea>
          <label
            htmlFor='return_markdown'
            className={style["play__checkbox--label"]}
          >
            <Checkbox id='return_markdown' />
            <span>
              Return Markdown data instead of HTML. You can download your data
              by clicking on Logs.
            </span>
          </label>
        </div>
      </div>
      <Card className={style.play__right}></Card>
    </div>
  );
};

export default Playground;
