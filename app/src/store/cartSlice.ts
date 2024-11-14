import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem, CartState } from '../types';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectCartSummary = (state: { cart: CartState }) => {
  const totalItems = state.cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.cart.items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return { totalItems, totalPrice };
};

export default cartSlice.reducer;
