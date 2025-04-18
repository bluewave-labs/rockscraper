import style from "./content.module.scss";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={`glassy-background-light ${style.content}`}>{children}</div>;
};

export default Content;
