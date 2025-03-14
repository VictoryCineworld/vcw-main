import { createSlice } from '@reduxjs/toolkit';
import movieData from '@data/movie-data';
import product_data from '@data/product-data';

const initialState = {
  products:product_data,
  product:{},
  priceFilter:null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    single_product: (state,{payload}) => {
     state.product = state.products
     .map((item) => item.product)
     .flat()
     .find((product) => product.id === payload);
    },
    specific_product:(state,{payload}) => {
      state.product = state.products.map(item => item.product).flat().find(item => item.id == payload)
    },
    getSingleProduct:(state,{payload}) => {
      state.product = payload;
    }
  },
})

export const { single_product,priceFilter,specific_product,getSingleProduct } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
export default productSlice.reducer