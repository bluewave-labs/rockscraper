import { useScraper } from '@src/utils/context';
import { ExtractionSchema as ExtractionSchemaType, Request } from '@src/utils/interfaces';
import { useState } from 'react';

const ExtractionSchema = () => {
  const {
    requestState: { extractionSchema },
    setRequestState,
  } = useScraper();
  const [schema, setSchema] = useState<string>('');

  const updateSchema = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' && e.key !== ',') return;
    e.preventDefault();
    let error = false;
    const formattedSchema = schema.split(',').map((item) => {
      const booleanStarters = [
        'is',
        'has',
        'are',
        'was',
        'were',
        'will',
        'would',
        'should',
        'can',
        'could',
        'may',
        'might',
        'must',
        'should',
        'ought',
        'need',
        'want',
        'expect',
        'believe',
        'think',
        'know',
        'see',
        'hear',
        'smell',
        'taste',
        'touch',
      ];
      return {
        [item.trim()]: {
          type: booleanStarters.some((starter) => item.trim().startsWith(starter)) ? 'boolean' : 'string',
        },
      };
    });
    if (error) return;
    setRequestState(
      (prev) =>
        ({
          ...prev,
          extractionSchema: {
            type: 'object',
            properties: formattedSchema,
          },
        }) as unknown as Request<ExtractionSchemaType>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSchema(value);
  };

  return (
    <div className="mt-6">
      <h2 className="mb-4 flex items-center justify-between w-full font-medium text-gray-10">Extraction schema</h2>
      <textarea
        className="textfield w-full h-[100px] resize-none mb-4 font-mono text-sm text-gray-0"
        placeholder={`Enter values for the extraction schema separated by commas. Example: name, price, isActive, items`}
        value={schema}
        onChange={handleChange}
        onKeyDown={updateSchema}
      ></textarea>
    </div>
  );
};

export default ExtractionSchema;
