import React from 'react';
import { UserList } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const UserListScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <UserList />;
};

export default UserListScreen;
