import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../redux/features/movieSlice';
import Image from 'next/image';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  release_date?: string;
}

const MovieCard = ({ id, title, poster_path, overview, vote_average = 0, release_date }: MovieCardProps) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setSelectedMovie({ id, title, poster_path, overview, vote_average, release_date }));
  };

  const ratingPercentage = (vote_average * 10).toFixed(0);
  const releaseYear = release_date ? new Date(release_date).getFullYear() : '';

  return (
    <div className="movie-card group" onClick={handleClick}>
      {poster_path ? (
        <div className="movie-image">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority
          />
          <div className="movie-info">
            <div className="absolute -top-5 left-4">
              <div className="rating-circle">
                <span>{ratingPercentage}%</span>
              </div>
            </div>
            <h3 className="font-bold text-lg leading-tight mb-2">{title}</h3>
            {releaseYear && (
              <p className="text-sm text-gray-300 mb-2">{releaseYear}</p>
            )}
            <p className="text-sm leading-snug opacity-90 line-clamp-3">
              {overview}
            </p>
          </div>
        </div>
      ) : (
        <div className="movie-image bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
