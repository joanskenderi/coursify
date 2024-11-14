import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { paymentSchema } from '../schemas';
import { setPaymentInfo } from '../store/paymentSlice';
import { clearCart, selectCartSummary } from '../store/cartSlice';
import { FormField } from '../components';
import { formFields } from '../config';

type PaymentFormData = z.infer<typeof paymentSchema>;

const Checkout = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { totalPrice } = useSelector(selectCartSummary);

  const onSubmit = (data: PaymentFormData) => {
    dispatch(setPaymentInfo({ ...data }));
    console.log('Payment Information:', { ...data, totalPrice });
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 500,
        height: 'auto',
        margin: 'auto',
        marginTop: 4,
        marginBottom: 4,
        padding: 3,
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" textAlign="center" sx={{ marginBottom: 4 }}>
        Payment Information
      </Typography>

      <Grid container spacing={2}>
        {formFields.map((field) => (
          <FormField
            key={field.name}
            name={field.name}
            label={field.label}
            control={control}
            errors={errors}
            gridSize={field.gridSize}
          />
        ))}
      </Grid>

      <Box>
        <Controller
          name="termsAccepted"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="I agree to the Terms and Conditions"
              sx={{ color: errors.termsAccepted ? 'error.main' : 'inherit' }}
            />
          )}
        />
        {errors.termsAccepted && (
          <Typography color="error" variant="caption">
            {errors.termsAccepted.message}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3, width: '50%' }}
          onClick={() => navigate('/cart')}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, width: '50%' }}
        >
          Pay
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
