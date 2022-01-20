import React from "react";

import Modal from "react-modal";
import Grid from "@material-ui/core/Grid";

import styles from "styles/LotDetailModal.module.css";
import { useRouter } from "next/router";
import Button from "./Button";
import IconButton from "./IconButton";

interface LotDetailModalProps {
  lotId?: string;
}

function LotDetailModal({ lotId }: LotDetailModalProps) {
  const router = useRouter();

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
      <div className={styles.header}>
        <b className="large secondary">#{lotId}</b>
        <b className="large success">Available</b>
      </div>
      <Grid container className={styles.main}>
        <Grid item container xs={4} className={styles.imagesPreview}>
          <div>
            <img
              className={styles.currentImage}
              src="/lotmodal_example.png"
              alt=""
            />
            <Grid container spacing={1} className={styles.otherGrid}>
              <Grid item xs={4}>
                <img
                  className={styles.otherImage}
                  src="/lotmodal_example.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  className={styles.otherImage}
                  src="/lotmodal_example.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  className={styles.otherImage}
                  src="/lotmodal_example.png"
                  alt=""
                />
              </Grid>
            </Grid>
          </div>
          <div className={styles.buttonBar}>
            <IconButton src="/lot_facebook.svg" backgroundColor="transparent" />
            <IconButton
              src="/lot_instagram.svg"
              backgroundColor="transparent"
            />
            <IconButton src="/lot_twitter.svg" backgroundColor="transparent" />
            <IconButton src="/lot_linkedin.svg" backgroundColor="transparent" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h4 className="no-margin">Cras sed massa augue nibh.</h4>
          <p>
            by <b>Lawasan Batik</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            ultricies vulputate diam hendrerit rutrum enim sed urna. At faucibus
            egestas egestas pretium. Enim nulla adipiscing semper aliquet
            egestas adipiscing elit erat. Enim ipsum dictum dictumst ac magna
            pharetra pretium nisi. Pellentesque suspendisse in gravida convallis
            facilisis tincidunt tincidunt.
            {"\n\n\n"}
            Massa cras aliquet sit sollicitudin dolor a sem risus id. Turpis
            convallis proin ipsum ut senectus lacus viverra. Nunc facilisis
            suspendisse pellentesque cras egestas. Quisque malesuada at cursus
            non scelerisque enim. Nisl magna adipiscing mattis nulla non ut
            praesent. At nunc bibendum lobortis purus neque. Tincidunt.
          </p>
          <table>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Fabric</td>
              <td>
                <b>Creator</b>
              </td>
              <td>I Ketut Gede Bajirut</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>110cm x 90cm</td>
              <td>
                <b>Price Range</b>
              </td>
              <td>Rp. 5.000.000</td>
            </tr>
          </table>
          <div className={styles.eventDetail}>
            <img src="/catalog_slider_example.png" alt="" />
            <div>
              <b>Event Name</b>
              <div className={styles.subcontainer}>
                <img src="/broadcast.svg" alt="" className={styles.icon} />
                <p className="small">
                  LIVE auction Saturday, 11 December 2021 at 2:30 PM
                </p>
              </div>
              <Button size="small" color="disabled" outline>
                <img src="/bid.svg" alt="" className={`${styles.icon} icon`} />
                <p className="small">Lets Bidding Now</p>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.footer}>
        <Button color="disabled">
          <b> {"< <"} Previous Lot</b>
        </Button>
        <Button color="disabled">
          <b> Next Lot {"> >"}</b>
        </Button>
      </div>
    </Modal>
  );
}
export default LotDetailModal;
