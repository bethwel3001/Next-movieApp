import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  vote_average?: number;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  selectedMovie: Movie | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  selectedMovie: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedMovie: (state, action: PayloadAction<Movie | null>) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMovies, setLoading, setError, setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer; 