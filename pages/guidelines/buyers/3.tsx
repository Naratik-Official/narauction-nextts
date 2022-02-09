import React from "react";

import GuidelinesHeader from "components/GuidelinesHeader";
import Grid from "@mui/material/Grid";

import styles from "styles/Guidelines.module.css";
import TabLinks from "components/TabLinks";
import Layout from "components/Layout";
import useTranslation from "utils/useTranslation";

export default function GuidelinesBuyers3() {
  const [t] = useTranslation();

  return (
    <Layout>
      <Grid container>
        <GuidelinesHeader />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <main className={styles.root}>
            <TabLinks
              className={styles.tabs}
              items={[
                {
                  label: t("buyers_tab1"),
                  href: "/guidelines/buyers/1",
                },
                {
                  label: t("buyers_tab2"),
                  href: "/guidelines/buyers/2",
                },
                {
                  label: t("buyers_tab3"),
                  href: "/guidelines/buyers/3",
                },
              ]}
            />
            <p>{t("buyers_tab3_content")}</p>
          </main>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Layout>
  );
}
