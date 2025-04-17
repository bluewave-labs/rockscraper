import { Button, Input } from '@bluewavelabs/prism-ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useScraper } from '../../../utils/context';
import Cookies from './cookies/cookies';
import Headers from './headers/headers';

const FineTune = () => {
  const {
    requestState: { maxDepth, maxPages },
    setRequestState,
  } = useScraper();
  const [openFinetune, setOpenFinetune] = useState(false);
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
          <Headers />
          <Cookies />
          <div className="flex gap-4">
            <Input
              label="Maximum pages"
              value={maxPages}
              onChange={(e) => setRequestState((prev) => ({ ...prev, maxPages: parseInt(e.target.value ?? '0') }))}
              variant="label-out"
              type="number"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Input
              label="Maximum depth"
              value={maxDepth}
              onChange={(e) => setRequestState((prev) => ({ ...prev, maxDepth: parseInt(e.target.value ?? '0') }))}
              variant="label-out"
              type="number"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default FineTune;
