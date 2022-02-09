import React from "react";

import Grid from "@mui/material/Grid";

import styles from "styles/Footer.module.css";
import Link from "next/link";
import IconButton from "./IconButton";
import Button from "./Button";
import TextInput from "./TextInput";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.scrollToTop} onClick={handleScrollToTop}>
        <img src="/up.svg" />
      </button>
      {/* <IconButton src="/up.svg" size="small"  className={styles.scrollToTop} /> */}
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className={styles.mainContainer}>
            <div>
              <img src="/logo_light.svg" alt="" />
              <table>
                <tr>
                  <td>
                    <img src="/location.svg" alt="" className="icon" />
                  </td>
                  <td>2118 Thornridge Cir. Syracuse, Connecticut 35624</td>
                </tr>
                <tr>
                  <td>
                    <img src="/phone.svg" alt="" className="icon" />
                  </td>
                  <td>(629) 555-0129</td>
                </tr>
                <tr>
                  <td>
                    <img src="/location.svg" alt="" className="icon" />
                  </td>
                  <td>company.name@example.com</td>
                </tr>
              </table>
              <div className={styles.iconBar}>
                <IconButton
                  backgroundColor="transparent"
                  size="small"
                  src="/linkedin.svg"
                />
                <IconButton
                  backgroundColor="transparent"
                  size="small"
                  src="/instagram.svg"
                />
                <IconButton
                  backgroundColor="transparent"
                  size="small"
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div>
              <h5>Subscribe to Narauction</h5>
              <p>To get more information for Auction</p>
              <div className={styles.mainContainer}>
                <TextInput
                  outline
                  type="email"
                  placeholder="Your Email Address..."
                />
                <Button color="disabled" outline>
                  <b>Subscribe</b>
                </Button>
              </div>
            </div>
          </div>
          <div className={`${styles.bottomContainer} ${styles.mainContainer}`}>
            <div className={styles.mainContainer}>
              <Link href="/">Terms & Condition</Link>
              <div className={styles.bottomDivider} />
              <Link href="/">Privacy Policy</Link>
            </div>
            <p>Copyright © 2021 Naratik</p>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </footer>
  );
}
