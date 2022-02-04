import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import Grid from "@mui/material/Grid";

import styles from "styles/LotDetailModal.module.css";
import { useRouter } from "next/router";
import Button from "./Button";
import IconButton from "./IconButton";
import { Barang, Event } from "utils/types";
import axios from "axios";
import moment from "moment";
import Link from "next/link";

interface LotDetailModalProps {
  previousLotId?: string;
  nextLotId?: string;
  lotId?: string;
}

function LotDetailModal({
  lotId,
  previousLotId,
  nextLotId,
}: LotDetailModalProps) {
  const router = useRouter();
  const [isFetching, setFetching] = useState(true);
  const [barang, setBarang] = useState<Barang | undefined>();
  const [event, setEvent] = useState<Event | undefined>();
  const [foto, setFoto] = useState<string | undefined>();

  useEffect(() => {
    if (!lotId) return;

    const fetch = async () => {
      setFetching(true);
      const { data: newBarang } = await axios.get<Barang>(
        `https://narauction.et.r.appspot.com/barang/${lotId}`
      );
      const { data: newEvent } = await axios.get<Event>(
        `https://narauction.et.r.appspot.com/event/${newBarang.idEvent}`
      );
      setBarang(newBarang);
      setEvent(newEvent);
      setFoto(newBarang.foto[0]);
      setFetching(false);
    };

    fetch();
  }, [lotId]);

  return (
    <Modal
      isOpen={!!lotId}
      shouldCloseOnOverlayClick
      onRequestClose={() =>
        router.push("/catalog", undefined, { scroll: false })
      }
      closeTimeoutMS={300}
      className={styles.root}
    >
      {isFetching || !barang || !event ? (
        <p>Mohon Tunggu</p>
      ) : (
        <>
          <div className={styles.header}>
            <b className="large secondary">#{lotId}</b>
            <b className="large success">Available</b>
          </div>
          <Grid container className={styles.main}>
            <Grid item container xs={4} className={styles.imagesPreview}>
              <div>
                <img className={styles.currentImage} src={foto} alt="" />
                {
                  <Grid container spacing={1} className={styles.otherGrid}>
                    {barang.foto.map((f) => (
                      <Grid item xs={4} key={f}>
                        <img
                          className={styles.otherImage}
                          src={f}
                          alt=""
                          onClick={() => setFoto(f)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                }
              </div>
              <div className={styles.buttonBar}>
                <IconButton
                  src="/lot_facebook.svg"
                  backgroundColor="transparent"
                />
                <IconButton
                  src="/lot_instagram.svg"
                  backgroundColor="transparent"
                />
                <IconButton
                  src="/lot_twitter.svg"
                  backgroundColor="transparent"
                />
                <IconButton
                  src="/lot_linkedin.svg"
                  backgroundColor="transparent"
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <h4 className="no-margin">{barang.namaBarang}</h4>
              <p>
                by <b>Lawasan Batik</b>
              </p>
              <p>{barang.description}</p>
              <table>
                <tr>
                  <td>
                    <b>Type</b>
                  </td>
                  <td>{barang.tipe}</td>
                  <td>
                    <b>Creator</b>
                  </td>
                  <td>{barang.namaPembuat}</td>
                </tr>
                <tr>
                  <td>
                    <b>Size</b>
                  </td>
                  <td>
                    {barang.size[0]}cm x {barang.size[1]}cm
                  </td>
                  <td>
                    <b>Price Range</b>
                  </td>
                  <td>
                    Rp. {barang.priceRange[0].toLocaleString()} - Rp.{" "}
                    {barang.priceRange[1].toLocaleString()}
                  </td>
                </tr>
              </table>
              <div className={styles.eventDetail}>
                <img src={event.foto[0]} alt="" className={styles.eventImage} />
                <div>
                  <b>{event.description}</b>
                  <div className={styles.subcontainer}>
                    <img src="/broadcast.svg" alt="" className={styles.icon} />
                    <p className="small">
                      LIVE auction {moment(event.date).format("dddd, D MMMM y")}{" "}
                      at {moment(event.date).format("h:m A")}
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
            </Grid>
          </Grid>
          <div className={styles.footer}>
            {previousLotId && (
              <Link
                passHref
                href={`/catalog?lotId=${previousLotId}`}
                as={`/catalog/${previousLotId}`}
                scroll={false}
              >
                <a style={{ border: "none" }}>
                  <Button color="disabled" disabled={!previousLotId}>
                    <b> {"< <"} Previous Lot</b>
                  </Button>
                </a>
              </Link>
            )}
            {nextLotId && (
              <Link
                passHref
                href={`/catalog?lotId=${nextLotId}`}
                as={`/catalog/${nextLotId}`}
                scroll={false}
              >
                <a style={{ border: "none" }}>
                  <Button color="disabled" disabled={!nextLotId}>
                    <b> Next Lot {"> >"}</b>
                  </Button>
                </a>
              </Link>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
export default LotDetailModal;