import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@mui/material';

import { selectPaymentInfo } from '../store/paymentSlice';
import { Toast } from '../components';

const Summary = () => {
  const [open, setOpen] = useState<boolean>(false);
  const paymentInfo = useSelector(selectPaymentInfo);
  const navigate = useNavigate();

  const onSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const paymentDetails = [
    { label: 'First Name', value: paymentInfo?.firstName },
    { label: 'Last Name', value: paymentInfo?.lastName },
    { label: 'Email', value: paymentInfo?.email },
    { label: 'Address', value: paymentInfo?.address },
    { label: 'Cardholder Name', value: paymentInfo?.cardHolderName },
    {
      label: 'Card Number',
      value: `**** **** **** ${paymentInfo?.cardNumber?.slice(-4)}`,
    },
    { label: 'Exp. Date', value: paymentInfo?.expDate },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600,
        margin: '0 auto',
        padding: 2,
        height: '83vh',
      }}
    >
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Payment Summary
          </Typography>
          <Grid container spacing={2}>
            {paymentDetails.map((detail, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="body1">
                  <strong>{detail.label}:</strong> {detail.value || 'N/A'}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3, width: '50%' }}
          onClick={() => navigate('/checkout')}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, width: '50%' }}
          onClick={onSubmit}
        >
          Confirm
        </Button>
      </Box>
      <Toast open={open} message="Order placed successfully!" />
    </Box>
  );
};

export default Summary;
