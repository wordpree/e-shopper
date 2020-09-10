import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import bike from "../../assets/bike.jpg";
import bike2 from "../../assets/bike2.jpg";
import bike3 from "../../assets/bike3.jpg";
import bike4 from "../../assets/bike4.jpg";
import Header from "../Header";
import Banner from "../Banner";
import Carousel from "../Carousel";
import NewProd from "../NewProd";

const useStyles = makeStyles((theme) => ({
  hero: {
    overflow: "hidden",
    position: "relative",
    height: "100vh",
    maxHeight: 667,
    minHeight: 620,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.3)",
      display: "table",
      content: "''",
    },
    [theme.breakpoints.up("sm")]: {
      maxHeight: "none",
      minHeight: "auto",
    },
  },
  product: {
    marginTop: "8rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const sliderImg = [bike, bike3, bike2, bike4];
  return (
    <main>
      <section className={classes.hero}>
        <Header bg={false} />
        <Carousel imgs={sliderImg} />
        <Banner />
      </section>
      <Container>
        <section className={classes.product}>
          <NewProd />
        </section>
      </Container>
    </main>
  );
};

export default Home;
