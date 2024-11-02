import React from 'react';
import { BASE_IMAGE_URL } from '@/utils/constants';

// Define the type for the props
interface MovieCardProps {
  title: string;
  poster: string;
  releaseDate: string;
}

// Component definition
const MovieCard: React.FC<MovieCardProps> = ({ title, poster, releaseDate }) => {
  return (
    // In MovieCard.tsx
<div className="movie-card max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
  <img src={`${BASE_IMAGE_URL}${poster}`} alt={title} className="w-full h-64 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-500">Released: {releaseDate}</p>
    <div className="mt-2 flex justify-between">
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Watch</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</button>
    </div>
  </div>
</div>

  );
};

export default MovieCard;
