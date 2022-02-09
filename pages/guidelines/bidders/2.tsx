import React from "react";

import GuidelinesHeader from "components/GuidelinesHeader";
import Grid from "@mui/material/Grid";

import styles from "styles/Guidelines.module.css";
import TabLinks from "components/TabLinks";
import Layout from "components/Layout";
import useTranslation from "utils/useTranslation";

export default function GuidelinesBidders2() {
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
                  label: t("bidders_tab1"),
                  href: "/guidelines/bidders/1",
                },
                {
                  label: t("bidders_tab2"),
                  href: "/guidelines/bidders/2",
                },
                {
                  label: t("bidders_tab3"),
                  href: "/guidelines/bidders/3",
                },
              ]}
            />
            <p>{t("bidders_tab2_content")}</p>
          </main>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Layout>
  );
}
