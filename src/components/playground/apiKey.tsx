"use client";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import style from "./playground.module.scss";
import { usePlayground } from "./context";

const ApiKey = () => {
  const { apiKey } = usePlayground()
  const handleClick = () => {
    navigator.clipboard.writeText(apiKey);
    toast("API key copied to clipboard");
  };
  return (
    <div className={style.play__key}>
      <h3 className={style.play__label}>Your API key</h3>
      <p className={`${style.play__field} ${style.key}`}>
        <span>{apiKey}</span>
        <button className='cursor-pointer' onClick={handleClick}>
          <Copy size={24} />
        </button>
      </p>
    </div>
  );
};

export default ApiKey;
