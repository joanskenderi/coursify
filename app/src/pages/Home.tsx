import { Container } from '@mui/material';

import { CoursesGrid } from '../components';

const Home = () => {
  return (
    <Container sx={{ paddingY: 6 }}>
      <CoursesGrid />
    </Container>
  );
};

export default Home;
