'use client';
import { Switch } from '@bluewavelabs/prism-ui';
import { usePlayground } from './context';

const Output = () => {
  const { aiQuery, useAi, returnMarkdown, setUseAi, setAiQuery, setReturnMarkdown } = usePlayground();
  return (
    <div className="mt-10">
      <h2 className="text-xl text-gray-20 mb-6">Output</h2>
      <label htmlFor="use_ai" className="flex gap-2 text-sm mb-4">
        <Switch id="use_ai" checked={useAi} onCheckedChange={(val) => setUseAi(val)} size="sm" />
        <span>Make an AI query on the data retrieved. This will be applied to all pages.</span>
      </label>
      <textarea
        className="textfield w-full h-[230px] resize-none mb-4 font-mono text-sm text-gray-0"
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
    </div>
  );
};

export default Output;
