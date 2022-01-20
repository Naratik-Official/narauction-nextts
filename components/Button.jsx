import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/Button.module.css';
import outlineStyles from 'styles/ButtonOutline.module.css';

function Button(props) {
  const {
    color = 'primary',
    size = 'normal',
    className,
    outline,
    round,
    children,
    onClick,
  } = props;

  const stylesToUse = outline ? outlineStyles : styles;

  return (
    <button
      onClick={onClick}
      className={`${stylesToUse.button} ${stylesToUse[color]} ${
        stylesToUse[size]
      } ${outline ? stylesToUse.outline : ''} ${
        round ? stylesToUse.round : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'disabled',
    'transparent',
  ]),
  size: PropTypes.oneOf(['nav', 'small', 'normal', 'medium', 'large']),
  className: PropTypes.string,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
