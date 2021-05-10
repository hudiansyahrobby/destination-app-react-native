import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import { ICategory } from '../../../types/CategoryType';

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {categories?.map((category) => (
        <ListItem
          key={category.id}
          bottomDivider
          topDivider
          onPress={() =>
            navigation.navigate('Detail', {
              itemId: category.id,
            })
          }>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{capitalizeEachWord(category.name)}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
