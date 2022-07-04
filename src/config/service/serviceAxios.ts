import { AxiosError, AxiosResponse } from 'axios';
import instance from './index';

export const getMethod = async (url: string, params: any) => {
  const response: AxiosResponse = await instance.get(url, {
    params,
  });
  return response.data;
};

export const postMethod = async (url: string, value: any) => {
  const response: AxiosResponse = await instance.post(url, value);
  return response.data;
};
