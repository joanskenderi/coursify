import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div">
        Coursify
      </Typography>
      <IconButton color="inherit">
        <ShoppingCartIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
