import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Typography,
    CircularProgress,
    Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { clearHotels } from '../features/hotels/hotelsSlice';
import { push } from 'redux-first-history';

export default function HotelsPage() {
    const { items, loading } = useSelector((s) => s.hotels);
    const dispatch = useDispatch();
    const handleBack = () => {
        dispatch(clearHotels());
        dispatch(push('/'));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'address', headerName: 'Address', flex: 1 },
        { field: 'hotel_rating', headerName: 'Rating', width: 90 },
    ];

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Hotels
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <div style={{ height: 520, width: '100%' }}>
                        <DataGrid
                            rows={items}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            disableSelectionOnClick
                            sx={{                                
                                '& .MuiDataGrid-columnHeader': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    fontWeight: 'bold',
                                },
                                '& .MuiDataGrid-cell': { borderColor: 'primary.main' },
                                '& .MuiDataGrid-columnHeaders': { borderColor: 'primary.main' },
                                border: 1,
                                borderColor: 'primary.main',
                                '& .MuiDataGrid-columnSeparator': { display: 'none' },
                            }}
                        />
                    </div>
                    <Button
                        sx={{ mt: 2 }}
                        variant="outlined"
                        onClick={handleBack}
                    >
                        Back to main
                    </Button>
                </>
            )}
        </Container>
    );
}
