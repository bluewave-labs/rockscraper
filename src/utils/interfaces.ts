export type RoutesType = 'dashboard' | 'playground' | 'logs-data' | 'settings';

export type QueryData = {
  domain: string;
  lastQuery: string;
  duration: number;
  cost: number;
  action: string;
};