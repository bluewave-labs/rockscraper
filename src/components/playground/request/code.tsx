import { Button } from '@src/components/ui/button';
import codeToHtml from '@src/utils/codeToHtml';
import { CodeByLanguage } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { toast } from 'sonner';
import { usePlayground } from '../context';
import style from './request.module.scss';

const Code = ({ selectedCode }: { selectedCode: CodeByLanguage }) => {
  const { headers, cookies, url, useAi, returnMarkdown, aiQuery, nodes, region, apiKey } = usePlayground();
  const [code, setCode] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString());
    toast(`Code for ${selectedCode.language} copied to clipboard`);
  };

  const codeString = () => {
    let finalCode = selectedCode.code;
    finalCode = finalCode.replace('<your-auth-token>', apiKey);
    finalCode = finalCode.replace('<URL>', url);
    finalCode = finalCode.replace('<Nodes>', nodes);
    finalCode = finalCode.replace('<UseAi>', `${useAi}`);
    finalCode = finalCode.replace('<ReturnMarkdown>', `${returnMarkdown}`);
    if (useAi) {
      finalCode = finalCode.replace('<AiQuery>', aiQuery);
    } else {
      finalCode = finalCode.replace('<AiQuery>', `${undefined}`);
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
  }, [headers, cookies, url, selectedCode, useAi, returnMarkdown, aiQuery, nodes, region, apiKey]);

  return (
    <div className={style.play__code}>
      <p className={style['play__code--container']} dangerouslySetInnerHTML={{ __html: sanitizeHtml(code) }}></p>
      <div className={style['play__code--buttons']}>
        <Button
          variant="action"
          onClick={() => {
            toast('This feature is not available yet');
          }}
        >
          Try it
        </Button>
        <Button variant="secondary" onClick={handleCopy}>
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};

export default Code;
