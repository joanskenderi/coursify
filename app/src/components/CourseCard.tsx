import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material';

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const CourseCard = ({ title, description, price, image }: CourseCardProps) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
          <Button size="small" variant="contained" color="primary">
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
