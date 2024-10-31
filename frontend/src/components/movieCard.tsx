import Image from 'next/image';
import React from 'react';

interface MovieCardProps {
  title: string;
  posterPath: string;
  rating: number;
  overview: string;
}

const MovieCard = ({ title, posterPath, rating, overview }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <div className="relative h-[400px] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="movie-info">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <div className="rating-circle mb-2">
            {Math.round(rating * 10)}%
          </div>
          <p className="text-sm line-clamp-3">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
