import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state, { payload }) => {
      const productIndex = state.cartProducts.findIndex(item => item.id === payload.id);
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity += 1;
        toast.info('Increase Product Quantity', {
          position: 'top-left',
        });
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.title} added to cart`, {
          position: 'top-left',
        });
      }
    },
    decrease_quantity: (state, { payload }) => {
      const cartIndex = state.cartProducts.findIndex(item => item.id === payload.id);
      if (cartIndex >= 0 && state.cartProducts[cartIndex].quantity > 1) {
        state.cartProducts[cartIndex].quantity -= 1;
        toast.error(`Decrease cart quantity`, {
          position: 'top-left',
        });
      }
    },
    remove_cart_product: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(item => item.id !== payload.id);
      toast.error(`Remove from your cart`, {
        position: 'top-left',
      });
    },
    clear_cart: (state, { payload }) => {
      const confirmMsg = window.confirm('Are you sure you want to delete all cart items?');
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },
  },
});

export const { cart_product, remove_cart_product, decrease_quantity, clear_cart } = cartSlice.actions;

export const cartProducts = state => state.cart.cartProducts;

export default cartSlice.reducer;
