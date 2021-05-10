import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    accessToken: null,
    isLogin: false,
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.accessToken = action.payload.token;
      state.isLogin = true;
    },
    restoreToken(state, action: PayloadAction<any>) {
      state.accessToken = action.payload.token;
      state.isLogin = true;
    },
    removeUser(state) {
      state.user = {};
      state.accessToken = null;
      state.isLogin = false;
    },
  },
});

export const { setUser, removeUser, restoreToken } = userSlice.actions;
export default userSlice.reducer;
