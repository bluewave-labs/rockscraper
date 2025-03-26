"use client";
import { RequestExample } from "@src/utils/interfaces";
import languages, { buildCookies, buildHeaders } from "@src/utils/requests";
import { useEffect, useState } from "react";
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

  return (
    <div>
      <LanguageButtons
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <div className={style.play__code}>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: selectedCode.baseCode
                .replace("<URL>", url)
                .replaceAll("\n", "<br/>"),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: buildHeaders(selectedCode, headers),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: buildCookies(selectedCode, cookies),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: selectedCode.finalCode
                .replace("<URL>", url)
                .replaceAll("\n", "<br/>"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Request;
