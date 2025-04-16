'use client';
import { Switch } from '@bluewavelabs/prism-ui';
import { cn } from '@src/lib/utils';
import { usePlayground } from './context';

const Output = () => {
  const {
    aiQuery,
    useAi,
    returnMarkdown,
    setUseAi,
    setAiQuery,
    setReturnMarkdown,
    llmMarkdown,
    llmQuery,
    setLlmMarkdown,
    setLlmQuery,
  } = usePlayground();
  return (
    <div>
      <h2 className="text-xl text-gray-20 mb-6">Extraction method</h2>
      <label htmlFor="use_ai" className="flex gap-2 text-sm mb-4">
        <Switch id="use_ai" checked={useAi} onCheckedChange={(val) => setUseAi(val)} size="sm" />
        <span>Make an AI query on the data retrieved. This will be applied to all pages.</span>
      </label>
      <textarea
        className="textfield w-full h-[100px] resize-none mb-4 font-mono text-sm text-gray-0"
        placeholder="Your AI query here"
        value={aiQuery}
        onChange={(e) => setAiQuery(e.target.value)}
        disabled={!useAi}
      ></textarea>
      <label htmlFor="return_markdown" className="flex gap-2 text-sm mb-4">
        <Switch
          id="return_markdown"
          checked={returnMarkdown}
          onCheckedChange={(val) => setReturnMarkdown(val)}
          size="sm"
        />
        <span>Return Markdown data instead of HTML. You can download your data by clicking on Logs.</span>
      </label>
      {returnMarkdown ? (
        <>
          <label
            htmlFor="llm_markdown"
            className={cn('flex gap-2 text-sm mb-4', !returnMarkdown ? 'opacity-50 pointer-events-none' : '')}
          >
            <Switch id="llm_markdown" checked={llmMarkdown} onCheckedChange={(val) => setLlmMarkdown(val)} size="sm" />
            <span>Use LLM to generate the markdown.</span>
          </label>
          <textarea
            className="textfield w-full h-[100px] resize-none mb-4 font-mono text-sm text-gray-0"
            placeholder="Your LLM query here"
            value={llmQuery}
            onChange={(e) => setLlmQuery(e.target.value)}
            disabled={!llmMarkdown}
          ></textarea>
        </>
      ) : null}
    </div>
  );
};

export default Output;
