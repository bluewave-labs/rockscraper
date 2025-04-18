'use client';
import { Request, Result } from '@src/utils/interfaces';
import { createContext, useContext, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { mockResult } from '../../components/playground/result/mock';

type ScraperContextProps = {
  requestState: Request;
  result: Result | null;
  time: number;
  start: Date | null;
  end: Date | null;
  setRequestState: React.Dispatch<React.SetStateAction<Request>>;
  startCrawl: () => void;
};

const ScraperContext = createContext<ScraperContextProps | null>(null);

const useScraper = () => {
  const context = useContext(ScraperContext);
  if (!context) {
    throw new Error('useScraper must be used within a ScraperProvider');
  }
  return context;
};

const ScraperProvider = ({ children }: { children: React.ReactNode }) => {
  const [requestState, setRequestState] = useState<Request>({
    url: 'https://',
    headers: [],
    cookies: [],
    useAi: false,
    aiQuery: '',
    nodes: 'random',
    region: '',
    apiKey: '',
    llmMarkdown: false,
    llmQuery: '',
    maxPages: 1,
    maxDepth: 1,
    ignoreImages: false,
    ignoreLinks: false,
    extractionSchema: {
      type: 'object',
      properties: {},
    },
  });
  const [result, setResult] = useState<Result | null>(null);
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const startCrawl = async () => {
    setStart(new Date());
    toast('This is a mock result');
    setTimeout(() => {
      setResult(mockResult as Result);
      setEnd(new Date());
    }, 10000);
  };

  const value = useMemo(
    () => ({
      requestState,
      result,
      setRequestState,
      startCrawl,
      start,
      end,
      time: end && start ? (end.getTime() - start.getTime()) / 1000 : 0,
    }),
    [requestState, result, start, end]
  );
  return <ScraperContext.Provider value={value}>{children}</ScraperContext.Provider>;
};

export { ScraperProvider, useScraper };
export type { ScraperContextProps };
