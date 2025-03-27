export type RoutesType = 'dashboard' | 'playground' | 'logs-data' | 'settings';

export type NodesType = 'random' | 'continent' | 'country';

export interface RequestExample {
  language: string;
  baseCode: string;
  addHeaders: string;
  addCookies: string;
  endCode: string;
}

export interface HeaderFieldInterface {
  key: string;
  value: string;
  id: string;
}
