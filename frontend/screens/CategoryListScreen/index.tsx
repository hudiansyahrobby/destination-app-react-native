import React from 'react';
import { CategoryList } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const CategoryListScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <CategoryList />;
};

export default CategoryListScreen;
