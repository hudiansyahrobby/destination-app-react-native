import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useDeleteCategory from '../../../hooks/CategoryHooks/useDeleteCategory';
import { ICategory } from '../../../types/CategoryType';
import BottomMenu from '../../atom/BottomMenu';
import { showMessage } from 'react-native-flash-message';
import Loading from '../../atom/Loading';

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const navigation = useNavigation();
  const [id, setId] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const { isLoading, isError, error, mutateAsync } = useDeleteCategory();

  const onEdit = (categoryId: string) => {
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

  const newError: any = error;
  const appError = newError?.response?.data?.message;

  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: capitalizeEachWord(appError),
        type: 'danger',
      });
    }
  }, [isError, appError]);

  if (isLoading) {
    return <Loading />;
  }

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
          <BottomMenu menus={listMenu()} isVisible={isVisible} />
        </>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
