import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/TextInput.module.css';

function TextInput(props) {
  const { outline, type, ...rest } = props;

  return (
    <input
      type={type}
      className={`${styles.input} ${outline ? styles.outline : styles.normal}`}
      {...rest}
    />
  );
}

TextInput.propTypes = {
  outline: PropTypes.bool,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

export default TextInput;
