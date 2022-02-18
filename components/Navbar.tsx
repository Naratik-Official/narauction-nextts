import React from "react";

import Link from "next/link";
import Grid from "@mui/material/Grid";
import styles from "styles/Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "./Button";

import ActiveLink from "./ActiveLink";
import useTranslation from "utils/useTranslation";
import { LanguageSwitcher } from "next-export-i18n";
import moment from "moment";

export default function Navbar() {
  const [t, currentLang] = useTranslation();

  const handleChangeLanguage = (language: "en" | "id") => {
    localStorage.setItem("lang", language);
    moment.locale(language);
  };

  return (
    <nav>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} className={styles.listContainer}>
          <Link href={`/?lang=${currentLang}`} passHref>
            <a>
              <img src="/logo_brand.svg" alt="Home" />
            </a>
          </Link>
          <ul className={styles.list}>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/">
                <a className={styles.navLink}>{t("home")}</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/catalog">
                <a className={styles.navLink}>{t("catalog")}</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName={styles.navActive}
                href="/guidelines"
                segmented
              >
                <a className={styles.navLink}>{t("guidelines")}</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.navActive} href="/about">
                <a className={styles.navLink}>{t("about")}</a>
              </ActiveLink>
            </li>
            <li>
              <NavDropdown
                title={currentLang.toUpperCase()}
                id="collasible-nav-dropdown"
                className={styles.languageSelector}
              >
                <div onClick={() => handleChangeLanguage("en")}>
                  <LanguageSwitcher lang="en">
                    <NavDropdown.Item>
                      <a className={styles.navLink}>EN</a>
                    </NavDropdown.Item>
                  </LanguageSwitcher>
                </div>
                <div onClick={() => handleChangeLanguage("id")}>
                  <LanguageSwitcher lang="id">
                    <NavDropdown.Item>
                      <a className={styles.navLink}>ID</a>
                    </NavDropdown.Item>
                  </LanguageSwitcher>
                </div>
                {/* <NavDropdown.Item>
                  <ActiveLink
                    activeClassName={styles.navActive}
                    href={route}
                    lang="id"
                  >
                    <a className={styles.navLink}>ID</a>
                  </ActiveLink>
                </NavDropdown.Item> */}
              </NavDropdown>
            </li>
            <li className={styles.buttonContainer}>
              <a href="http://bit.ly/RegistrasiNarauction" target="_blank">
                <Button
                  size="nav"
                  color="primary"
                  className={styles.buttonLink}
                >
                  {t("register")}
                </Button>
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </nav>
  );
}
