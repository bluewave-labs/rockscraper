'use client';
import { X } from 'lucide-react';
import { ReactNode } from 'react';
import { toast } from 'sonner';
import { useScraper } from '../../../../utils/context';
import PillInput from '@src/components/ui/pillInput';

const Cookies = ({ renderTooltip }: { renderTooltip: (content: ReactNode, className?: string) => ReactNode }) => {
  const { requestState, setRequestState } = useScraper();
  const { cookies } = requestState;

  return (
      <PillInput
        id="cookies"
        label="Custom cookies"
        onChange={(values) => setRequestState((prev) => ({ ...prev, cookies: values }))}
        placeholder="cookie-name=cookie-value"
        renderTooltip={renderTooltip}
        initialValues={cookies}
        tooltipContent={
          <p>
            Add custom cookies to the request <br /> that will be applied to all pages
          </p>
        }
      />

  );
};

export default Cookies;
