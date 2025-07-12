import { createSlice } from '@reduxjs/toolkit';

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    fetchDestinations: (state) => {
      state.loading = true;
    },
    fetchDestinationsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchDestinationsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchDestinations,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} = destinationsSlice.actions;

export default destinationsSlice.reducer;
