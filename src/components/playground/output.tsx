"use client";
import Checkbox from "../ui/checkbox";
import { usePlayground } from "./context";
import style from "./playground.module.scss";

const Output = () => {
  const {
    aiQuery,
    useAi,
    returnMarkdown,
    setUseAi,
    setAiQuery,
    setReturnMarkdown,
  } = usePlayground();
  return (
    <div className='mt-10'>
      <h2 className={style.play__title}>Output</h2>
      <label htmlFor='use_ai' className={style["play__checkbox--label"]}>
        <Checkbox
          id='use_ai'
          checked={useAi}
          onChange={(e) => setUseAi(e.target.checked)}
        />
        <span>
          Make an AI query on the data retrieved. This will be applied to all
          pages.
        </span>
      </label>
      <textarea
        className={style.play__textarea}
        placeholder='Your AI query here'
        value={aiQuery}
        onChange={(e) => setAiQuery(e.target.value)}
        disabled={!useAi}
      ></textarea>
      <label
        htmlFor='return_markdown'
        className={style["play__checkbox--label"]}
      >
        <Checkbox
          id='return_markdown'
          checked={returnMarkdown}
          onChange={(e) => setReturnMarkdown(e.target.checked)}
        />
        <span>
          Return Markdown data instead of HTML. You can download your data by
          clicking on Logs.
        </span>
      </label>
    </div>
  );
};

export default Output;
