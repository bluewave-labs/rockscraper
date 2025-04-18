import axios from 'axios';
import { toast } from 'sonner';
import { Log, Request, Result } from './interfaces';

const API_URL = process.env.NEXT_PUBLIC_SCRAPER_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

export const getLogs = async (apiKey: string, page = 1) => {
  if (!apiKey) {
    toast.error('API key is required');
    return;
  }
  const response = await api.get(`/api/crawls?page=${page}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data as Log;
};

export const sendRequest = async (body: Request, apiKey: string) => {
  if (!apiKey) {
    toast.error('API key is required');
    return;
  }
  const response = await api.post('/api/crawl', body, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data as Result;
};
