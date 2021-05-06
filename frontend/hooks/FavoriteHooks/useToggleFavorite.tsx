import { useMutation } from 'react-query';
import { toggleFavorite } from '../../API/FavoriteAPI';

const useToggleFavorite = () => {
  return useMutation(() => toggleFavorite('2'));
};

export default useToggleFavorite;
