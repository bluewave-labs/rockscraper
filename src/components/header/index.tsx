"use client";
import { RoutesType } from "@src/utils/interfaces";
import { DISCORD, DOCUMENTATION } from "@src/utils/links";
import routeDescription from "@src/utils/route-description";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import style from "./header.module.scss";

const Header = () => {
  let pathname = usePathname();

  if (pathname === "/") {
    pathname = "/dashboard";
  }

  const info = routeDescription[pathname.replace("/", "") as RoutesType] || {
    title: "Not Found",
    description: "This page doesn't exist",
  };

  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <h1 className={style["header__left--title"]}>{info.title}</h1>
        <p className={style["header__left--desc"]}>{info.description}</p>
      </div>
      <div className={style.header__right}>
        <Button asChild variant={"secondary"}>
          <a className={style["header__right--btn"]} href={DISCORD}>
            Discord
          </a>
        </Button>
        <Button asChild>
          <a className={style["header__right--btn"]} href={DOCUMENTATION}>
            Documentation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
