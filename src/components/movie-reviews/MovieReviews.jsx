import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './MovieReviews.module.css';

const MovieReviews = ({ reviews, fetchReviews }) => {
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  function formatDate(date) {
    const d = new Date(date);

    return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
  }
  
  return (
    <div>
      <ul className={css.list}>
        {reviews.length ? reviews.map(item => {
          return <li key={item.id}>
            <p>Author: {item.author}</p>

            <p>Posted: {formatDate(item.created_at)}</p>

            <p>{item.content}</p>
          </li>
        }) : <p>{'We don\'t have any reviews for this movie'}</p>}
      </ul>
    </div>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  })).isRequired,
  fetchReviews: PropTypes.func.isRequired,
};

export default MovieReviews;
