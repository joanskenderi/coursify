import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectCartSummary } from '../store/cartSlice';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useSelector(selectCartSummary);

  const shouldShowCart = location.pathname === '/';

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
        {shouldShowCart && (
          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
