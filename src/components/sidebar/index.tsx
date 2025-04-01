'use client';
import { Sidebar, SidebarRail } from '../ui/sidebar';
import Content from './content';
import Footer from './footer';
import Header from './header';
import style from './sidebar.module.scss';

const AppSidebar = () => {
  return (
    <div className={style.sidebar}>
      <Sidebar collapsible="icon">
        <Header />
        <Content />
        <Footer />
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
