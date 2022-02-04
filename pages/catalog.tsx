import React, { useEffect, useMemo, useState } from "react";

import Grid from "@mui/material/Grid";
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

import axios from "axios";
import { BarangEvent, Event } from "utils/types";
import moment from "moment";

Modal.setAppElement("#__next");

export default function Catalog() {
  const { lotId } = useRouter().query;
  const [barangEvents, setBarangEvents] = useState<BarangEvent>({});
  const [activeEventId, setActiveEventId] = useState<string | undefined>();
  const [fetchingBarang, setFetchingBarang] = useState(true);
  const [previousLotId, nextLotId] = useMemo(() => {
    if (!lotId) return [undefined, undefined];

    const currentEvent = Object.entries(barangEvents)
      .map((e) => e[1])
      .find((value) => {
        return value.barang.find((b) => b.id === lotId) ? true : false;
      });
    if (!currentEvent) return [undefined, undefined];

    const { barang } = currentEvent;
    const { length } = barang;

    if (length === 1) return [undefined, undefined];

    const lotIndex = barang.findIndex((b) => b.id === lotId);

    const prevIndex = (lotIndex + length - 1) % length;
    const nextIndex = (lotIndex + 1) % length;

    return [barang[prevIndex].id, barang[nextIndex].id];
  }, [lotId, barangEvents]);

  useEffect(() => {
    const fetch = async () => {
      const { data: events } = await axios.get(
        "https://narauction.et.r.appspot.com/event"
      );
      setBarangEvents(() => ({
        ...Object.fromEntries(
          events.map((e: Event) => [
            e.id,
            {
              ...e,
              barang: [],
            },
          ])
        ),
      }));
      if (events.length > 0) setActiveEventId(events[0].id);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setFetchingBarang(true);
      try {
        const { data: barang } = await axios.get(
          `https://narauction.et.r.appspot.com/barang/event/${activeEventId}`
        );
        setBarangEvents((state) => ({
          ...state,
          [activeEventId!]: {
            ...state[activeEventId!],
            barang: [...barang],
          },
        }));
      } catch {
        setBarangEvents((state) => ({
          ...state,
          [activeEventId!]: {
            ...state[activeEventId!],
            barang: [],
          },
        }));
      }
      setFetchingBarang(false);
    };

    if (activeEventId) fetch();
  }, [activeEventId]);

  const handleSlideChange = (index: number) => {
    setActiveEventId(Object.entries(barangEvents)[index][0]);
  };

  return (
    <Layout>
      <LotDetailModal
        lotId={lotId as string | undefined}
        nextLotId={nextLotId}
        previousLotId={previousLotId}
      />
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
          <CustomSlider
            className={styles.slider}
            autoplay={false}
            afterChange={handleSlideChange}
          >
            {Object.entries(barangEvents).map(([id, e]) => (
              <div key={id}>
                <div
                  className={styles.sliderItem}
                  style={{
                    background: `
                  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%),
                  url(${e.foto[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={styles.sliderContent}>
                    <h5>{e.description}</h5>
                    <div className={styles.subcontainer}>
                      <img
                        src="/broadcast.svg"
                        alt=""
                        className={`${styles.icon} icon`}
                      />
                      <p className="extra-small">
                        LIVE auction {moment(e.date).format("dddd, D MMMM y")}{" "}
                        at {moment(e.date).format("h:m A")}
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
          {activeEventId && barangEvents[activeEventId].barang.length > 0 && (
            <div className={styles.searchBar}>
              <TextInput type="text" placeholder="Search Lots..." />
              <Button color="secondary">
                <b>Search</b>
              </Button>
            </div>
          )}
          {activeEventId && (
            <Grid container spacing={3}>
              {barangEvents[activeEventId].barang.length > 0 &&
              !fetchingBarang ? (
                barangEvents[activeEventId].barang.map((b) => (
                  <Grid item xs={4} key={b.id}>
                    <Link
                      passHref
                      href={`/catalog?lotId=${b.id}`}
                      as={`/catalog/${b.id}`}
                      scroll={false}
                    >
                      <a style={{ border: "none" }}>
                        <LotCard barang={b} />
                      </a>
                    </Link>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <p className={styles.barangStatusText}>
                    {fetchingBarang ? "Mohon tunggu..." : "Belum ada barang"}
                  </p>
                </Grid>
              )}
            </Grid>
          )}
          <div className={styles.spacer} />
          {/* <Paginator /> */}
        </Grid>
        <Grid item xs={1} />
        <div className={styles.background} />
      </Grid>
    </Layout>
  );
}
