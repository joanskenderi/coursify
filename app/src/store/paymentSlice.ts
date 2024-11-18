import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PaymentInfo, PaymentState } from '../types';

const initialState: PaymentState = {
  payment: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentInfo(state, action: PayloadAction<PaymentInfo>) {
      state.payment = action.payload;
    },
    clearPaymentInfo(state) {
      state.payment = null;
    },
  },
});

export const { setPaymentInfo, clearPaymentInfo } = paymentSlice.actions;

export const selectPaymentInfo = (state: { payment: PaymentState }) =>
  state.payment.payment;

export default paymentSlice.reducer;
