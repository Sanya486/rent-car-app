import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleReject = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    adverts: null,
    favorites: null,
    isLoading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      state.adverts = payload;
    });
  },
});
