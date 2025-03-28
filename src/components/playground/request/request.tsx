'use client';
import { RequestExample } from '@src/utils/interfaces';
import languages from '@src/utils/requests';
import { useState } from 'react';
import Code from './code';
import LanguageButtons from './languageButtons';

const Request = () => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0].language);
  const [selectedCode, setSelectedCode] = useState<RequestExample>(languages[0]);


  return (
    <div>
      <LanguageButtons
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        setSelectedCode={setSelectedCode}
      />
      <Code selectedCode={selectedCode} />
    </div>
  );
};

export default Request;
