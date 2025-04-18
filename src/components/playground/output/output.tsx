'use client';
import LlmFilter from './llmFilter';
import UseAi from './useAi';

const Output = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl text-gray-20 mb-6">Extraction method</h2>
      <UseAi />
      <LlmFilter />
    </div>
  );
};

export default Output;
