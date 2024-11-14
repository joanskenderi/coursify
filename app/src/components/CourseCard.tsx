import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  const handleCardClick = () => {
    if (id) {
      navigate(`/courses/${id}`);
    }
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`${title} added to cart!`);
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
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleAddToCartClick}
          >
            Add to Cart
          </Button>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
