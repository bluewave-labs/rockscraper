'use client';
import { Input } from '@bluewavelabs/prism-ui';
import { usePlayground } from './context';

const Url = () => {
  const { url, setUrl } = usePlayground();
  return (
    <Input
      id="url"
      placeholder="https://"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      label="URL"
      variant="label-out"
    />
  );
};

export default Url;
