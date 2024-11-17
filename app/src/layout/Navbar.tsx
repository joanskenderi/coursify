import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Box,
} from '@mui/material';
import { Login } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { selectCartSummary } from '../store/cartSlice';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useSelector(selectCartSummary);

  const shouldShowCart = location.pathname === '/';
  const showLogin = location.pathname === '/login';

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Coursify
        </Typography>
        <Box>
          {shouldShowCart && (
            <IconButton color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
          {!showLogin && (
            <IconButton color="inherit" onClick={() => navigate('/login')}>
              <Login />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
