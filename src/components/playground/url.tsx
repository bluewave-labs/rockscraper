'use client';
import { Input } from '../ui/input';
import { usePlayground } from './context';
import style from './playground.module.scss';

const Url = () => {
  const { url, setUrl } = usePlayground();
  return (
    <label htmlFor="url">
      <span className={style.play__label}>URL</span>
      <Input id="url" placeholder="https://" value={url} onChange={(e) => setUrl(e.target.value)} />
    </label>
  );
};

export default Url;
