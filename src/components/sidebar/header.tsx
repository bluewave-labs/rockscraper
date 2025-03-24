import logo from "@src/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { SidebarHeader } from "../ui/sidebar";
import style from "./sidebar.module.scss";

const Header = () => {
  return (
    <SidebarHeader>
      <Link href='/' className={style.sidebar__logo}>
        <Image src={logo} alt='PrismCrawler' width={32} height={32} />
        PrismCrawler
      </Link>
    </SidebarHeader>
  );
};

export default Header;
