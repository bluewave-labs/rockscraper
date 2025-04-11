'use client';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { usePlayground } from './context';
import style from './playground.module.scss';

const ApiKey = () => {
  const { apiKey } = usePlayground();
  const handleClick = () => {
    navigator.clipboard.writeText(apiKey);
    toast('API key copied to clipboard');
  };
  return (
    <div className={style.play__key}>
      <h3 className={style.play__label}>Your API key</h3>
      <p className="textfield flex gap-2 opacity-50">
        <span className="overflow-x-auto grow">{apiKey}</span>
        <button className="cursor-pointer" onClick={handleClick} aria-label="Copy API key to clipboard">
          <Copy size={24} />
        </button>
      </p>
    </div>
  );
};

export default ApiKey;
