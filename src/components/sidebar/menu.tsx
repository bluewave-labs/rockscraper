import Link from "next/link";
import style from "./sidebar.module.scss";

const Menu = () => {
  return (
    <div
      className={style["sidebar__menu--dropdown"]}
      style={{ position: "absolute", bottom: "100%" }}
    >
      <Link href='/settings'>Settings</Link>
      <Link href='/logs'>Logout</Link>
    </div>
  );
};

export default Menu;
