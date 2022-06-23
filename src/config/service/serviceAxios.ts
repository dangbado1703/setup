import { AxiosResponse } from 'axios';
import instance from './index';

export const getMethod = async (url: string, param: any) => {
  const response: AxiosResponse = await instance.get(url, {
    params: param,
  });
  return response.data;
};

export const postMethod = async (url: string, value: any) => {
  const response: AxiosResponse = await instance.post(url, value);
  console.log(response)
  return response.data;
};
