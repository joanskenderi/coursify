import { Container, Typography } from '@mui/material';

import { CoursesGrid } from '../components';

const Home = () => {
  return (
    <Container sx={{ paddingY: 6 }}>
      <Typography
        variant="h3"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'primary.main',
          marginBottom: 8,
        }}
      >
        Browse Courses
      </Typography>
      <CoursesGrid />
    </Container>
  );
};

export default Home;
