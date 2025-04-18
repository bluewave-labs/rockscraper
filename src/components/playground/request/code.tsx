import { Button, useIsMobile } from '@bluewavelabs/prism-ui';
import codeToHtml from '@src/utils/codeToHtml';
import { CodeByLanguage } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'sonner';
import { useScraper } from '../../../utils/context';
import style from './request.module.scss';

const Code = ({ selectedCode }: { selectedCode: CodeByLanguage }) => {
  const { requestState, startCrawl } = useScraper();
  const {
    headers,
    cookies,
    url,
    useAi,
    aiQuery,
    nodes,
    region,
    apiKey,
    llmMarkdown,
    llmQuery,
    maxPages,
    maxDepth,
    ignoreImages,
    ignoreLinks,
    extractionSchema,
  } = requestState;
  const isMobile = useIsMobile();
  const [code, setCode] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString());
    toast(`Code for ${selectedCode.language} copied to clipboard`);
  };

  const codeString = () => {
    let finalCode = selectedCode.code;
    finalCode = finalCode
      .replace('<your-auth-token>', apiKey)
      .replace('<URL>', url)
      .replace('<USE_AI>', `${useAi}`)
      .replace('<MAX_PAGES>', `${isNaN(maxPages) ? 1 : maxPages}`)
      .replace('<MAX_DEPTH>', `${isNaN(maxDepth) ? 1 : maxDepth}`)
      .replace('<IGNORE_IMAGES>', `${ignoreImages}`)
      .replace('<IGNORE_LINKS>', `${ignoreLinks}`)
      .replace('<IS_LLM_MARKDOWN>', `${llmMarkdown}`)
      .replace('<NODES>', nodes);

    const hasHeaders = headers.some((header) => header.key !== '' && header.value !== '');
    const hasCookies = cookies.some((cookie) => cookie !== '');
    if (hasHeaders) {
      const formattedHeaders = headers
        .filter((header) => header.key !== '' && header.value !== '')
        .reduce(
          (acc, { key, value }) => ({
            ...acc,
            [key]: value,
          }),
          {}
        );
      finalCode = finalCode.replace('<HEADERS>', JSON.stringify(formattedHeaders));
    } else {
      finalCode = finalCode.replace('"<HEADERS>"', `${undefined}`);
    }
    if (hasCookies) {
      const formattedCookies = cookies.filter((cookie) => cookie !== '').join(',');
      finalCode = finalCode.replace('<COOKIES>', formattedCookies);
    } else {
      finalCode = finalCode.replace('"<COOKIES>"', `${undefined}`);
    }

    if (nodes !== 'random') {
      finalCode = finalCode.replace('<REGION>', region);
    } else {
      finalCode = finalCode.replace('"<REGION>"', `${undefined}`);
    }

    if (useAi) {
      finalCode = finalCode.replace('<EXTRACTION_PROMPT>', `${aiQuery}`);
    } else {
      finalCode = finalCode.replace('"<EXTRACTION_PROMPT>"', `${undefined}`);
    }
    if (llmMarkdown) {
      finalCode = finalCode.replace('<MARKDOWN_FILTER_PROMPT>', `${llmQuery}`);
    } else {
      finalCode = finalCode.replace('"<MARKDOWN_FILTER_PROMPT>"', `${undefined}`);
    }

    if (Object.keys(extractionSchema.properties).length > 0) {
      finalCode = finalCode.replace('"<EXTRACTION_SCHEMA>"', `${JSON.stringify(extractionSchema, null, 2)}`);
    } else {
      finalCode = finalCode.replace('"<EXTRACTION_SCHEMA>"', `${undefined}`);
    }

    return finalCode;
  };

  const buildCode = async () => {
    const code = codeString();
    if (!code) return;
    const html = await codeToHtml(code);
    setCode(html);
  };

  useEffect(() => {
    buildCode();
  }, [selectedCode, requestState]);

  return (
    <div className={style.play__code}>
      <p className={style['play__code--container']} dangerouslySetInnerHTML={{ __html: sanitizeHtml(code) }}></p>
      <div className="flex gap-1 md:gap-2 justify-end sticky bottom-0 right-0 -mr-3.5 md:mr-0 -mb-3.5 md:mb-0">
        <Button
          onClick={() => {
            startCrawl();
          }}
          size={isMobile ? 'xs' : 'default'}
        >
          Try it
        </Button>
        <Button variant="secondary" onClick={handleCopy} size={isMobile ? 'xs' : 'default'}>
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};

export default Code;
