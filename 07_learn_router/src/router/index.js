import Home from "../page/Home";
import { JoinUs, About} from "../page/About";
import { Detail, Detail2, Detail3, Product } from "../page/Detail";

import Profile from "../page/Profile";
import User from "../page/User";
import Index from "../page/about/Index";
import Culture from "../page/about/Culture";
import Contact from "../page/about/Contact";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: Index,
      },
      {
        path: '/about/culture',
        component: Culture
      },
      {
        path: '/about/contact',
        component: Contact
      },
      {
        path: '/about/joinUs',
        component: JoinUs
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/detail2',
    component: Detail2
  },
  {
    path: '/detail3',
    component: Detail3
  },
  {
    path: '/product',
    component: Product
  }

]

export default routes;
