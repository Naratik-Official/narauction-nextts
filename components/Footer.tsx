import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import styles from "styles/Footer.module.css";
import Link from "next/link";
import IconButton from "./IconButton";
import Button from "./Button";
import TextInput from "./TextInput";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleEmail = (input: string) => setEmail(input);

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
                  <td>St. Imam Bonjol No. 207, Semarang City, 50131</td>
                </tr>
                <tr>
                  <td>
                    <img src="/phone.svg" alt="" className="icon" />
                  </td>
                  <td>0851 6141 6104</td>
                </tr>
                <tr>
                  <td>
                    <img src="/location.svg" alt="" className="icon" />
                  </td>
                  <td>support@naratik.com</td>
                </tr>
              </table>
              <div className={styles.iconBar}>
                <a
                  href="https://www.linkedin.com/company/naratik"
                  target="_blank"
                >
                  <IconButton
                    backgroundColor="transparent"
                    size="small"
                    src="/linkedin.svg"
                  />
                </a>
                <a href="https://www.instagram.com/naratik.id/" target="_blank">
                  <IconButton
                    backgroundColor="transparent"
                    size="small"
                    src="/instagram.svg"
                  />
                </a>
                <a
                  href="https://www.facebook.com/naratik.official"
                  target="_blank"
                >
                  <IconButton
                    backgroundColor="transparent"
                    size="small"
                    src="/facebook.svg"
                  />
                </a>
              </div>
            </div>
            <div>
              <h5>Subscribe to Narauction</h5>
              <p>To get more information for Auction</p>
              <div className={styles.mainContainer}>
                <TextInput
                  outline
                  onChange={handleEmail}
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
              <Link href="/guidelines/term/1">Terms & Condition</Link>
              {/* <div className={styles.bottomDivider} /> */}
              {/* <Link href="/">Privacy Policy</Link> */}
            </div>
            <p>Copyright © 2021 Naratik</p>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </footer>
  );
}
