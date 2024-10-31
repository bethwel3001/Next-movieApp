import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../frontend/src/redux/store';
import { setMovies, setLoading, setError } from '../frontend/src/redux/features/movieSlice';
import MovieCard from '../frontend/src/components/movieCard';
import Navbar from '../frontend/src/components/navbar';
import { FiSearch } from 'react-icons/fi';

export default function Home() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        
        const data = await response.json();
        dispatch(setMovies(data.results));
      } catch (err) {
        console.error('Error fetching movies:', err);
        dispatch(setError(err instanceof Error ? err.message : 'Failed to fetch movies'));
      }
    };

    fetchMovies();
  }, [dispatch]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary-color"></div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      Error: {error}
    </div>
  );

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <header className="bg-primary-color/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Popular Movies
            </h1>
            <div className="search-container">
              <FiSearch className="search-icon" size={20} />
              <input
                type="search"
                placeholder="Search for a movie..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="movies-container">
        <div className="movies-grid animate-fade-in">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-400">
              No movies found matching your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
