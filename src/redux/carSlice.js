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
    favorites: [],
    isLoading: null,
    error: null,
  },
  reducers: {
    addToFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((id) => id !== payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      state.adverts = payload;
    });
  },
});

export const { addToFavorite, removeFromFavorite } = carSlice.actions;
