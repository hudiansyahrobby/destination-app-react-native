import { useQuery } from 'react-query';
import { getFavorite } from '../../API/FavoriteAPI';

const useFavorite = () => {
  return useQuery('favorites', getFavorite);
};

export default useFavorite;
