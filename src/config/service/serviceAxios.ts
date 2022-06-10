import { AxiosError, AxiosResponse } from 'axios';
import instance from './index';

export const getMethod = async (url: string, param: string | null | number | boolean) => {
  try {
    const response: AxiosResponse = await instance.get(url, {
      params: param,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postMethod = async (url: string, value: any) => {
  const response: AxiosResponse = await instance.post(url, value);
  return response.data;
};
