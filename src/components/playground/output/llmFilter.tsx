import { cn, Switch } from '@bluewavelabs/prism-ui';
import { useScraper } from '@src/utils/context';

const LlmFilter = () => {
  const {
    requestState: { llmMarkdown, llmQuery },
    setRequestState,
  } = useScraper();
  return (
    <>
      <label htmlFor="llm_markdown" className={cn('flex gap-2 text-sm mb-4')}>
        <Switch
          id="llm_markdown"
          checked={llmMarkdown}
          onCheckedChange={(val) => setRequestState((prev) => ({ ...prev, llmMarkdown: val }))}
          size="sm"
        />
        <span>Use LLM to generate the markdown.</span>
      </label>
      <textarea
        className="textfield w-full h-[100px] resize-none mb-4 font-mono text-sm text-gray-0"
        placeholder="Prompt to be passed to the LLM, to improve the quality of the markdown. Example: 'Remove Sidebar and don't include meaningless text and old prices for the products'"
        value={llmQuery}
        onChange={(e) => setRequestState((prev) => ({ ...prev, llmQuery: e.target.value }))}
        disabled={!llmMarkdown}
      ></textarea>
    </>
  );
};

export default LlmFilter;
