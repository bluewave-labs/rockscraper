import { Button } from "@src/components/ui/button";
import { RequestExample } from "@src/utils/interfaces";
import { buildCookies, buildHeaders } from "@src/utils/requests";
import { toast } from "sonner";
import { usePlayground } from "../context";
import style from "./request.module.scss";

const Code = ({
  selectedCode,
  url,
}: {
  selectedCode: RequestExample;
  url: string;
}) => {
  const { headers, cookies } = usePlayground();
  const handleCopy = () => {
    const code =
      selectedCode.baseCode.replace("<URL>", url) +
      buildHeaders(selectedCode, headers) +
      buildCookies(selectedCode, cookies) +
      selectedCode.endCode.replace("<URL>", url);
    navigator.clipboard.writeText(
      code.replaceAll("<br/>", "\n").replaceAll("&nbsp;", " ")
    );
    toast(`Code for ${selectedCode.language} copied to clipboard`);
  };

  return (
    <div className={style.play__code}>
      <code className={style["play__code--container"]}>
        <span
          dangerouslySetInnerHTML={{
            __html: selectedCode.baseCode
              .replace("<URL>", url)
              .replaceAll("\n", "<br/>"),
          }}
        />
        {headers.length > 0 ? (
          <span
            dangerouslySetInnerHTML={{
              __html: buildHeaders(selectedCode, headers.filter((header) => header.key !== "" && header.value !== "")),
            }}
          />
        ) : null}
        {cookies.length > 0 ? (
          <span
            dangerouslySetInnerHTML={{
              __html: buildCookies(selectedCode, cookies),
            }}
          />
        ) : null}
        <span
          dangerouslySetInnerHTML={{
            __html: selectedCode.endCode
              .replace("<URL>", url)
              .replaceAll("\n", "<br/>"),
          }}
        />
      </code>
      <div className={style["play__code--buttons"]}>
        <Button variant='destructive'>Try it</Button>
        <Button variant='secondary' onClick={handleCopy}>
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};

export default Code;
