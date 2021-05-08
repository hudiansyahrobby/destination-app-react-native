import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
  },
});
