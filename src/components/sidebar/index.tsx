"use client";
import { Sidebar, SidebarTrigger, useSidebar } from "../ui/sidebar";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import style from "./sidebar.module.scss";

const AppSidebar = () => {
  const { isMobile } = useSidebar();
  return (
    <div className={style.sidebar}>
      <Sidebar collapsible='icon'>
        <Header />
        <Content />
        <Footer />
      </Sidebar>
      {isMobile ? <SidebarTrigger /> : null}
    </div>
  );
};

export default AppSidebar;
