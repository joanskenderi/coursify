import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';

import {
  clearCart,
  selectCartItems,
  selectCartSummary,
} from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const { totalItems, totalPrice } = useSelector(selectCartSummary);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '83vh',
        padding: 2,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Cart Summary
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in the cart</Typography>
      ) : (
        <Box sx={{ width: '55%', textAlign: 'center' }}>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 1,
                marginBottom: 1,
                borderBottom: '1px solid #ddd',
              }}
            >
              <Typography>
                {item.title} x {item.quantity}
              </Typography>
              <Typography>${item.price * item.quantity}</Typography>
            </Box>
          ))}
          <Box
            sx={{
              marginTop: 4,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Typography variant="h6">Total Items: {totalItems}</Typography>
            <Typography variant="h6">Total Price: ${totalPrice}</Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          marginTop: 4,
          textAlign: 'center',
          display: 'flex',
          gap: 2,
        }}
      >
        {cartItems.length !== 0 && (
          <>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Checkout
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: 2 }}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </>
        )}
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: 4 }}
        onClick={() => navigate('/')}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Cart;
