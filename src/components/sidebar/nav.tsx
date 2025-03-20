"use client";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./sidebar.module.scss";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className={style.sidebar__nav}>
      <h2 className={style["sidebar__nav--title"]}>PLATFORM</h2>
      <Link
        href='/'
        className={`${style["sidebar__nav--link"]} ${
          pathname === "/" ? style.active : ""
        }`}
      >
        <SquareTerminal size={16} />
        Dashboard
      </Link>
      <Link
        href='/playground'
        className={`${style["sidebar__nav--link"]} ${
          pathname === "/playground" ? style.active : ""
        }`}
      >
        <Bot size={16} />
        Playground
      </Link>
      <Link
        href='/logs-data'
        className={`${style["sidebar__nav--link"]} ${
          pathname === "/logs-data" ? style.active : ""
        }`}
      >
        <BookOpen size={16} />
        Logs & data
      </Link>
      <Link
        href='/settings'
        className={`${style["sidebar__nav--link"]} ${
          pathname === "/settings" ? style.active : ""
        }`}
      >
        <Settings2 size={16} />
        Settings
      </Link>
    </div>
  );
};

export default Nav;
