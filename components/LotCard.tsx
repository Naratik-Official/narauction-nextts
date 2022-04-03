import React from 'react';

import styles from 'styles/LotCard.module.css';
import { Barang } from 'utils/types';
import useTranslation from 'utils/useTranslation';

interface LotCardProps {
  barang: Barang;
  isOngoing: boolean;
}

function LotCard({ barang, isOngoing }: LotCardProps) {
  const {
    lot,
    foto,
    namaBarang,
    tahunPembuatan,
    priceRange,
    hargaAwal,
    isAvailable,
  } = barang;
  const [t] = useTranslation();
  const normalPrice = priceRange[0] + (50 / 100) * priceRange[0];

  return (
    <div
      className={`${isAvailable ? styles.enabled : styles.disabled} ${
        styles.card
      }`}
    >
      <div className={styles.lot}>#{lot}</div>
      <img src={foto[0]} alt="" />
      <div className={styles.content}>
        <b className="medium">{namaBarang}</b>
        <p className="small">
          Circa : <b>{tahunPembuatan}</b>
        </p>
        <div className={styles.footer}>
          <div
            className={`${styles.price} ${styles.openBid} ${
              !isOngoing || !isAvailable ? styles.strikethrough : ''
            }`}
          >
            <p>{t('pricerange')}</p>
            <b>Rp. {priceRange[0].toLocaleString()}</b>
          </div>
          <div
            className={`${styles.price} ${styles.normalPrice} ${
              isOngoing || !isAvailable ? styles.strikethrough : ''
            }`}
          >
            <p>{t('normalprice')}</p>
            <b>Rp. {normalPrice.toLocaleString()}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotCard;
