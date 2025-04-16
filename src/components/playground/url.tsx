'use client';
import { Input } from '@bluewavelabs/prism-ui';
import { usePlayground } from './context';

const Url = () => {
  const {
    requestState: { url },
    setRequestState,
  } = usePlayground();
  return (
    <Input
      id="url"
      placeholder="https://"
      value={url}
      onChange={(e) => setRequestState((prev) => ({ ...prev, url: e.target.value }))}
      label="URL"
      variant="label-out"
    />
  );
};

export default Url;
