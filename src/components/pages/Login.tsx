import React from "react";
import bike from "../../assets/bike.jpg";
import { makeStyles, Paper } from "@material-ui/core";
import CountDown from "../CountDown";
import Header from "../Header";
import CountDownBanner from "../CountDownBanner";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    background: `center / cover no-repeat url(${bike})`,
    position: "relative",
    minHeight: 320,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(0,0,0,0.32)",
  },
  wrapper: {
    zIndex: 1,
    position: "relative",
    padding: "3em 1em 1em",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      padding: "8em 8%",
      "&>div": {
        flex: "0 1 50%",
        padding: "1em",
      },
    },
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <section>
      <Paper className={classes.bgImg}>
        <Header bg={false} />
        <div className={classes.overlay} />
        <div className={classes.wrapper}>
          <CountDownBanner />
          <CountDown />
        </div>
      </Paper>
    </section>
  );
};

export default Signup;
