import React from "react";

import useTranslation from "utils/useTranslation";
import GuidelinesTabs from "components/GuidelinesTabs";

export default function GuidelinesTerm2() {
  const [t] = useTranslation();

  return (
    <GuidelinesTabs type="term">
      <ol>
        {Array.from({ length: 9 }).map((_, i) => (
          <li key={i}>
            {t(`term2_${i}`)}
            {i === 0 && (
              <ol type="a">
                <li>{t("term2_0_0")}</li>
                <li>{t("term2_0_1")}</li>
              </ol>
            )}
          </li>
        ))}
      </ol>
    </GuidelinesTabs>
  );
}
