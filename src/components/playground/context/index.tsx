"use client";
import { HeaderFieldInterface, NodesType } from "@src/utils/interfaces";
import { createContext, useContext, useMemo, useState } from "react";

type PlaygroundContextProps = {
  headers: HeaderFieldInterface[];
  cookies: string[];
  url: string;
  useAi: boolean;
  returnMarkdown: boolean;
  aiQuery: string;
  nodes: NodesType;
  region: string;
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
      setHeaders,
      setCookies,
      setUrl,
      setUseAi,
      setReturnMarkdown,
      setAiQuery,
      setNodes,
      setRegion,
    }),
    [headers, cookies, url, useAi, returnMarkdown, aiQuery, nodes, region]
  );
  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export { PlaygroundProvider, usePlayground };
export type { PlaygroundContextProps };

