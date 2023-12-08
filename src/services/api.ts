import axios, {AxiosInstance} from 'axios';
import {getToken} from '@services/auth-token.ts';


const BACKEND_URL = 'https://13.design.pages.academy/wtw/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    if (!config.headers) {
      return config;
    }

    const token = getToken();
    if (token) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  return api;
};
