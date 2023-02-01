import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './login-slice';
import productReducer from './product-slice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
  },
});

export default store;
