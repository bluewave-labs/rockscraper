import Checkbox from "../ui/checkbox";
import style from "./playground.module.scss";

const Output = () => {
  return (
    <div className='mt-10'>
      <h2 className={style.play__title}>Output</h2>
      <label htmlFor='use_ai' className={style["play__checkbox--label"]}>
        <Checkbox id='use_ai' />
        <span>
          Make an AI query on the data retrieved. This will be applied to all
          pages.
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
          Return Markdown data instead of HTML. You can download your data by
          clicking on Logs.
        </span>
      </label>
    </div>
  );
};

export default Output;
