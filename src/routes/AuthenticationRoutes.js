import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import { Navigate } from 'react-router-dom/dist';

const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <AuthLogin />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '*',
      element: <Navigate to={'/login'} />
    }
  ]
};

export default AuthenticationRoutes;
