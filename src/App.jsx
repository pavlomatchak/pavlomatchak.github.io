import axios from 'axios';
import { API_TOKEN } from './config';
import { useCallback, useState } from 'react';
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/Navigation';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/movie-details-page/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/movie-cast/MovieCast'));
const MovieReviews = lazy(() => import('./components/movie-reviews/MovieReviews'));
const MoviesPage = lazy(() => import('./pages/movies-page/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/not-found-page/NotFoundPage'));

function App() {
  const [movieId, setMovieId] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  const fetchMovieCast = useCallback(async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  const fetchReviews = useCallback(async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  
  return (
    <>
      <Navigation />

      <div className='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/movies/:movieId" element={<MovieDetailsPage setMovieId={setMovieId} />}>
              <Route path="cast" element={<MovieCast cast={cast} fetchMovieCast={fetchMovieCast} />} />

              <Route path="reviews" element={<MovieReviews reviews={reviews} fetchReviews={fetchReviews} />} />
            </Route>

            <Route path="/movies" element={<MoviesPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
