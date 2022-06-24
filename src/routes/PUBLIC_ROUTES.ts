import Forgot from '../page/forgotpass/Forgot';
import Login from '../page/login/Login';
import Register from '../page/register/Register';
import path from './routes';

const PUBLIC_ROUTES = [
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

export default PUBLIC_ROUTES;
