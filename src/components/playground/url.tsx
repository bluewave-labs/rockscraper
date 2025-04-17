'use client';
import { Input } from '@bluewavelabs/prism-ui';
import { useScraper } from '../../utils/context';

const Url = () => {
  const {
    requestState: { url },
    setRequestState,
  } = useScraper();
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
