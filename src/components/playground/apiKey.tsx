'use client';
import { Input } from '@bluewavelabs/prism-ui';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useScraper } from '../../utils/context';

const ApiKey = () => {
  const {
    requestState: { apiKey },
  } = useScraper();
  const handleClick = () => {
    navigator.clipboard.writeText(apiKey);
    toast('API key copied to clipboard');
  };
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 w-full font-medium text-gray-10 text-md">Your API key</h3>
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
