"use client";
import clsx from "clsx";
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
        className={clsx(style["sidebar__nav--link"], {
          [style.active]: pathname === "/",
        })}
      >
        <SquareTerminal size={16} />
        Dashboard
      </Link>
      <Link
        href='/playground'
        className={clsx(style["sidebar__nav--link"], {
          [style.active]: pathname === "/playground",
        })}
      >
        <Bot size={16} />
        Playground
      </Link>
      <Link
        href='/logs-data'
        className={clsx(style["sidebar__nav--link"], {
          [style.active]: pathname === "/logs-data",
        })}
      >
        <BookOpen size={16} />
        Logs & data
      </Link>
      <Link
        href='/settings'
        className={clsx(style["sidebar__nav--link"], {
          [style.active]: pathname === "/settings",
        })}
      >
        <Settings2 size={16} />
        Settings
      </Link>
    </div>
  );
};

export default Nav;
