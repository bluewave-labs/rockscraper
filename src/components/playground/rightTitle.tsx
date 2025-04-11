import style from "./playground.module.scss";

const RightTitle = () => {
  return (
    <div className={style.play__container}>
      <h2 className={`${style.play__title} ${style.right}`}>Run your query</h2>
      <p className={style.play__cost}>
        <span>Cost</span>
        <span className={style["play__cost--flag"]}>0.002 UPT ($0.02)</span>
      </p>
    </div>
  );
};

export default RightTitle;
