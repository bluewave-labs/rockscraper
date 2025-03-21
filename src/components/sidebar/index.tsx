import { Sidebar } from "../ui/sidebar";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import style from "./sidebar.module.scss";
import UserBar from "./user";

const AppSidebar = () => {
  return (
    <div className={style.sidebar}>
      <Sidebar>
        <Header />
        <Content />
        <Footer />
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
