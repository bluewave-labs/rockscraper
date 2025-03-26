"use client";
import { X } from "lucide-react";
import { useState } from "react";
import style from "./cookies.module.scss";
import mainStyle from '../playground.module.scss'

const Cookies = () => {
  const [cookies, setCookies] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      if (!e.currentTarget.value.trim()) return;
      setCookies([...cookies, ...e.currentTarget.value.split(",")]);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className={style.play__cookies}>
      <label htmlFor='cookies' className={mainStyle["play__label"]}>
        Custom cookies{" "}
      </label>
      <div className={mainStyle.play__field}>
        {cookies.map((cookie, index) => (
          <span key={index} className={style["play__cookies--item"]}>
            {cookie}

            <X
              onClick={() => {
                setCookies(cookies.filter((_, i) => i !== index));
              }}
              className={style["play__cookies--delete"]}
              size={16}
            />
          </span>
        ))}
        <input
          placeholder='cookie-name=cookie-value'
          id={"cookies"}
          name='key'
          onKeyDown={handleKeyDown}
          className={style["play__cookies--input"]}
        />
      </div>
    </div>
  );
};

export default Cookies;
