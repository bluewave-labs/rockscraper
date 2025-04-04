'use client';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { usePlayground } from '../context';
import mainStyle from '../playground.module.scss';
import style from './cookies.module.scss';

const Cookies = () => {
  const { cookies, setCookies } = usePlayground();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' || e.key === ' ') {
      e.preventDefault();
      const cookieValue = e.currentTarget.value.trim();
      if (!cookieValue) return;
      if (!cookieValue.includes('=')) {
        toast.error('Cookie must be in format: cookie-name=cookie-value');
        return;
      }
      setCookies([...cookies, ...cookieValue.split(',')]);
      e.currentTarget.value = '';
    }
    if (e.key === 'Backspace') {
      if (e.currentTarget.value === '') {
        setCookies(cookies.slice(0, -1));
      }
    }
  };

  return (
    <div className={style.play__cookies}>
      <label htmlFor="cookies" className={mainStyle['play__label']}>
        Custom cookies{' '}
      </label>
      <div className={"textfield flex flex-wrap gap-2"}>
        {cookies.map((cookie, index) => (
          <span key={index} className="flex items-center gap-1 border border-gray-0/20 rounded-sm px-2 py-1">
            {cookie}

            <X
              onClick={() => {
                setCookies(cookies.filter((_, i) => i !== index));
              }}
              className="cursor-pointer"
              size={16}
            />
          </span>
        ))}
        <input
          placeholder="cookie-name=cookie-value"
          id={'cookies'}
          name="key"
          onKeyDown={handleKeyDown}
          className={style['play__cookies--input']}
        />
      </div>
    </div>
  );
};

export default Cookies;
