import { Switch } from '@bluewavelabs/prism-ui';
import { useScraper } from '@src/utils/context';

const UseAi = () => {
  const {
    requestState: { useAi, aiQuery },
    setRequestState,
  } = useScraper();
  return (
    <>
      <label htmlFor="use_ai" className="flex gap-2 text-sm mb-4">
        <Switch
          id="use_ai"
          checked={useAi}
          onCheckedChange={(val) => setRequestState((prev) => ({ ...prev, useAi: val }))}
          size="sm"
        />
        <span>Make an AI query on the data retrieved. This will be applied to all pages.</span>
      </label>
      <textarea
        className="textfield w-full h-[100px] resize-none mb-4 font-mono text-sm text-gray-0"
        placeholder="The prompt to be given to the LLM for extraction. Example: 'Extract the price info for every product and save it using our extraction schema'"
        value={aiQuery}
        onChange={(e) => setRequestState((prev) => ({ ...prev, aiQuery: e.target.value }))}
        disabled={!useAi}
      ></textarea>
    </>
  );
};

export default UseAi;
