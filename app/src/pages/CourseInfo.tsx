import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Box,
  CircularProgress,
  CardMedia,
} from '@mui/material';

import { URL } from '../api';
import { Course } from '../types';

const CourseInfo = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`${URL}/courses/${courseId}`);
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching course details:', err);
      }
    };

    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  if (loading) {
    return <CircularProgress sx={{ margin: 'auto', display: 'block' }} />;
  }

  return (
    <Box
      sx={{
        height: '83vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box sx={{ maxWidth: 800, width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginRight: 3 }}>
            <CardMedia
              component="img"
              image="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={course?.title}
              height="140"
            />
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              {course?.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              {course?.description}
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{ fontWeight: 'bold' }}
            >
              Price: ${course?.price}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            sx={{
              marginBottom: 2,
            }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseInfo;
