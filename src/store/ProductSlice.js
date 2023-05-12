import { createSlice } from "@reduxjs/toolkit";
import productsList from "../data/productsList";

const initialState = {
  products: productsList,
  selectProduct: null,
}


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectProduct: (state, action) => {
      state.selectProduct = state.products.find((product) => product.id === action.payload)
    }
  }
})