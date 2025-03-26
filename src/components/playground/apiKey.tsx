"use client";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import style from "./playground.module.scss";

const ApiKey = () => {
  const handleClick = () => {
    navigator.clipboard.writeText("88aede9aedfad9e9ef9ef9ade9fa8e0fad");
    toast("API key copied to clipboard");
  };
  return (
    <div className={style.play__key}>
      <h3 className={style.play__label}>Your API key</h3>
      <p className={`${style.play__field} ${style.key}`}>
        <span>88aede9aedfad9e9ef9ef9ade9fa8e0fad</span>
        <button className='cursor-pointer' onClick={handleClick}>
          <Copy size={24} />
        </button>
      </p>
    </div>
  );
};

export default ApiKey;
