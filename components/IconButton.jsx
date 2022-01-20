import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/IconButton.module.css';

function IconButton(props) {
  const {
    src,
    backgroundColor = 'primary',
    color = 'white',
    size = 'normal',
    outline,
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      className={`${styles[backgroundColor]} ${styles.button} ${
        styles[size]
      }  ${styles[color]} ${outline ? styles.outline : ''}`}
    >
      <img src={src} alt="" />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'white',
    'transparent',
  ]),
  color: PropTypes.oneOf(['black', 'white']),
  size: PropTypes.oneOf(['normal', 'small']),
  outline: PropTypes.bool,
  onClick: PropTypes.func,
};

export default IconButton;
