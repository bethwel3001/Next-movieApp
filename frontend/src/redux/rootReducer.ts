import { combineReducers } from 'redux';
import movieReducer from './features/movieSlice';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;

