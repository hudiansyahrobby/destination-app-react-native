import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useDeleteComment from '../../../hooks/CommentHooks/useDeleteComment';
import { IComment } from '../../../types/CommentType';
import EditComment from '../EditCommentForm';

interface PopOverMenuProps {
  comment: Required<IComment>;
}

const PopOverMenu: React.FC<PopOverMenuProps> = ({ comment }) => {
  const { mutateAsync, error } = useDeleteComment();
  const [show, setShow] = React.useState<boolean>(false);

  const deleteError: any = error;
  const appError = deleteError?.response?.data?.message;

  return (
    <>
      <Menu>
        <MenuTrigger>
          <Ionicons name="ellipsis-horizontal-sharp" size={25} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => setShow(true)}
            customStyles={{
              optionWrapper: {
                paddingTop: 25,
                paddingBottom: 15,
                paddingHorizontal: 20,
              },
            }}>
            <Text style={styles.menu}>Edit Komentar</Text>
          </MenuOption>

          <MenuOption
            onSelect={() =>
              mutateAsync(comment.id, {
                onSuccess: () => {
                  showMessage({
                    message: 'Komentar Berhasil Dihapus',
                    type: 'success',
                  });
                },
                onError: () => {
                  showMessage({
                    message: capitalizeEachWord(appError),
                    type: 'danger',
                  });
                },
              })
            }
            customStyles={{
              optionWrapper: {
                paddingTop: 15,
                paddingBottom: 25,
                paddingHorizontal: 20,
              },
            }}>
            <Text style={styles.menu}>Hapus Komentar</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
      <EditComment comment={comment} show={show} setShow={setShow} />
    </>
  );
};

export default PopOverMenu;

const styles = StyleSheet.create({
  menu: { color: 'black' },
});
