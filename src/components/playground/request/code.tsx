import { Button, useIsMobile } from '@bluewavelabs/prism-ui';
import codeToHtml from '@src/utils/codeToHtml';
import { CodeByLanguage } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'sonner';
import { usePlayground } from '../context';
import style from './request.module.scss';

const Code = ({ selectedCode }: { selectedCode: CodeByLanguage }) => {
  const { requestState, startCrawl } = usePlayground();
  const {
    headers,
    cookies,
    url,
    useAi,
    returnMarkdown,
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
      .replace('<Nodes>', nodes)
      .replace('<UseAi>', `${useAi}`)
      .replace('<ReturnMarkdown>', `${returnMarkdown}`)
      .replace('<IS_LLM_MARKDOWN>', `${llmMarkdown}`)
      .replace('<MAX_PAGES>', `${maxPages}`)
      .replace('<MAX_DEPTH>', `${maxDepth}`)
      .replace('<IGNORE_IMAGES>', `${ignoreImages}`)
      .replace('<IGNORE_LINKS>', `${ignoreLinks}`);
    if (useAi) {
      finalCode = finalCode.replace('<EXTRACTION_PROMPT>', `${aiQuery}`);
    } else {
      finalCode = finalCode.replace('<EXTRACTION_PROMPT>', `${undefined}`);
    }
    if (llmQuery) {
      finalCode = finalCode.replace('<MARKDOWN_FILTER_PROMPT>', `${llmQuery}`);
    } else {
      finalCode = finalCode.replace('<MARKDOWN_FILTER_PROMPT>', `${undefined}`);
    }
    if (nodes !== 'random') {
      finalCode = finalCode.replace('<Region>', region);
    } else {
      finalCode = finalCode.replace('<Region>', `${undefined}`);
    }
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
      finalCode = finalCode.replace('<Headers>', JSON.stringify(formattedHeaders));
    } else {
      finalCode = finalCode.replace('<Headers>', `${undefined}`);
    }
    if (hasCookies) {
      const formattedCookies = cookies.filter((cookie) => cookie !== '').join(',');
      finalCode = finalCode.replace('<Cookies>', JSON.stringify(formattedCookies));
    } else {
      finalCode = finalCode.replace('<Cookies>', `${undefined}`);
    }

    return finalCode;
  };

  const buildCode = async () => {
    const html = await codeToHtml(codeString());
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
