import React from "react";

import Grid from "@material-ui/core/Grid";
import LotCard from "components/LotCard";
import TextInput from "components/TextInput";
import Button from "components/Button";
import Paginator from "components/Paginator";
import CustomSlider from "components/CustomSlider";

import styles from "styles/Catalog.module.css";
import LotDetailModal from "components/LotDetailModal";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Link from "next/link";
import Layout from "components/Layout";

Modal.setAppElement("#__next");

export default function Catalog() {
  const { lotId } = useRouter().query;

  return (
    <Layout>
      <LotDetailModal lotId={lotId as string | undefined} />
      <Grid container className={styles.root}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <header>
            <h3>
              Leo vulputate{" "}
              <span>
                <h3 className="no-bold">dolor rhoncus sed velit id.</h3>
              </span>{" "}
            </h3>
            <p className="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              morbi dolor habitasse.
            </p>
            <Button>
              <b>Look All Events</b>
            </Button>
          </header>
          <CustomSlider className={styles.slider}>
            {Array.from({ length: 5 }).map((_, e) => (
              <div key={e}>
                <div
                  className={styles.sliderItem}
                  style={{
                    background: `
                  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%),
                  url("/catalog_slider_example.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={styles.sliderContent}>
                    <h5>Lelang Event Name {e}</h5>
                    <div className={styles.subcontainer}>
                      <img
                        src="/broadcast.svg"
                        alt=""
                        className={`${styles.icon} icon`}
                      />
                      <p className="extra-small">
                        LIVE auction Saturday, 11 December 2021 at 2:30 PM
                      </p>
                    </div>
                    <Button size="small" color="disabled" outline>
                      <img
                        src="/bid.svg"
                        alt=""
                        className={`${styles.icon} icon`}
                      />
                      <p className="small">Lets Bidding Now</p>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CustomSlider>
          <div className={styles.searchBar}>
            <TextInput type="text" placeholder="Search Lots..." />
            <Button color="secondary">
              <b>Search</b>
            </Button>
          </div>
          <Grid container spacing={3}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((id) => (
              <Grid item xs={4} key={id}>
                <Link
                  passHref
                  href={`/catalog?lotId=${id}`}
                  as={`/catalog/${id}`}
                  scroll={false}
                >
                  <a style={{ border: "none" }}>
                    <LotCard
                      lot={{
                        id,
                        name: "Molestie sit phasellus neque varius nisl.",
                        number: 904,
                        price: "Rp. 5.000.000",
                        src: "/lotsample.png",
                        date: "02 March 2021",
                      }}
                    />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Paginator />
        </Grid>
        <Grid item xs={1} />
        <div className={styles.background} />
      </Grid>
    </Layout>
  );
}
