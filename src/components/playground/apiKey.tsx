'use client';
import { Input } from '@bluewavelabs/prism-ui';
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
      <Input
        value={apiKey}
        readOnly
        variant="icon"
        disabled
        iconRight={
          <button className="cursor-pointer" onClick={handleClick} aria-label="Copy API key to clipboard">
            <Copy size={24} />
          </button>
        }
      />
    </div>
  );
};

export default ApiKey;
