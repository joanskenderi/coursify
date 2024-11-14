import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import paymentReducer from './paymentSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
});
