import React from 'react';
import { BottomSheet, ListItem } from 'react-native-elements';

interface Menu {
  title: string;
  onPress: () => void;
}

interface BottomMenuProps {
  menus: Menu[];
  isVisible: boolean;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ menus, isVisible }) => {
  return (
    <BottomSheet
      modalProps={{}}
      isVisible={isVisible}
      containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
      {menus.map((menu, index) => (
        <ListItem key={index} onPress={menu.onPress}>
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
};

export default BottomMenu;
