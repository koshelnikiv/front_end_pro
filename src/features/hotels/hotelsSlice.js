import { createSlice } from '@reduxjs/toolkit';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    fetchHotels: (state, _action) => {
      state.loading = true;
    },
    fetchHotelsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchHotelsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearHotels: (state) => {
      state.items = [];
    },
  },
});

export const {
  fetchHotels,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  clearHotels,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
