import axios from 'axios';
import { API_TOKEN } from '../../config';
import { useEffect, useState } from 'react';
import MoviesList from '../../components/movies-list/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      };

      axios.get('https://api.themoviedb.org/3/trending/movie/day', options)
        .then(({ data }) => {
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <MoviesList movies={movies} />
    </>
  );
}

export default HomePage;
