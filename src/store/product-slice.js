import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    add(state, action) {

    },
    remove(state, action) {

    }
  }
})

export const productAction = productSlice.actions;
export default productSlice.reducer;