import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import {
  addToCart,
  selectCartItems,
  updateCartItemQuantity,
} from '../store/cartSlice';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const CourseCard = ({
  id,
  title,
  description,
  price,
  image,
}: CourseCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const itemInCart = cartItems.find((item) => item.id === id);
  const initialQuantity = itemInCart ? itemInCart.quantity : 0;

  const [quantity, setQuantity] = useState(initialQuantity);

  const handleCardClick = () => {
    if (id) {
      navigate(`/courses/${id}`);
    }
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(1);
    dispatch(addToCart({ id, title, price, quantity: 1 }));
  };

  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
    } else {
      setQuantity(0);
      dispatch(updateCartItemQuantity({ id, quantity: 0 }));
    }
  };

  return (
    <Card
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      onClick={handleCardClick}
    >
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingX: 2, paddingBottom: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {quantity === 0 ? (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </Button>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="small"
                onClick={handleDecreaseQuantity}
                sx={{
                  backgroundColor: 'error.main',
                  color: 'white',
                  width: 32,
                  height: 32,
                  '&:hover': {
                    backgroundColor: 'error.dark',
                  },
                }}
              >
                <Remove />
              </IconButton>
              <Typography variant="body1" sx={{ marginX: 1 }}>
                {quantity}
              </Typography>
              <IconButton
                size="small"
                onClick={handleIncreaseQuantity}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  width: 32,
                  height: 32,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <Add />
              </IconButton>
            </Box>
          )}
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
