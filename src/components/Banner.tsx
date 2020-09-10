import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  article: {
    position: "relative",
    padding: "1em",
    margin: "3em auto 0",
    zIndex: 1,
    "&>*": {
      color: "#fff",
    },
    maxWidth: 420,
    [theme.breakpoints.up("md")]: {
      maxWidth: 640,
      position: "absolute",
      left: "16%",
      top: "50%",
      transform: "translateY(-50%)",
      marginTop: "auto",
    },
  },
  title: {
    color: "#EF8216",
    fontSize: "3rem",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "4.5rem",
      lineHeight: "110px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "6.25rem",
      lineHeight: "120px",
    },
  },
  subtitle: {
    fontSize: "2.25rem",
    textAlign: "center",
    lineHeight: "60px",
    [theme.breakpoints.up("md")]: {
      textAlign: "inherit",
    },
  },
  content: {
    marginTop: "1em",
  },
  action: {
    display: "flex",
    flexDirection: "column",
    "&>button": {
      color: "#fff",
      width: "98%",
      maxWidth: 280,
      margin: "0.75em auto",
    },
    "&>button:nth-child(2)": {
      border: "2px solid #fff",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    marginTop: "3.5em",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <article className={classes.article}>
      <Typography variant="h1" className={classes.title}>
        Perfection
      </Typography>
      <Typography variant="h3" className={classes.subtitle}>
        In Every Shape
      </Typography>
      <Typography className={classes.content}>
        Our brand new Fishbite Superbike Express 2018 with perfection in every
        detail and would blow your mind INSTANTLY!!
      </Typography>
      <div className={classes.action}>
        <Button color="primary" variant="contained" size="large">
          Buy Now
        </Button>
        <Button size="large">Take A Look</Button>
      </div>
    </article>
  );
};

export default Banner;
