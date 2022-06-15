import Index from '../page/index';
import Forgot from '../page/forgotpass/Forgot';
import Home from '../page/home/Home';
import Login from '../page/login/Login';
import Register from '../page/register/Register';

export const path = {
  HOME: '*',
  LOGIN: '/login',
  FORGOT: '/forgot',
  REGISTER: '/register',
};

export const PRIVATE_ROUTES = [
  {
    path: path.HOME,
    component: Home,
  },
];

export const PUBLIC_ROUTES = [
  {
    path: path.LOGIN,
    component: Login,
    exact: true,
  },
  {
    path: path.FORGOT,
    component: Forgot,
    exact: false,
  },
  {
    path: path.REGISTER,
    component: Register,
    exact: false,
  },
];
