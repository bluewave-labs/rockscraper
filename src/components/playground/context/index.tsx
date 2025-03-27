"use client";
import { HeaderFieldInterface } from "@src/utils/interfaces";
import { createContext, useContext, useMemo, useState } from "react";

type PlaygroundContextProps = {
  headers: HeaderFieldInterface[];
  cookies: string[];
  url: string;
  setHeaders: React.Dispatch<PlaygroundContextProps["headers"]>;
  setCookies: React.Dispatch<PlaygroundContextProps["cookies"]>;
  setUrl: React.Dispatch<PlaygroundContextProps["url"]>;
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
  const [url, setUrl] = useState("https://api.example.com");
  const [headers, setHeaders] = useState(
    [] as { key: string; value: string; id: string }[]
  );
  const [cookies, setCookies] = useState([] as string[]);

  const value = useMemo(
    () => ({
      headers,
      cookies,
      url,
      setHeaders,
      setCookies,
      setUrl,
    }),
    [headers, cookies, url]
  );
  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export { PlaygroundProvider, usePlayground };
export type { PlaygroundContextProps };
