import { Box, Typography } from '@mui/material';

import { getCurrentYear } from '../utils';

const Footer = () => (
  <Box
    component="footer"
    sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f1f1f1' }}
  >
    <Typography variant="body2" color="text.secondary">
      &copy; {getCurrentYear} Coursify. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
