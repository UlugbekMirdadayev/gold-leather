// assets
import { IconUser , IconUsersGroup } from '@tabler/icons-react';

// constant
const icons = { IconUser, IconUsersGroup };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const users = {
  id: 'users',
  title: 'User List',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/user-list/teachers',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/user-list/students',
      icon: icons.IconUsersGroup,
      breadcrumbs: false
    }
  ]
};

export default users;
