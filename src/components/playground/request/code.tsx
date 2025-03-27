import { Button } from "@src/components/ui/button";
import { RequestExample } from "@src/utils/interfaces";
import { buildCookies, buildHeaders } from "@src/utils/requests";
import { toast } from "sonner";
import style from "./request.module.scss";
import { usePlayground } from "../context";

const Code = ({
  selectedCode,
  cookies,
  url,
}: {
  selectedCode: RequestExample;
  cookies: string[];
  url: string;
}) => {
  const { headers } = usePlayground();
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
        <span
          dangerouslySetInnerHTML={{
            __html: buildHeaders(selectedCode, headers),
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: buildCookies(selectedCode, cookies),
          }}
        />
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
