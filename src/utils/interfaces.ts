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
