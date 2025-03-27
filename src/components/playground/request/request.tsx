"use client";
import { Button } from "@src/components/ui/button";
import { RequestExample } from "@src/utils/interfaces";
import languages, { buildCookies, buildHeaders } from "@src/utils/requests";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import LanguageButtons from "./languageButtons";
import style from "./request.module.scss";

const url = "https://api.example.com";
const headers = [
  {
    key: "Authorization",
    value: "Bearer aksdjaldkcsaklsa",
  },
  {
    key: "Content-Type",
    value: "application/json",
  },
];

const cookies = [
  "cookie1=cookie1value",
  "cookie2=cookie2value",
  "cookie3=cookie3value",
];

const Request = () => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0].language);
  const [selectedCode, setSelectedCode] = useState<RequestExample>(
    languages[0]
  );

  useEffect(() => {
    setSelectedCode(
      languages.find(
        (lang) => lang.language === activeLanguage
      ) as RequestExample
    );
  }, [activeLanguage]);

  const handleCopy = () => {
    const code = selectedCode.baseCode
      .replace("<URL>", url) +
      buildHeaders(selectedCode, headers) +
      buildCookies(selectedCode, cookies) +
      selectedCode.endCode.replace("<URL>", url);
    navigator.clipboard.writeText(code.replaceAll("<br/>", "\n"));
    toast(`Code for ${selectedCode.language} copied to clipboard`)
  };

  return (
    <div>
      <LanguageButtons
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <div className={style.play__code}>
        <code className={style['play__code--container']}>
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
        <div className={style['play__code--buttons']}>
          <Button variant="destructive">Try it</Button>
          <Button variant="secondary" onClick={handleCopy}>Copy to clipboard</Button>
        </div>
      </div>
    </div>
  );
};

export default Request;
