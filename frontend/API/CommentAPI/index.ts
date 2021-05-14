import { IComment } from '../../types/CommentType';
import axios from '../axios';

const addComment = async (comment: IComment) => {
  const { data } = await axios.post('/products/comments/', comment);
  return data.data;
};

const getComments = async (destinationId: string) => {
  const { data } = await axios.get(`/products/${destinationId}/comments`);
  return data.data;
};

const getComment = async (commentId: string) => {
  const { data } = await axios.get(`/products/comments/${commentId}`);
  return data.data;
};

const editComment = async ({ updatedComment, id }: any) => {
  const { data } = await axios.put(`/products/comments/${id}`, updatedComment);
  return data.data;
};

const deleteComment = async (commentId: string) => {
  const { data } = await axios.delete(`/products/comments/${commentId}`);
  return data.data;
};

export { addComment, getComments, getComment, editComment, deleteComment };
