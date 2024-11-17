import { z } from 'zod';

export const paymentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address is required'),
  cardHolderName: z.string().min(1, 'Cardholder name is required'),
  cardNumber: z
    .string()
    .length(16, 'Card number must be 16 digits')
    .regex(/^[0-9]+$/, 'Only numbers are allowed'),
  expDate: z
    .string()
    .min(5, 'Expiration date is required')
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Expiration date must be in MM/YY format'
    ),
  cvv: z
    .string()
    .length(3, 'CVV must be 3 digits')
    .regex(/^[0-9]+$/, 'Only numbers are allowed'),
  termsAccepted: z.boolean().refine((value) => value, {
    message: 'You must accept the terms and conditions',
  }),
});

export { loginSchema, type LoginFormType } from './loginSchema';
