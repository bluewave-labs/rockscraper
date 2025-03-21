"use client";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Menu from "./menu";
import style from "./sidebar.module.scss";

const UserBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={style.sidebar__menu}>
      <Image
        src='https://placecats.com/32/32'
        alt='Cat'
        width={32}
        height={32}
        className={style["sidebar__menu--avatar"]}
      />
      <div className={style["sidebar__menu--info"]}>
        <h3 className={style["sidebar__menu--name"]}>John Doe</h3>
        <p className={style["sidebar__menu--email"]}>john.doe@email.com</p>
      </div>
      <button className={style["sidebar__menu--icon"]} onClick={handleOpen}>
        <ChevronsUpDown size={16} />
      </button>
      {open && <Menu />}
    </div>
  );
};

export default UserBar;
