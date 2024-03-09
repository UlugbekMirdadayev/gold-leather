import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { Navigate } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/'} />
    }
  ]
};

export default MainRoutes;
