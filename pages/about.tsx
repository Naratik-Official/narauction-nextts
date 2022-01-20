import React, { useRef } from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "components/IconButton";
import Button from "components/Button";
import styles from "styles/About.module.css";
import { Slide } from "react-slideshow-image";
import Layout from "components/Layout";

const slides = [
  {
    src: "/about_friendly.svg",
    title: "Friendly Environment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet tortor risus tellus sollicitudin quis faucibus sed. Nam fermentum eu amet, ut montes, pulvinar. Arcu.",
  },
  {
    src: "/about_support.svg",
    title: "Support Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet tortor risus tellus sollicitudin quis faucibus sed. Nam fermentum eu amet, ut montes, pulvinar. Arcu.",
  },
  {
    src: "/about_misc.svg",
    title: "Misc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet tortor risus tellus sollicitudin quis faucibus sed. Nam fermentum eu amet, ut montes, pulvinar. Arcu.",
  },
];

export default function About() {
  const sliderRef = useRef<any>(null);

  const handleNext = () => sliderRef.current.goNext();
  const handlePrev = () => sliderRef.current.goBack();

  return (
    <Layout>
      <Grid container className={styles.header}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <header>
            <p>Introducing our Auction Batik</p>
            <Grid container className={styles.benefitContainer}>
              <Grid item xs={9}>
                <h3>Lorem ipsum dolor sit amet, consectur adipiscing elit</h3>
              </Grid>
              <Grid item xs={3} className={styles.benefits}>
                <ul>
                  <li>Benefit 1</li>
                  <li>Benefit 2</li>
                  <li>Benefit 3</li>
                </ul>
              </Grid>
            </Grid>
            <div className={styles.video}>
              <IconButton src="/play_square.svg" />
              <p>
                Lorem ipsum dolor sit amet, consectur{" "}
                <a href="#">Watch Teaser</a>
              </p>
            </div>
            <img src="/about_header.png" className={styles.imageHeader} />
          </header>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container component="main" className={styles.main}>
        <Grid item xs={1} />
        <Grid container item xs={11}>
          <Grid item xs={4}>
            <p>Lorem Ipsum</p>
            <h3>Augue elementum molestie quis.</h3>
            <div className={styles.buttonBar}>
              <IconButton
                onClick={handlePrev}
                src="/about_prev.svg"
                backgroundColor="transparent"
              />
              <IconButton
                onClick={handleNext}
                src="/about_next.svg"
                backgroundColor="transparent"
              />
            </div>
          </Grid>
          <Grid item xs={8} className={styles.slider}>
            <div className="slide-container">
              <Slide
                ref={sliderRef}
                easing="ease-out"
                slidesToShow={2}
                arrows={false}
                transitionDuration={600}
              >
                {slides.map((slide, index) => (
                  <div className={styles.sliderItem} key={index}>
                    <img src={slide.src} />
                    <b className="large">{slide.title}</b>
                    <p>{slide.description}</p>
                  </div>
                ))}
              </Slide>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={styles.more}>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item xs={5}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper non ultrices tortor, mauris, tortor, cras. Laoreet
              augue nunc sapien id posuere senectus duis mus. Sit est non velit
              ultrices scelerisque. Ut risus, enim, ac at.{" "}
            </p>
            <br />
            <p>
              Viverra augue a urna vel massa diam. Potenti maecenas tellus
              risus, tortor duis pretium, enim. Malesuada maecenas tellus et,
              laoreet porttitor platea venenatis at ut. Luctus scelerisque risus
              ullamcorper id eget phasellus est leo. Sed etiam at blandit et
              ultricies molestie.
            </p>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5} className={styles.register}>
            <b className="secondary">MORE ABOUT BATIK AUCTION</b>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
            <Button color="disabled" outline>
              <p>REGISTER NOW</p>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Layout>
  );
}
