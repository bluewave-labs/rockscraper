export type RoutesType = 'dashboard' | 'playground' | 'logs-data' | 'settings';

export interface RequestExample {
  language: string;
  baseCode: string;
  addHeaders: string;
  addCookies: string;
  endCode: string;
}