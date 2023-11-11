import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654ebb40358230d8f0cccfa5.mockapi.io';


export const fetchAllCars = createAsyncThunk(
  '/adverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCar = createAsyncThunk(
  '/adverts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
