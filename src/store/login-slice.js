import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false };

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      window.location.reload();
    },
    logout(state) {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      state.isLoggedIn = false;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
