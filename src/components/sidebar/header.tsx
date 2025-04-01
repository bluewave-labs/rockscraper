import logo from '@src/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarHeader, SidebarTrigger, useSidebar } from '../ui/sidebar';
import style from './sidebar.module.scss';

const Header = () => {
  const { open, isMobile, openMobile } = useSidebar();

  return (
    <SidebarHeader>
      {open || (isMobile && openMobile) ? (
        <Link href="/" className={style.sidebar__logo}>
          <Image src={logo} alt="PrismCrawler" width={32} height={32} />
          PrismCrawler
        </Link>
      ) : null}
      <SidebarTrigger />
    </SidebarHeader>
  );
};

export default Header;
