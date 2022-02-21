import React, { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import styles from "styles/LotDetailModal.module.css";
import { useRouter } from "next/router";
import Button from "./Button";
import IconButton from "./IconButton";
import { Barang, Event } from "utils/types";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import useTranslation from "utils/useTranslation";

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

  const [t, currentLang] = useTranslation();

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
      open={!!lotId}
      onClose={() => router.push("/catalog", undefined, { scroll: false })}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <div className={styles.root}>
        {isFetching || !barang || !event ? (
          <p>{t("pleasewait")}</p>
        ) : (
          <>
            <div className={styles.header}>
              <b className="large secondary">#{barang.lot}</b>
              <b className="large success">{t("available")}</b>
              <IconButton
                backgroundColor="transparent"
                size="small"
                src="/close_small.svg"
                noShadow
                onClick={() =>
                  router.push("/catalog", undefined, { scroll: false })
                }
              />
            </div>
            <Grid container className={styles.main}>
              <Grid
                item
                container
                xs={12}
                md={6}
                lg={4}
                className={styles.imagesPreview}
              >
                <div>
                  <a href={foto} target="_blank">
                    <img className={styles.currentImage} src={foto} alt="" />
                  </a>
                  <ImageList
                    // sx={{ width: 500, height: 450 }}
                    cols={3}
                    rowHeight={128}
                    // rowHeight={164}
                    variant="quilted"
                    sx={{ overflow: "hidden" }}
                  >
                    {barang.foto.map((item) => (
                      <ImageListItem key={item}>
                        <img
                          src={`${item}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          loading="lazy"
                          className={styles.otherImage}
                          onClick={() => setFoto(item)}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <h4 className="no-margin">{barang.namaBarang}</h4>
                <p>
                  Circa <b>{barang.tahunPembuatan}</b>
                </p>
                <p>{currentLang == "en" ? barang.descEn : barang.descId}</p>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    my: "16px",
                    py: "16px",
                    borderBottom: "1px solid #dde0e4",
                    borderTop: "1px solid #dde0e4",
                  }}
                >
                  <Grid item xs={6} lg={3}>
                    <b>{t("type")}</b>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    {barang.tipe}
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <b>{t("creator")}</b>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    {barang.namaPembuat}
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <b>{t("size")}</b>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    {barang.size[0]}cm x {barang.size[1]}cm
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <b>{t("pricerange")}</b>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    Rp. {barang.priceRange[0].toLocaleString()} - Rp.{" "}
                    {barang.priceRange[1].toLocaleString()}
                  </Grid>
                </Grid>
                {/* <table>
                  <tr>
                    <td>
                      <b>{t("type")}</b>
                    </td>
                    <td>{barang.tipe}</td>
                    <td>
                      <b>{t("creator")}</b>
                    </td>
                    <td>{barang.namaPembuat}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("size")}</b>
                    </td>
                    <td>
                      {barang.size[0]}cm x {barang.size[1]}cm
                    </td>
                    <td>
                      <b>{t("pricerange")}</b>
                    </td>
                    <td>
                      Rp. {barang.priceRange[0].toLocaleString()} - Rp.{" "}
                      {barang.priceRange[1].toLocaleString()}
                    </td>
                  </tr>
                </table> */}
                <div className={styles.eventDetail}>
                  <img
                    src={event.foto[0]}
                    alt=""
                    className={styles.eventImage}
                  />
                  <div>
                    <b>{event.name}</b>
                    <div className={styles.subcontainer}>
                      <img
                        src="/broadcast.svg"
                        alt=""
                        className={styles.icon}
                      />
                      <p className="small">
                        LIVE auction{" "}
                        {moment(event.date).format("dddd, D MMMM y")}
                        {/* {" "}
                      {t("at")} {moment(event.date).format("h:m A")} */}
                      </p>
                    </div>
                    <Button size="small" color="disabled" outline>
                      <img
                        src="/bid.svg"
                        alt=""
                        className={`${styles.icon} icon`}
                      />
                      <p className="small">{t("bidnow")}</p>
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
                      <b>
                        {" "}
                        {"< <"} {t("previouslot")}
                      </b>
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
                      <b>
                        {" "}
                        {t("nextlot")} {"> >"}
                      </b>
                    </Button>
                  </a>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
export default LotDetailModal;
