import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/RatingStar.module.css';

function RatingStars({ rating }) {
  return (
    <div className={styles.root}>
      {Array.from({ length: rating }).map((_, e) => (
        <img key={e} src="/star_solid.svg" />
      ))}
      {Array.from({ length: 5 - rating }).map((_, e) => (
        <img key={e} src="/star_blank.svg" />
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
};

export default RatingStars;
