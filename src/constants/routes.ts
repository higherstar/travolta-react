// Dependencies
import { FC } from 'react';

// Pages
import { Home, HotelList } from '../pages';

// Export routes
export const ROUTES = {
  Home: '/',
  List: '/list'
};

// Interfaces
interface IRoute {
  path: string;
  element: FC;
}

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.Home,
    element: Home,
  },
  {
    path: ROUTES.List,
    element: HotelList,
  },
];
