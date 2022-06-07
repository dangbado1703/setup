import { AxiosResponse } from 'axios';
import { IValue } from '../../model/value.model';
import instance from './index';

export const getMethod = async (url: string, param: string) => {
  try {
    const response: AxiosResponse = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postMethod = async (url: string, param: string, value: IValue) => {
  try {
    const response: AxiosResponse = await instance.post(url, value);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
