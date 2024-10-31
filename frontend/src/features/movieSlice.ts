import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('/api/movies'); // Mock this for now
  return response.data;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default movieSlice.reducer;
