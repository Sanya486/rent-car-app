import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchFilteredCars } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    adverts: [],
    favorites: [],
    isLoading: null,
    error: null,
  },
  reducers: {
    addToFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((advert) => advert.id !== payload.id);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      state.adverts = [...state.adverts, ...payload];
    }).addCase(fetchFilteredCars.fulfilled, (state, { payload }) => {
      state.adverts = payload;
    }).addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject);
  },
});

export const { addToFavorite, removeFromFavorite } = carSlice.actions;
