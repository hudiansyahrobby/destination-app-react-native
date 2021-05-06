import React from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR, GRAY_COLOR } from '../../../constants/color';
import { Title } from '../../atom/Typography';

const TwoBar = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Title
        style={{
          marginTop: 20,
          color: PRIMARY_COLOR,
          marginHorizontal: 20,
        }}
        size="md">
        Favorites
      </Title>
      <Title
        style={{
          color: GRAY_COLOR,
          marginTop: 20,
          marginHorizontal: 20,
        }}
        size="sm">
        See All
      </Title>
    </View>
  );
};

export default TwoBar;
