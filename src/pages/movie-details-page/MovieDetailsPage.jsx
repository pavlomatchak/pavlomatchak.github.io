import axios from 'axios';
import { API_TOKEN } from '../../config';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ setMovieId }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    async function fetchMovieDetails() {
      const options = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      };

      axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options)
        .then(({ data }) => {
          setMovie(data);
        })
        .catch(err => console.error(err));
    }

    if (movieId) {
      setMovieId(movieId);
      fetchMovieDetails();
    }
  }, [movieId, setMovieId]);

  function handleGoBack() {
    navigate(location.state?.from || '/', { replace: true });
  }
  
  return (
    <div className={css.page}>
      <button
        type="button"
        onClick={handleGoBack}
        className={css.back}>
        &#8592; Go back
      </button>

      {movie && <div className={css.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={css.poster} />

        <div className={css.about}>
          <h2>{movie.title}</h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          {movie.genres.map((item, index) => `${item.name}${index < movie.genres.length - 1 ? ', ' : ''}`)}
        </div>
      </div>}

      <div className={css.additional}>
        <h4>Additional information</h4>

        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>

          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

MovieDetailsPage.propTypes = {
  setMovieId: PropTypes.func.isRequired,
};

export default MovieDetailsPage;
