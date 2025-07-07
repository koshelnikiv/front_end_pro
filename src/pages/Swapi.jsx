import { useState } from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    CircularProgress,
    Paper,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSwapiData, clearSwapiData } from '../store/swapi/swapiSlice'

export default function Swapi() {
    const [endpoint, setEndpoint] = useState('people/1')
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.swapi)

    const handleGetInfo = () => {
        if (endpoint.trim().length === 0) return
        dispatch(fetchSwapiData(endpoint))
    }

    const handleClear = () => {
        dispatch(clearSwapiData())
        /*setEndpoint('people/1')*/
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                SWAPI API Запит
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                    flexWrap: 'wrap',
                }}
            >
                <Typography
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: '#eee',
                        borderRadius: 1,
                        fontFamily: 'monospace',
                    }}
                >
                    https://swapi.info/api/
                </Typography>
                <TextField
                    label="endpoint"
                    variant="outlined"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    sx={{ width: '250px' }}
                />
                <Button variant="contained" onClick={handleGetInfo}>
                    Get Info
                </Button>
            </Box>

            {loading && <CircularProgress />}

            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    Помилка: {JSON.stringify(error)}
                </Typography>
            )}

            {data && (
                <Paper elevation={3} sx={{ p: 2, mt: 2, whiteSpace: 'pre-wrap' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Відповідь:
                    </Typography>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </Paper>
            )}
            <Button variant="contained" color="error" onClick={handleClear}>
                Очистити
            </Button>
        </Box>
    )
}
