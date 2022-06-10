import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { TIME_OUT } from '../constants/constants';

const localURL = 'http://localhost:3334/api';

const instance = axios.create({
  baseURL: localURL,
  timeout: TIME_OUT,
});

const successRequest = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    return (config.headers.Authorization = `Bearer ${token}`);
  }
  return config;
};

const errorRequest = (error: AxiosError) => {
  const status = error.status || (error.response ? error.response : 0);
  if (status === '401') {
    alert('Hết phiên đăng nhập');
    localStorage.clear();
    window.location.reload();
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(successRequest);
instance.interceptors.response.use(successRequest, errorRequest);

export default instance;
