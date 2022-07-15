// Dependencies
import { FC } from 'react';

// Pages
import { Home } from '../pages';

// Export routes
export const ROUTES = {
  Home: '/',
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
];
