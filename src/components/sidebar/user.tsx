"use client";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Menu from "./menu";
import style from "./sidebar.module.scss";

const UserBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={style.sidebar__menu}>
      <Avatar>
        <AvatarImage src='https://placecats.com/32/32' />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
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
