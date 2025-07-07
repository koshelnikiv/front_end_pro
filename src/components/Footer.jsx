import { Box, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'


export default function Footer() {
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                py: 2,
                px: 3,
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                borderTop: '1px solid #ddd',
            }}
        >
            <Typography variant="body2" gutterBottom>
                © 2025 Іван Кошельник | koshelnikiv@i.ua
            </Typography>
        </Box>
    )
}
