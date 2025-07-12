import { Container, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearHotels } from '../features/hotels/hotelsSlice';
import { Link } from 'react-router-dom';  

export default function AboutPage() {
    const dispatch = useDispatch();
    return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography>
        Додаток Booking
      </Typography>
      <Typography>
        Оберіть місто у полі "Destination" та отримаєте список готелів з обраного міста.
      </Typography>      
      <Button
        variant="outlined"
        component={Link}
        to="/"
        onClick={() => dispatch(clearHotels())}   // очистимо список, якщо був
      >
        Back to main
      </Button>      
    </Container>
  );
}
