import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;