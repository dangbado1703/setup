import Forgot from '../page/forgotpass/Forgot';
import Login from '../page/login/Login';
import Register from '../page/register/Register';
import path from './routes';

const PUBLIC_ROUTES = [
  {
    path: path.LOGIN,
    component: Login,
  },
  {
    path: path.FORGOT,
    component: Forgot,
  },
  {
    path: path.REGISTER,
    component: Register,
  },
];

export default PUBLIC_ROUTES;
