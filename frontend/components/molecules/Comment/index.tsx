import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IComment } from '../../../types/CommentType';
import { Title } from '../../atom/Typography';
import NoData from '../../atom/Typography/NoData';
import AddCommentForm from '../AddCommentForm';
import CommentCard from '../CommentCard';

interface CommentProps {
  destinationId: string;
  comments: Required<IComment>[];
}

const Comment: React.FC<CommentProps> = ({ destinationId, comments }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const { isLogin } = useSelector((state: any) => state.user);
  const navigation = useNavigation();

  const onShowCommentForm = () => {
    if (isLogin) {
      setShow(!show);
    } else {
      navigation.navigate('Auth', { screen: 'Login' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title size="sm">Komentar</Title>
        <Title size="sm" onPress={onShowCommentForm}>
          Tambah Komentar
        </Title>
      </View>

      {comments?.length !== 0 ? (
        comments?.map((comment) => (
          <View style={styles.comments}>
            <CommentCard comment={comment} />
          </View>
        ))
      ) : (
        <NoData size="sm">Tidak Ada Komentar</NoData>
      )}

      <AddCommentForm
        show={show}
        setShow={setShow}
        destinationId={destinationId}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  comments: {
    marginVertical: 5,
  },
});
