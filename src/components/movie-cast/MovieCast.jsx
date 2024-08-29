import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './MovieCast.module.css';

const MovieCast = ({ cast, fetchMovieCast }) => {
  useEffect(() => {
    fetchMovieCast();
  }, [fetchMovieCast]);
  
  return (
    <div>
      <ul className={css.list}>
        {cast.length ? cast.map(item => {
          return <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              className={css.image} />

            <p>{item.name}</p>

            <p>Character: {item.character}</p>
          </li>
        }) : <p>No known cast</p>}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  fetchMovieCast: PropTypes.func.isRequired,
};

export default MovieCast;
