import React from "react";

import styles from "styles/LotCard.module.css";
import { Barang } from "utils/types";
import useTranslation from "utils/useTranslation";

interface LotCardProps {
  barang: Barang;
}

function LotCard({ barang }: LotCardProps) {
  const { lot, foto, namaBarang, tahunPembuatan, priceRange } = barang;
  const [t] = useTranslation();

  return (
    <div className={styles.card}>
      <img src={foto[0]} alt="" />
      <div className={styles.content}>
        <b className="medium">{namaBarang}</b>
        <p className="small">
          #{lot} - {tahunPembuatan}
        </p>
        <div className={styles.footer}>
          <p>
            {t("pricerange")}
            <b>Rp. {priceRange[0].toLocaleString()}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LotCard;
