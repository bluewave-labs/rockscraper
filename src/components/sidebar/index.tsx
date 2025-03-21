import logo from "@src/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";
import style from "./sidebar.module.scss";
import UserBar from "./user";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link href='/' className={style.sidebar__logo}>
        <Image src={logo} alt='PrismCrawler' width={32} height={32} />
        PrismCrawler
      </Link>
      <Nav />
      <UserBar />
    </div>
  );
};

export default Sidebar;
