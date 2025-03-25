import logo from "@src/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { SidebarHeader, useSidebar } from "../ui/sidebar";
import style from "./sidebar.module.scss";

const Header = () => {
  const { open } = useSidebar();
  return (
    <SidebarHeader>
      <Link href='/' className={style.sidebar__logo}>
        <Image src={logo} alt='PrismCrawler' width={32} height={32} />
        {open ? "PrismCrawler" : ""}
      </Link>
    </SidebarHeader>
  );
};

export default Header;
