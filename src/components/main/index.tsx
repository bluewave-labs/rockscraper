import Content from "../content";
import Header from "../header";
import Sidebar from "../sidebar";
import style from "./main.module.scss";

const Main = () => {
  return (
    <div className={style.main}>
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
};

export default Main;
