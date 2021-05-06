import axios from '../axios';

const addComment = async (destinationId: string) => {
  await axios.post(`/destinations/${destinationId}/comments/`);
};

const editComment = async (destinationId: string, commentId: string) => {
  await axios.put(`/destinations/${destinationId}/comments/${commentId}`);
};

const deleteComment = async (commentId: string) => {
  await axios.delete(`/destinations/comments/${commentId}`);
};

export { addComment, editComment, deleteComment };
