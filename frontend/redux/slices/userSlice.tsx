import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLogin: false,
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.isLogin = true;
    },
    removeUser(state) {
      state.user = {};
      state.isLogin = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
