import React, { useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "components/Button";
import BatikPalette from "components/BatikPalette";

import styles from "styles/Home.module.css";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import axios from "axios";
import { UpcomingEvent } from "utils/types";
import moment from "moment";
import useTranslation from "utils/useTranslation";
import { Slide } from "react-slideshow-image";

const slides = [
    {
        src: "/about_friendly.svg",
        titleEn: "Live online auction",
        titleId: "Live online auction",
        descEn: "The auction is conducted LIVE online, which bidder can access anytime and anywhere",
        descId: "Lelang dilakukan secara LIVE online yang dapat diakses kapanpun dan dimanapun",
    },
    {
        src: "/about_support.svg",
        titleEn: "Validated by curator",
        titleId: "Tervalidasi kurator",
        descEn: "Ancient batik that will be auctioned has been curated and guaranteed 100% authenticity",
        descId: "Batik kuno yang akan dilelang telah terkurasi dan dijamin 100% keaslian nya.",
    },
    {
        src: "/about_misc.svg",
        titleEn: "Exclusive and rare artwork",
        titleId: "Eksklusif dan langka",
        descEn: "Get an exclusive, rare, and limited collection of ancient batik only at Narauction",
        descId: "Dapatkan segera koleksi batik kuno yang eksklusif, langka, dan terbatas hanya di Narauction",
    },
    {
        src: "/about_misc.svg",
        titleEn: "Meaningful",
        titleId: "Penuh makna",
        descEn: "Each batik has a story and a deep meaning poured by the batik artisan",
        descId: "Tiap batik memiliki kisah dan makna yang mendalam yang dituangkan oleh pengrajin batiknya",
    },
];

export default function Home() {
    const [event, setEvent] = useState<UpcomingEvent | undefined>();
    const [eta, setEta] = useState("");
    const [t, currentLang] = useTranslation();
    const sliderRef = useRef<any>(null);

    const handleNext = () => sliderRef.current.goNext();
    const handlePrev = () => sliderRef.current.goBack();

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get<UpcomingEvent>(
                "https://narauction.et.r.appspot.com/event/upcoming"
            );

            setEvent(data);
            setInterval(() => {
                const eta = moment.duration(moment(data.date).diff(moment())).asDays();

                let day = eta;
                let hour = (day % 1) * 24;
                day = Math.floor(day);
                let minute = (hour % 1) * 60;
                hour = Math.floor(hour);
                let second = Math.floor((minute % 1) * 60);
                minute = Math.floor(minute);

                setEta(`${day}d : ${hour}h : ${minute}m : ${second}s`);
            }, 1000);
        };

        fetch();
    }, []);

    if (!event) return null;

    return (
        <Layout>
            <div className={styles.root}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <header
                            className={styles.header}
                            style={{
                                background: `linear-gradient(
                  90deg,
                  rgba(53, 46, 31, 0.8) 0%,
                  rgba(53, 46, 31, 0) 100%
                ),
                url(${event.foto[0] ?? "/bg_home_header.png"}) center/cover`,
                            }}
                        >
                            <h1>{event.name}</h1>
                            <div className={styles.subtitleBar}>
                                <p className={styles.subtitle}>
                                    {
                                        {
                                            id: event.descId,
                                            en: event.descEn,
                                        }[currentLang]
                                    }
                                </p>
                                {event.fotoItem && (
                                    <div className={styles.paletteContainer}>
                                        <BatikPalette
                                            className={styles.palette5}
                                            src="/icon_others.svg"
                                        />
                                        {event.fotoItem
                                            .filter((_, i) => i < 4)
                                            .map((src, index, arr) => {
                                                const i = 4 - index;
                                                return (
                                                    <BatikPalette
                                                        key={src}
                                                        className={styles[`palette${i}`]}
                                                        src={src}
                                                    />
                                                );
                                            })}
                                    </div>
                                )}
                            </div>
                            <div className={styles.buttonBar}>
                                <Button outline className={styles.button}>
                                    <img src="/bid.svg" alt="" className={styles.icon} />
                                    {t("bidnow")}
                                </Button>
                                <Button outline color="transparent" className={styles.button}>
                                    <img src="/list.svg" alt="" className={styles.icon} />
                                    {t("alllots")}
                                </Button>
                            </div>
                            <div className={styles.countdown}>
                                <div className={styles.subcontainer}>
                                    <img
                                        src="/stopwatch.svg"
                                        alt=""
                                        className={`${styles.icon} icon`}
                                    />
                                    <b>{eta}</b>
                                </div>
                                <div className={styles.divider} />
                                <p>{event.itemCount} Lots</p>
                                <div className={styles.divider} />
                                <div className={styles.subcontainer}>
                                    <img
                                        src="/broadcast.svg"
                                        alt=""
                                        className={`${styles.icon} icon`}
                                    />
                                    <p>
                                        LIVE auction {moment(event.date).format("dddd, D MMMM y")}{" "}
                                        at {moment(event.date).format("h:m A")}
                                    </p>
                                </div>
                            </div>
                        </header>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <main>
                    <div className={styles.collab} />
                    <Grid container component="section" className={styles.videoSection}>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            <div className={styles.videoContainer}>
                                <div className={styles.feature}>
                                    <div className={styles.no1}>
                                        <img src="/star.svg" />
                                        {t("home_main_sub")}
                                    </div>
                                    <h3>{t("home_main_header")}</h3>
                                    <p>{t("home_main_desc")}</p>
                                </div>
                                <div className={styles.videoPreview}>
                                    <IconButton src="/play_circle.svg" />
                                </div>
                            </div>
                            <div className={styles.statistics}>
                                <h2>1.5 M</h2>
                                <p className="large">{t("revenue_stream")}</p>
                            </div>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                    <Grid container item xs={12} className={styles.slides}>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <p>{t("home_slider_caption")}</p>
                            <h3>{t("home_slider_title")}</h3>
                            <div className={styles.buttonBar}>
                                <IconButton
                                    onClick={handlePrev}
                                    src="/about_prev.svg"
                                    backgroundColor="transparent"
                                />
                                <IconButton
                                    onClick={handleNext}
                                    src="/about_next.svg"
                                    backgroundColor="transparent"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={8} className={styles.slider}>
                            <div className="slide-container">
                                <Slide
                                    ref={sliderRef}
                                    easing="ease-out"
                                    slidesToShow={2}
                                    arrows={false}
                                    transitionDuration={600}
                                >
                                    {slides.map((slide, index) => (
                                        <div className={styles.sliderItem} key={index}>
                                            <img src={slide.src} />
                                            <b className="large">
                                                {currentLang === "en"
                                                    ? slide.titleEn
                                                    : slide.titleId}
                                            </b>
                                            <p>
                                                {currentLang === "en" ? slide.descEn : slide.descId}
                                            </p>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={styles.registerContainer}>
                        <Grid item xs={1} />
                        <Grid item xs={10} className={styles.register}>
                            <h4 className="white">{t("home_footer_header")}</h4>
                            <Button outline round size="large" color="disabled">
                                <b className="large">{t("register").toUpperCase()}</b>
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                    {/* <Grid container component="section" className={styles.testimonials}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <h3 className="center">Testimonials</h3>
              <CustomSlider className={styles.slider}>
                {Array.from({ length: 6 }).map((_, e) => (
                  <div key={e}>
                    <img className={styles.quote} src="/quote.svg" alt="" />
                    <div className={styles.sliderContent}>
                      <RatingStars rating={(5 - e) as RatingOptions} />
                      <p>
                        “ Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam vestibulum, elementum nisi, quisque.
                        Volutpat lacus donec dui ullamcorper fermentum quis.”
                      </p>
                      <h5>Name - City</h5>
                    </div>
                  </div>
                ))}
              </CustomSlider>
              
            </Grid>
            <Grid item xs={1} />
          </Grid> */}
                </main>
            </div>
        </Layout>
    );
}
