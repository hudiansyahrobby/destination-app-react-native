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
import { PRIMARY_COLOR } from '../../../constants/color';

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

  const onShowDetail = (categoryId: string) => {
    navigation.navigate('Detail', {
      itemId: categoryId,
    });
  };

  const listMenu = () => {
    const menu = [
      {
        title: 'Lihat Destinasi Berdasarkan Kategori',
        onPress: () => onShowDetail(id),
        icon: 'aperture',
      },
      { title: 'Edit Kategori', onPress: () => onEdit(id), icon: 'pencil' },
      { title: 'Hapus Kategori', onPress: () => onDelete(id), icon: 'trash' },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
        icon: 'close-sharp',
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
        <React.Fragment key={category.id}>
          <ListItem
            bottomDivider
            topDivider
            onPress={() => {
              setId(category.id as string);
              setIsVisible(true);
            }}>
            <Avatar
              size={45}
              icon={{
                name: 'aperture',
                color: PRIMARY_COLOR,
                type: 'ionicon',
              }}
            />
            <ListItem.Content>
              <ListItem.Title>
                {capitalizeEachWord(category.name)}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <BottomMenu menus={listMenu()} isVisible={isVisible} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
