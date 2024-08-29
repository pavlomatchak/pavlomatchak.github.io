import axios from 'axios';
import { API_TOKEN } from '../../config';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css';
import MoviesList from '../../components/movies-list/MoviesList';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  useEffect(() => {
    async function searchMovies() {
      const options = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        },
        params: {
          query: searchQuery,
        },
      };

      axios.get('https://api.themoviedb.org/3/search/movie', options)
        .then(({ data }) => {
          setSearchResult(data.results);
        })
        .catch(err => console.error(err));
    }

    if (searchQuery.length) {
      setSearchParams({ query: searchQuery });
      searchMovies();
    }
  }, [searchQuery, setSearchParams]);

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if(value.length) {
      setSearchQuery(value);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={css.form}>
        <input type="text" name="query" className={css.input} required />

        <button type="submit">Search</button>
      </form>

      <MoviesList movies={searchResult} />
    </div>
  );
};

// MoviesPage.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   search: PropTypes.func.isRequired,
// };

export default MoviesPage;
