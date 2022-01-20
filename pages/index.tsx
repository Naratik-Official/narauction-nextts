import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "components/Button";
// import IconButton from 'components/IconButton';
import BatikPalette from "components/BatikPalette";
import CustomSlider from "components/CustomSlider";
// import LotCard from 'components/LotCard';

import styles from "styles/Home.module.css";
import IconButton from "components/IconButton";
import RatingStars, { RatingOptions } from "components/RatingStars";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.root}>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <header className={styles.header}>
              <h1>Lelang Event Name</h1>
              <div className={styles.subtitleBar}>
                <p className={styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  integer nunc vitae a. Aliquet eget malesuada est etiam.
                </p>
                <div className={styles.paletteContainer}>
                  <BatikPalette
                    className={styles.palette5}
                    src="/icon_others.svg"
                  />
                  <BatikPalette className={styles.palette4} src="/icon_4.png" />
                  <BatikPalette className={styles.palette3} src="/icon_3.png" />
                  <BatikPalette className={styles.palette2} src="/icon_2.png" />
                  <BatikPalette className={styles.palette1} src="/icon_1.png" />
                </div>
              </div>
              <div className={styles.buttonBar}>
                <Button outline className={styles.button}>
                  <img src="/bid.svg" alt="" className={styles.icon} />
                  Lets Bidding Now
                </Button>
                <Button outline color="transparent" className={styles.button}>
                  <img src="/list.svg" alt="" className={styles.icon} />
                  View All Lots
                </Button>
                {/* <IconButton
                src="/goggle.svg"
                color="white"
                backgroundColor="transparent"
                outline
              /> */}
              </div>
              <div className={styles.countdown}>
                <div className={styles.subcontainer}>
                  <img
                    src="/stopwatch.svg"
                    alt=""
                    className={`${styles.icon} icon`}
                  />
                  <b>06d : 22h : 36m : 42s</b>
                </div>
                <div className={styles.divider} />
                <p>36 Lots</p>
                <div className={styles.divider} />
                <div className={styles.subcontainer}>
                  <img
                    src="/broadcast.svg"
                    alt=""
                    className={`${styles.icon} icon`}
                  />
                  <p>LIVE auction Saturday, 11 December 2021 at 2:30 PM</p>
                </div>
              </div>
            </header>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <main>
          <div className={styles.collab}>
            <img src="/logo_dark.svg" alt="" className={styles.collab1} />
            <img src="/close.svg" alt="" className={styles.collabIcon} />
            <img src="/lawasanbatik.svg" alt="" className={styles.collab2} />
          </div>
          <Grid container component="section" className={styles.videoSection}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <div className={styles.videoContainer}>
                <div className={styles.feature}>
                  <div className={styles.no1}>
                    <img src="/star.svg" />
                    Online Lelang Batik No. 1
                  </div>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nascetur.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ultrices pulvinar scelerisque a, rutrum quisque sollicitudin
                    elit placerat ullamcorper.{" "}
                  </p>
                </div>
                <div className={styles.videoPreview}>
                  <IconButton src="/play_circle.svg" />
                </div>
              </div>
              <div className={styles.statistics}>
                <div className={styles.statistics1}>
                  <h2>1.5 M</h2>
                  <p className="large">Revenue Stream</p>
                </div>
                <div className={styles.statistics2}>
                  <h2>100+</h2>
                  <p className="large">Batik Product</p>
                </div>
                <div className={styles.statistics3}>
                  <h2>3.000</h2>
                  <p className="large">Client Worldwide</p>
                </div>
                <div className={styles.statistics4}>
                  <h2>1.5</h2>
                  <p className="large">Growth Rate</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container component="section" className={styles.testimonials}>
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
              {/* <h2 className={styles.eventLots}>Event Lots</h2>
            <p className="large center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu purus
              et.
            </p>
            <Grid container spacing={3}>
              {['1', '2', '3', '4', '5', '6'].map((id) => (
                <Grid item xs={4} key={id}>
                  <LotCard
                    lot={{
                      name: 'Molestie sit phasellus neque varius nisl.',
                      number: 904,
                      price: 'Rp. 5.000.000',
                      src: '/lotsample.png',
                      date: '02 March 2021',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <div className={styles.buttonCenter}>
              <Button outline size="large">
                <b className="large">Show More Lots</b>
              </Button>
            </div> */}
              <div className={styles.register}>
                <h4 className="white">
                  Register For Free & Start Bidding Now!
                </h4>
                <Button outline round size="large" color="disabled">
                  <b className="large">REGISTER</b>
                </Button>
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </main>
      </div>
    </Layout>
  );
}
