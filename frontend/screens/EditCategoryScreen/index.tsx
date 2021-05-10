import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { EditCategory } from '../../components/templates';

const EditCategoryScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <EditCategory />;
};

export default EditCategoryScreen;
