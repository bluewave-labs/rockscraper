import { Button } from '@src/components/ui/button';
import codeToHtml from '@src/utils/codeToHtml';
import { RequestExample } from '@src/utils/interfaces';
import { buildCookies, buildHeaders } from '@src/utils/requests';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { usePlayground } from '../context';
import style from './request.module.scss';

const Code = ({ selectedCode }: { selectedCode: RequestExample }) => {
  const { headers, cookies, url } = usePlayground();
  const [code, setCode] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString());
    toast(`Code for ${selectedCode.language} copied to clipboard`);
  };

  useEffect(() => {
    const urlInput = document.getElementById('url-input') as HTMLInputElement;
    if (urlInput) {
      urlInput.textContent = url;
    }
  }, [url]);

  const codeString = () => {
    const hasHeaders = headers.some((header) => header.key !== '' && header.value !== '');
    const hasCookies = cookies.some((cookie) => cookie !== '');
    const code = selectedCode.baseCode.replace('<URL>', url);
    const headersCode = buildHeaders(
      selectedCode,
      headers.filter((header) => header.key !== '' && header.value !== '')
    );
    const cookiesCode = buildCookies(
      selectedCode,
      cookies.filter((cookie) => cookie !== '')
    );
    const endCode = selectedCode.endCode.replace('<URL>', url);
    let finalCode = code;
    finalCode += hasHeaders || ['Python', 'NodeJS'].includes(selectedCode.language) ? headersCode : '';
    finalCode += hasCookies || ['Python', 'NodeJS'].includes(selectedCode.language) ? cookiesCode : '';
    finalCode += endCode;
    return finalCode;
  };

  const buildCode = async () => {
    const html = await codeToHtml(codeString());
    setCode(html);
  };

  useEffect(() => {
    buildCode();
  }, [headers, cookies, url, selectedCode]);

  return (
    <div className={style.play__code}>
      <p className={style['play__code--container']} dangerouslySetInnerHTML={{ __html: code }}></p>
      <div className={style['play__code--buttons']}>
        <Button variant="destructive">Try it</Button>
        <Button variant="secondary" onClick={handleCopy}>
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};

export default Code;
