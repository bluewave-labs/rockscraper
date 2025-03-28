"use client";
import { HeaderFieldInterface, NodesType } from "@src/utils/interfaces";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type PlaygroundContextProps = {
  headers: HeaderFieldInterface[];
  cookies: string[];
  url: string;
  useAi: boolean;
  returnMarkdown: boolean;
  aiQuery: string;
  nodes: NodesType;
  region: string;
  apiKey: string;
  setHeaders: React.Dispatch<PlaygroundContextProps["headers"]>;
  setCookies: React.Dispatch<PlaygroundContextProps["cookies"]>;
  setUrl: React.Dispatch<PlaygroundContextProps["url"]>;
  setUseAi: React.Dispatch<PlaygroundContextProps["useAi"]>;
  setReturnMarkdown: React.Dispatch<PlaygroundContextProps["returnMarkdown"]>;
  setAiQuery: React.Dispatch<PlaygroundContextProps["aiQuery"]>;
  setNodes: React.Dispatch<PlaygroundContextProps["nodes"]>;
  setRegion: React.Dispatch<PlaygroundContextProps["region"]>;
};

const PlaygroundContext = createContext<PlaygroundContextProps | null>(null);

const usePlayground = () => {
  const context = useContext(PlaygroundContext);
  if (!context) {
    throw new Error("usePlayground must be used within a PlaygroundProvider");
  }
  return context;
};

const PlaygroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [url, setUrl] = useState("https://");
  const [headers, setHeaders] = useState(
    [] as { key: string; value: string; id: string }[]
  );
  const [cookies, setCookies] = useState([] as string[]);
  const [useAi, setUseAi] = useState(false);
  const [returnMarkdown, setReturnMarkdown] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [nodes, setNodes] = useState<NodesType>("random");
  const [region, setRegion] = useState<string>("");
  const [apiKey, setApiKey] = useState("");
  
  useEffect(() => {
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    setApiKey(key);
  },[])

  const value = useMemo(
    () => ({
      headers,
      cookies,
      url,
      useAi,
      returnMarkdown,
      aiQuery,
      nodes,
      region,
      apiKey,
      setHeaders,
      setCookies,
      setUrl,
      setUseAi,
      setReturnMarkdown,
      setAiQuery,
      setNodes,
      setRegion,
    }),
    [headers, cookies, url, useAi, returnMarkdown, aiQuery, nodes, region, apiKey]
  );
  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export { PlaygroundProvider, usePlayground };
export type { PlaygroundContextProps };

