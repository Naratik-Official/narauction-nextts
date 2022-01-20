import React from "react";
import type { AppProps } from "next/app";
import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";

import Head from "next/head";
// import Navbar from 'components/Navbar';
// import Footer from 'components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-slideshow-image/dist/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Narauction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {GoogleFonts()}
      </Head>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
