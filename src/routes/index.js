import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// selector
import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const user = useSelector(({ user }) => user);
  return useRoutes(user?.auth ? [MainRoutes] : [AuthenticationRoutes]);
}
