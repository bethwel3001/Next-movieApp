import { useState, useEffect } from 'react';
// Replace alias import with relative path if needed
import { fetchMovies } from '../frontend/src/utils/api';
import MovieCard from '../frontend/src/components/movies/MovieCard';


export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const movieResults = await fetchMovies(searchTerm);
    setMovies(movieResults);
  };

  useEffect(() => {
    // Optionally, fetch trending movies on initial load
    const loadTrendingMovies = async () => {
      const trendingMovies = await fetchMovies('trending');
      setMovies(trendingMovies);
    };
    loadTrendingMovies();
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
