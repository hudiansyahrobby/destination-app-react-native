import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useDeleteCategory from '../../../hooks/CategoryHooks/useDeleteCategory';
import { ICategory } from '../../../types/CategoryType';
import BottomMenu from '../../atom/BottomMenu';

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const navigation = useNavigation();
  const [id, setId] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const { isLoading, isError, mutateAsync } = useDeleteCategory();

  const onEdit = (categoryId: string) => {
    console.log('categoryId', categoryId);
    setIsVisible(false);
    navigation.navigate('EditCategory', {
      itemList: categoryId,
    });
  };

  const onDelete = async (categoryId: string) => {
    setIsVisible(false);
    await mutateAsync(categoryId);
  };

  const listMenu = () => {
    const menu = [
      { title: 'Edit', onPress: () => onEdit(id) },
      { title: 'Hapus', onPress: () => onDelete(id) },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
      },
    ];

    return menu;
  };

  return (
    <View style={styles.container}>
      {categories?.map((category) => (
        <>
          <ListItem
            key={category.id}
            bottomDivider
            topDivider
            onPress={() =>
              navigation.navigate('Detail', {
                itemId: category.id,
              })
            }
            onLongPress={() => {
              setId(category.id as string);
              setIsVisible(true);
            }}>
            <Avatar
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>
                {capitalizeEachWord(category.name)}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <BottomMenu
            menus={listMenu(category.id as string)}
            isVisible={isVisible}
          />
        </>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
