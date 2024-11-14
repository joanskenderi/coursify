import { CircularProgress, Grid } from '@mui/material';

import { URL } from '../api';
import { CourseCard } from '../components';
import { useFetchData } from '../hooks';
import { Course } from '../types';

const CoursesGrid = () => {
  const { data: courses, loading } = useFetchData<Course[]>(`${URL}/courses`);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {loading ? (
        <CircularProgress sx={{ margin: 'auto', display: 'block' }} />
      ) : (
        courses?.map((course) => (
          <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
            <CourseCard {...course} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CoursesGrid;
