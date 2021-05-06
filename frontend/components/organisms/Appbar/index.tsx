import React from 'react';
import { Header } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

const AppBar = () => {
  return (
    <Header
      leftComponent={<FeatherIcon name="menu" size={30} color="#fff" />}
      rightComponent={<FontAwesomeIcon name="home" size={30} color="#fff" />}
    />
  );
};

export default AppBar;
