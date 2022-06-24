import Home from '../page/home/Home';
import Profile from '../page/profile/Profile';
import path from './routes';

const PRIVATE_ROUTES = [
  {
    path: path.HOME,
    component: Home,
  },
  {
    path: path.PROFILE,
    component: Profile,
  },
];

export default PRIVATE_ROUTES;
