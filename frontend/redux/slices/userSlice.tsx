import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    accessToken: null,
    isLogin: false,
    isAdmin: false,
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.accessToken = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.isLogin = true;
    },
    setEditUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    restoreToken(state, action: PayloadAction<any>) {
      state.accessToken = action.payload.token;
      state.isLogin = true;
    },
    removeUser(state) {
      state.user = {};
      state.accessToken = null;
      state.isAdmin = false;
      state.isLogin = false;
    },
  },
});

export const {
  setUser,
  removeUser,
  restoreToken,
  setEditUser,
} = userSlice.actions;
export default userSlice.reducer;
