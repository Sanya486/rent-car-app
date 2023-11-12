import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://654ebb40358230d8f0cccfa5.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  '/adverts',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?sort=id&order=desc&p=${page}&l=12`);
      if (response.data.length === 0) {
        toast.error("That`s all for now. No more car avaible");
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  '/adverts?make=make',
  async (filter, thunkAPI) => {
    try {
      let filtereData = [];
      const response = await axios.get(`/adverts?make=${filter.brand}`);

      filtereData = response.data;
      if (filter.price) {
        filtereData = filtereData.filter(
          (car) =>
            Number.parseInt(car.rentalPrice.replace(/\D/g, ''), 10) <=
            Number(filter.price)
        );
      }
      if (filter.mileageFrom) {
        filtereData = filtereData.filter(
          (car) => Number(car.mileage) >= Number(filter.mileageFrom)
        );
      }
      if (filter.mileageTo) {
        filtereData = filtereData.filter(
          (car) => Number(car.mileage) <= Number(filter.mileageTo)
        );
      }
      return filtereData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

