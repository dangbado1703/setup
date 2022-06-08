import Home from '../page/home/Home';
import Login from '../page/login/Login';

const configRoutes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    template: null,
    private: 1,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    template: null,
    private: 0,
  },
];

export default configRoutes;
