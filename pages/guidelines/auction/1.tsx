import React from "react";

import useTranslation from "utils/useTranslation";
import GuidelinesTabs from "components/GuidelinesTabs";

const contents = [4, 5, 8];

export default function GuidelinesAuction1() {
  const [t] = useTranslation();

  return (
    <GuidelinesTabs type="auction">
      {contents.map((i, index) => (
        <h5>
          {t(`auction1_${index}`)}
          <p className="no-bold">
            <ol>
              {Array.from({ length: i }).map((_, contentIndex) => (
                <li key={index}>
                  {t(`auction1_${index}_${contentIndex}`)}
                  {index === 2 && contentIndex === 4 && (
                    <ol type="a">
                      <li>{t("auction1_2_4_0")}</li>
                      <li>{t("auction1_2_4_1")}</li>
                      <li>{t("auction1_2_4_2")}</li>
                      <li>{t("auction1_2_4_3")}</li>
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </p>
        </h5>
      ))}
    </GuidelinesTabs>
  );
}
