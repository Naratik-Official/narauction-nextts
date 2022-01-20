import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/BatikPalette.module.css';

function BatikPalette(props) {
  const { src, className } = props;
  return (
    <div className={`${className} ${styles.palette}`}>
      <img src={src} alt="" />
    </div>
  );
}

BatikPalette.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BatikPalette;
