export type RoutesType = 'dashboard' | 'playground' | 'logs-data' | 'settings';

export type NodesType = 'random' | 'continent' | 'country';

export interface CodeByLanguage {
  language: string;
  code: string;
}

export interface HeaderFieldInterface {
  key: string;
  value: string;
  id: string;
}

export type QueryData = {
  domain: string;
  lastQuery: string;
  duration: number;
  cost: number;
  action: string;
};

export interface Request {
  headers: HeaderFieldInterface[];
  cookies: string[];
  url: string;
  useAi: boolean;
  returnMarkdown: boolean;
  aiQuery: string;
  nodes: NodesType;
  region: string;
  apiKey: string;
  llmMarkdown: boolean;
  llmQuery: string;
  maxPages: number;
  maxDepth: number;
  ignoreImages: boolean;
  ignoreLinks: boolean;
  extractionSchema: {
    type: string;
    properties: {
      [key: string]: { type: string };
    };
  };
}

export interface Result {
  data: {
    date: string;
    extracted_content: {
      content: string;
      error: boolean;
      index: number;
      tags: string[];
    }[];
    html: string;
    id: number;
    markdown: string;
    url: string;
    user_id: 3876036;
  }[];
  success: true;
}
