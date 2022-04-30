import axios, { AxiosResponse } from 'axios';
import { env } from 'config';
import { Album } from './album';

const instance = axios.create({
  baseURL: env.BASE_URL,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const apiRequest = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => instance.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => instance.put<T>(url, body).then(responseBody),
};

export const apiService = {
  Album,
};
