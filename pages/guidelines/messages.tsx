import React from "react";

import GuidelinesHeader from "components/GuidelinesHeader";
import Grid from "@mui/material/Grid";

import styles from "styles/Guidelines.module.css";
import Layout from "components/Layout";
import useTranslation from "utils/useTranslation";

export default function GuidelinesMessages() {
  const [t] = useTranslation();

  return (
    <Layout>
      <Grid container>
        <GuidelinesHeader />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <main className={styles.root}>
            <b>
              {t("messages_from")}
              <br />
              <br />
              {t("messages_dear")},
              <br />
              <br />
            </b>
            <p>{t("messages_content")}</p>
            <br />
            <b>Farrel Athaillah Putra</b>
          </main>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Layout>
  );
}
