import React from "react";

import styles from "styles/LotCard.module.css";

export interface Lot {
  id: string;
  src: string;
  name: string;
  number: number;
  date: string;
  price: string;
}

interface LotCardProps {
  lot: Lot;
}

function LotCard({ lot }: LotCardProps) {
  const { src, name, number, date, price } = lot;

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

export default LotCard;
