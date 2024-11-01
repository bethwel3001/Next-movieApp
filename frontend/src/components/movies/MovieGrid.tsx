import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!process.env.NEXT_PUBLIC_TMDB_API_KEY) {
        setError('API key is not configured');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY.trim()}`
            },
          }
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('API Error:', errorData);
          throw new Error(errorData.status_message || 'Failed to fetch movies');
        }
        
        const data = await response.json();
        
        const transformedMovies: Movie[] = data.results.map((movie: any) => ({
          id: movie.id.toString(),
          title: movie.title,
          poster: movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '/movie-placeholder.jpg',
          rating: movie.vote_average
        }));

        setMovies(transformedMovies);
      } catch (error) {
        console.error('Error details:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <p className="text-gray-400 mb-4">Please check your API configuration</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="movie-container">
      <h1 className="text-3xl font-bold my-6">Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieGrid;