import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/LotCard.module.css';

function LotCard({ lot }) {
  const {
    src, name, number, date, price,
  } = lot;

  return (
    <div className={styles.card}>
      <img src={src} alt="" />
      <div className={styles.content}>
        <b className="medium">{name}</b>
        <p className="small">
          #{number} - {date}
        </p>
        <div className={styles.footer}>
          <p>
            Start From
            <b>{price}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

LotCard.propTypes = {
  lot: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

export default LotCard;
