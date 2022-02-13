import React, { useRef } from "react";

import Grid from "@mui/material/Grid";
import IconButton from "components/IconButton";
import Button from "components/Button";
import styles from "styles/About.module.css";
import Layout from "components/Layout";
import useTranslation from "utils/useTranslation";

export default function About() {
    const [t] = useTranslation();

    return (
        <Layout>
            <Grid container className={styles.header}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <header>
                        <p>{t("about_intro")}</p>
                        <Grid container className={styles.benefitContainer}>
                            <Grid item xs={9}>
                                <h3>{t("about_header")}</h3>
                            </Grid>
                            <Grid item xs={3} className={styles.benefits}>
                                <ul>
                                    <li>{t("benefit1")}</li>
                                    <li>{t("benefit2")}</li>
                                    <li>{t("benefit3")}</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <div className={styles.video}>
                            <IconButton src="/play_square.svg" />
                            <p>
                                {/* {t("about_video_text")} */}
                                <a href="#">{t("watchteaser")}</a>
                            </p>
                        </div>
                        <img src="/about_header.png" className={styles.imageHeader} />
                    </header>
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Grid container className={styles.more}>
                <Grid item xs={1} />
                <Grid item container xs={10}>
                    <Grid item xs={5}>
                        <p>{t("about_footer1")}</p>
                        <br />
                        <p>{t("about_footer2")}</p>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5} className={styles.register}>
                        <b className="secondary">{t("moreabout")}</b>
                        <h4>{t("moreabout_title")}</h4>
                        <Button color="transparent" outline>
                            <p>{t("registernow").toUpperCase()}</p>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Layout>
    );
}
