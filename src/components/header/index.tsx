"use client";
import { RoutesType } from "@src/utils/interfaces";
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
        <Button asChild variant={"secondary"} style={{ padding: "10px 24px" }}>
          <a
            className={style["header__right--btn"]}
            href='https://discord.com/'
          >
            Discord
          </a>
        </Button>
        <Button asChild style={{ padding: "10px 24px" }}>
          <a
            className={style["header__right--btn"]}
            href='https://github.com/bluewave-labs/rockscraper'
          >
            Documentation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
