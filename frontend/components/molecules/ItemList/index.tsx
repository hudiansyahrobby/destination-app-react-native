import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../../../constants/color';

interface ItemListProps {
  title: string;
  goto: string;
}

const ItemList: React.FC<ItemListProps> = ({ title, goto }) => {
  const navigation = useNavigation();

  return (
    <ListItem
      Component={TouchableScale}
      containerStyle={styles.container}
      onPress={() => navigation.navigate(goto)}>
      <Ionicons name="ios-bar-chart-outline" size={40} color={PRIMARY_COLOR} />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  title: {
    fontWeight: '700',
    color: PRIMARY_COLOR,
  },
});
