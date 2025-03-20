import style from "./content.module.scss";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.content}>{children}</div>;
};

export default Content;
