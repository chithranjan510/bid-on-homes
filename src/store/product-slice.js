import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.products = [...state.products, action.payload];
    },
    remove(state, action) {
      const updatedproducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = updatedproducts;
    },
    edit(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      state.products[productIndex] = action.payload;
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
