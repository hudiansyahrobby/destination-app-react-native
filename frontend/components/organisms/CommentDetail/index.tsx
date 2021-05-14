import React from 'react';
import { Comment } from '../../molecules';
import { IComment } from '../../../types/CommentType';

interface CommentDetailProps {
  destinationId: string;
  comments: Required<IComment>[];
}
const CommentDetail: React.FC<CommentDetailProps> = ({
  destinationId,
  comments,
}) => {
  return <Comment destinationId={destinationId} comments={comments} />;
};

export default CommentDetail;
