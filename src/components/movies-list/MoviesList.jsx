import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies && <ul className={css.list}>
        {movies.map(item => {
          return <li key={item.id} className={css.item}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</Link>
          </li>
        })}
      </ul>}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
