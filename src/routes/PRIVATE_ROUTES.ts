import Topbar from '../component/Layout/Topbar';
import About from '../component/Profile/Info/About/About';
import AboutContact from '../component/Profile/Info/AboutContact';
import AboutDetails from '../component/Profile/Info/AboutDetails';
import Info from '../component/Profile/Info/Info';
import Post from '../component/Profile/Post';
import Home from '../page/home/Home';
import Profile from '../page/profile/Profile';
import path from './routes';

const PRIVATE_ROUTES = [
  {
    path: path.HOME,
    component: Home,
    layout: Topbar,
  },
  {
    path: path.PROFILE,
    component: Profile,
    layout: Topbar,
    children: [
      {
        path: path.PROFILE_POST,
        component: Post,
      },
      {
        path: path.PROFILE_INFO,
        component: Info,
        childrenInfo: [
          {
            path: path.PROFILE_ABOUT,
            component: About,
          },
          {
            path: path.PROFILE_CONTACT,
            component: AboutContact,
          },
          {
            path: path.PROFILE_DETAILS,
            component: AboutDetails,
          },
        ],
      },
    ],
  },
];

export default PRIVATE_ROUTES;
