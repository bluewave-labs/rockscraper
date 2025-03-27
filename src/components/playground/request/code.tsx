import { Button } from '@src/components/ui/button';
import { RequestExample } from '@src/utils/interfaces';
import { buildCookies, buildHeaders } from '@src/utils/requests';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { usePlayground } from '../context';
import style from './request.module.scss';

const Code = ({ selectedCode }: { selectedCode: RequestExample }) => {
  const { headers, cookies, url } = usePlayground();

  const handleCopy = () => {
    const code =
      selectedCode.baseCode.replace('<URL>', url) +
      buildHeaders(
        selectedCode,
        headers.filter((header) => header.key !== '' && header.value !== '')
      ) +
      buildCookies(
        selectedCode,
        cookies.filter((cookie) => cookie !== '')
      ) +
      selectedCode.endCode.replace('<URL>', url);
    navigator.clipboard.writeText(code.replaceAll('<br/>', '\n').replaceAll('&nbsp;', ' '));
    toast(`Code for ${selectedCode.language} copied to clipboard`);
  };

  useEffect(() => {
    const urlInput = document.getElementById('url-input') as HTMLInputElement;
    if (urlInput) {
      urlInput.textContent = url;
    }
  }, [url]);

  return (
    <div className={style.play__code}>
      <code className={style['play__code--container']}>
        <span
          dangerouslySetInnerHTML={{ __html: selectedCode.baseCode.replace('<URL>', url).replaceAll('\n', '<br/>') }}
        />

        {headers.filter((header) => header.key !== '' && header.value !== '').length > 0 ||
        ['NodeJS', 'Python'].includes(selectedCode.language) ? (
          <span
            dangerouslySetInnerHTML={{
              __html: buildHeaders(
                selectedCode,
                headers.filter((header) => header.key !== '' && header.value !== '')
              ),
            }}
          />
        ) : null}
        {cookies.length > 0 || ['NodeJS', 'Python'].includes(selectedCode.language) ? (
          <span
            dangerouslySetInnerHTML={{
              __html: buildCookies(selectedCode, cookies),
            }}
          />
        ) : null}

        <span
          dangerouslySetInnerHTML={{
            __html: selectedCode.endCode.replace('<URL>', url).replaceAll('\n', '<br/>'),
          }}
        />
      </code>
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
