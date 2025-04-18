import PillInput from '@src/components/ui/pillInput';
import { useScraper } from '@src/utils/context';
import { ExtractionSchema as ExtractionSchemaType, Request } from '@src/utils/interfaces';
import { ReactNode, useEffect, useState } from 'react';

const ExtractionSchema = ({
  renderTooltip,
}: {
  renderTooltip: (content: ReactNode, className?: string) => ReactNode;
}) => {
  const {
    requestState: { extractionSchema },
    setRequestState,
  } = useScraper();
  const [schema, setSchema] = useState<string[]>();

  useEffect(() => {
    const parsedSchema = schema?.map((value) => {
      const [key, type] = value.split('=');
      return {
        [key]: {
          type,
        },
      };
    });
    setRequestState((prev) => ({ ...prev, extractionSchema: {
      ...prev.extractionSchema,
          properties: parsedSchema,
        },
      }) as unknown as Request<ExtractionSchemaType>);
  }, [schema]);

  return (
    <div className="mt-6">
      <PillInput
        id="extractionSchema"
        label="Extraction schema"
        onChange={(values) => setSchema(values)}
        placeholder={`Values for the extraction schema.`}
        initialValues={schema}
        renderTooltip={renderTooltip}
        tooltipContent={
          <p>
            Add values and it&apos;s type for the extraction schema. <br />
            Example: name=string, price=number, isActive=boolean, items=array
          </p>
        }
      />
    </div>
  );
};

export default ExtractionSchema;
