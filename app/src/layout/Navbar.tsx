import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
