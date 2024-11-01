import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    poster: string;
    rating: number;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="movie-card">
        <div className="movie-poster">
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="movie-info">
          <h3 className="text-white font-semibold text-base truncate">
            {movie.title}
          </h3>
          <div className="flex items-center mt-1">
            <span className="text-yellow-400">★</span>
            <span className="text-white ml-1">
              {movie.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard; 