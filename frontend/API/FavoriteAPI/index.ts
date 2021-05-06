import axios from 'axios';

const toggleFavorite = async (destinationId: string) => {
  await axios.post(`/favorites/${destinationId}`);
};

const getFavorite = async () => {
  await axios.put('/favorites');
};

export { toggleFavorite, getFavorite };
