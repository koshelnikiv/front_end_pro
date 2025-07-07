import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSwapiData = createAsyncThunk(
    'swapi/fetchData',
    async (endpoint, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://swapi.info/api/${endpoint}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Unknown error')
        }
    }
)

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSwapiData: (state) => {
            state.data = null
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapiData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSwapiData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchSwapiData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { clearSwapiData } = swapiSlice.actions
export default swapiSlice.reducer
