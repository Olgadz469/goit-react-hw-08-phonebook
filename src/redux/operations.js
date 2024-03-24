import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6574c5afb2fbb8f6509ca5e6.mockapi.io';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
