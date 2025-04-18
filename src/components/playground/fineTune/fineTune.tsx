import { Button, Input, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@bluewavelabs/prism-ui';
import { cn } from '@src/lib/utils';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { useScraper } from '../../../utils/context';
import Cookies from './cookies/cookies';
import ExtractionSchema from './extractionSchema';
import Headers from './headers/headers';

const FineTune = () => {
  const {
    requestState: { maxDepth, maxPages },
    setRequestState,
  } = useScraper();
  const [openFinetune, setOpenFinetune] = useState(false);

  const renderTooltip = (content: ReactNode, className?: string) => (
    <div className={cn('absolute right-0 top-1', className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info size={16} />
          </TooltipTrigger>
          <TooltipContent>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );

  return (
    <>
      <Button
        variant="link"
        className="text-xl text-gray-20 mb-6 mt-10 flex justify-between items-center cursor-pointer w-full has-[>svg]:p-0 p-0 hover:no-underline"
        onClick={() => setOpenFinetune(!openFinetune)}
      >
        Fine tune your query {openFinetune ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {openFinetune ? (
        <>
          <Headers renderTooltip={renderTooltip} />
          <Cookies renderTooltip={renderTooltip} />
          <div className="flex gap-4">
            <div className="flex gap-2 items-center relative w-full">
              <Input
                label="Maximum pages"
                value={maxPages}
                onChange={(e) => setRequestState((prev) => ({ ...prev, maxPages: parseInt(e.target.value ?? '0') }))}
                variant="label-out"
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {renderTooltip(
                <p>
                  The maximum number of <br />
                  pages to scrape
                </p>
              )}
            </div>
            <div className="flex gap-2 items-center relative w-full">
              <Input
                label="Maximum depth"
                value={maxDepth}
                onChange={(e) => setRequestState((prev) => ({ ...prev, maxDepth: parseInt(e.target.value ?? '0') }))}
                variant="label-out"
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {renderTooltip(
                <p>
                  The maximum depth to scrape <br />
                  starting from the original URL
                </p>
              )}
            </div>
          </div>
          <ExtractionSchema renderTooltip={renderTooltip} />
        </>
      ) : null}
    </>
  );
};

export default FineTune;
