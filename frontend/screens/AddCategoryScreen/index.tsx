import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Category } from '../../components/templates';

const AddCategoryScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Category />;
};

export default AddCategoryScreen;
