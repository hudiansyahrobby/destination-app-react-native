import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { UseMutateAsyncFunction } from 'react-query';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import { IDestination } from '../../../types/DestinationType';
import BottomMenu from '../../atom/BottomMenu';
import NoData from '../../atom/Typography/NoData';

interface ListsProps {
  destinations: IDestination[];
  onDelete: UseMutateAsyncFunction<void, unknown, string, unknown>;
}

const Lists: React.FC<ListsProps> = ({ destinations, onDelete }) => {
  const navigation = useNavigation();

  const [id, setId] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);

  const onEditDestination = (destinationId: string) => {
    setIsVisible(false);
    navigation.navigate('EditDestination', {
      itemList: destinationId,
    });
  };

  const onDeleteDestination = async (destinationId: string) => {
    setIsVisible(false);
    await onDelete(destinationId);
  };

  const onShowDetail = (destinationId: string) => {
    setIsVisible(false);
    navigation.navigate('Detail', {
      itemId: destinationId,
    });
  };

  const listMenu = () => {
    const menu = [
      {
        title: 'Lihat Detail Destinasi',
        onPress: () => onShowDetail(id),
        icon: 'aperture',
      },
      {
        title: 'Edit Destinasi',
        onPress: () => onEditDestination(id),
        icon: 'pencil',
      },
      {
        title: 'Hapus Destinasi',
        onPress: () => onDeleteDestination(id),
        icon: 'trash',
      },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
        icon: 'close-sharp',
      },
    ];

    return menu;
  };

  return (
    <View>
      {destinations.length !== 0 ? (
        destinations?.map((destination) => (
          <React.Fragment key={destination.id}>
            <ListItem
              key={destination.id}
              bottomDivider
              topDivider
              onPress={() => {
                setId(destination.id as string);
                setIsVisible(true);
              }}>
              <Avatar
                source={{
                  uri:
                    (destination?.images[0] as any)?.imageUrl ||
                    'https://ami-sni.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
                }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>
                  {capitalizeEachWord(destination.name)}
                </ListItem.Title>
                <ListItem.Subtitle>
                  {capitalizeEachWord(destination.city)} -{' '}
                  {capitalizeEachWord(destination.province)}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <BottomMenu menus={listMenu()} isVisible={isVisible} />
          </React.Fragment>
        ))
      ) : (
        <NoData>Destinasi Tidak Ada</NoData>
      )}
    </View>
  );
};

export default Lists;
