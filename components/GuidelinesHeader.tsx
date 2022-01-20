import React from "react";

import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import styles from "styles/GuidelinesLinks.module.css";
import ActiveLink from "./ActiveLink";

const items = [
  {
    href: "/guidelines/messages",
    label: "Messages",
  },
  {
    href: "/guidelines/auctioneers",
    label: "Guideline For Auctioneers",
    segmented: true,
  },
  {
    href: "/guidelines/bidders",
    label: "Guidelines For Bidders",
    segmented: true,
  },
  {
    href: "/guidelines/buyers",
    label: "Guidelines For Buyers",
    segmented: true,
  },
];

export default function GuidelinesHeader() {
  const router = useRouter();
  return (
    <Grid container className={styles.header}>
      <Grid item xs={1} />
      <Grid item xs={10} className={styles.links}>
        {items.map((item, index) => (
          <>
            <ActiveLink
              key={item.href}
              activeClassName={styles.navActive}
              href={item.href}
              segmented={item.segmented}
            >
              <a
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.href, undefined, {
                    scroll: false,
                  });
                }}
              >
                {item.label}
              </a>
            </ActiveLink>
            {index < items.length - 1 && <div className={styles.divider} />}
          </>
        ))}
        {/* <ActiveLink
          activeClassName={styles.navActive}
          href="/guidelines/messages"
        >
          <a className={styles.navLink}>Messages</a>
        </ActiveLink>
        <div className={styles.divider} />
        <ActiveLink
          activeClassName={styles.navActive}
          href="/guidelines/auctioneers"
          segmented
        >
          <a className={styles.navLink}>Guideline For Auctioneers</a>
        </ActiveLink>
        <div className={styles.divider} />
        <ActiveLink
          activeClassName={styles.navActive}
          href="/guidelines/bidders"
          segmented
        >
          <a className={styles.navLink}>Guideline For Bidders</a>
        </ActiveLink>

        <div className={styles.divider} />
        <ActiveLink
          activeClassName={styles.navActive}
          href="/guidelines/buyers"
          segmented
        >
          <a className={styles.navLink}>Guideline For Buyers</a>
        </ActiveLink> */}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
