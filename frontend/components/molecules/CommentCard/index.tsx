import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IComment } from '../../../types/CommentType';
import { Subtitle } from '../../atom/Typography';
import CommentHeader from '../CommentHeader';
import PopOverMenu from '../PopOverMenu';

interface CommentCardProps {
  comment: Required<IComment>;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const { user } = useSelector((state: any) => state.user);
  console.log('COMMNET', comment);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CommentHeader
          displayName={comment?.commentator?.displayName}
          photoURL="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
          rating={comment.rating}
        />
        {user?.uid === comment?.userUUID && <PopOverMenu comment={comment} />}
      </View>

      <Subtitle size="sm">{comment.content}</Subtitle>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
