import React from "react";

import styles from "styles/LotCard.module.css";
import { Barang } from "utils/types";
import useTranslation from "utils/useTranslation";

interface LotCardProps {
  barang: Barang;
}

function LotCard({ barang }: LotCardProps) {
  const { lot, foto, namaBarang, tahunPembuatan, priceRange, hargaAwal } =
    barang;
  const [t] = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.lot}>#{lot}</div>
      <img src={foto[0]} alt="" />
      <div className={styles.content}>
        <b className="medium">{namaBarang}</b>
        <p className="small">
          Circa : <b>{tahunPembuatan}</b>
        </p>
        <div className={styles.footer}>
          <p className={styles.openBid}>
            {t("pricerange")}
            <b>Rp. {priceRange[0].toLocaleString()}</b>
          </p>
          <p className={styles.normalPrice}>
            {t("normalprice")}
            <b>Rp. {hargaAwal.toLocaleString()}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LotCard;
