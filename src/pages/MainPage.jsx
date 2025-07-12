import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import BookingForm from '../features/booking/BookingForm';
import { fetchDestinations } from '../features/destinations/destinationsSlice';

export default function MainPage() {
    const dispatch = useDispatch();
    const loadingDest = useSelector((s) => s.destinations.loading);

    useEffect(() => {
        dispatch(fetchDestinations());
    }, [dispatch]);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Booking
            </Typography>

            {loadingDest ? <CircularProgress /> : <BookingForm />}

            <Button
                sx={{ mt: 4 }}
                variant="outlined"
                href="/about"
            >
                About
            </Button>
        </Container>
    );
}
