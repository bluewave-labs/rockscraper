"use client";
import { RequestExample } from "@src/utils/interfaces";
import languages from "@src/utils/requests";
import { useEffect, useState } from "react";
import Code from "./code";
import LanguageButtons from "./languageButtons";

const url = "https://api.example.com";
// const headers = [
//   {
//     key: "Authorization",
//     value: "Bearer aksdjaldkcsaklsa",
//   },
//   {
//     key: "Content-Type",
//     value: "application/json",
//   },
// ];

// const cookies = [
//   "cookie1=cookie1value",
//   "cookie2=cookie2value",
//   "cookie3=cookie3value",
// ];

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
