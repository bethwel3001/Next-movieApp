import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  // Add your movie objects here
  { title: 'Movie 1', poster: '/path/to/poster1.jpg', releaseDate: '2023-11-01' },
  { title: 'Movie 2', poster: '/path/to/poster2.jpg', releaseDate: '2023-11-02' },
  // More movie objects...
];

const MovieGrid: React.FC = () => {
  return (
    <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          poster={movie.poster}
          releaseDate={movie.releaseDate}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
