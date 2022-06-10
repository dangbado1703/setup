import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
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

const errorRequest = (error: any) => {
  const status = error.status || (error.response ? error.response.status : 0);
  if (status === 401) {
    alert('Hết phiên đăng nhập');
    localStorage.clear();
    window.location.reload();
  }
  if (status === 400) {
    toast.error(`${error.response?.data.message}`);
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(successRequest);
instance.interceptors.response.use(successRequest, errorRequest);

export default instance;
