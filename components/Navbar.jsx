import React from 'react';

import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import styles from 'styles/Navbar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './Button';

import ActiveLink from './ActiveLink';

export default function Navbar() {
  return (
    <nav>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} className={styles.listContainer}>
          <Link href="/" passHref>
            <a>
              <img src="/logo_brand.svg" alt="Home" />
            </a>
          </Link>
          <ul className={styles.list}>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/">
                <a className={styles.navLink}>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/catalog">
                <a className={styles.navLink}>Catalog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName={styles.navActive}
                href="/guidelines"
                segmented
              >
                <a className={styles.navLink}>Guidelines</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/about">
                <a className={styles.navLink}>About</a>
              </ActiveLink>
            </li>
            <li>
              {/* <div className={styles.languageSelector}> */}
              {/* <img src="/language.svg" alt="" /> */}
              <NavDropdown
                title="EN"
                id="collasible-nav-dropdown"
                className={styles.languageSelector}
              >
                <NavDropdown.Item>
                  <ActiveLink activeClassName={styles.navActive} href="#">
                    <a className={styles.navLink}>EN</a>
                  </ActiveLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ActiveLink activeClassName={styles.navActive} href="#">
                    <a className={styles.navLink}>ID</a>
                  </ActiveLink>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={styles.buttonContainer}>
              <Link href="/register/buyer" passHref>
                <Button
                  size="nav"
                  color="primary"
                  className={styles.buttonLink}
                >
                  Register
                </Button>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </nav>
  );
}
