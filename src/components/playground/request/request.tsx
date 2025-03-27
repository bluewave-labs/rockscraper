"use client";
import { RequestExample } from "@src/utils/interfaces";
import languages from "@src/utils/requests";
import { useEffect, useState } from "react";
import Code from "./code";
import LanguageButtons from "./languageButtons";

const url = "https://api.example.com";

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
      <Code
        selectedCode={selectedCode}
        url={url}
      />
    </div>
  );
};

export default Request;
