import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: "3rem",
    "&>span": {
      color: "#EF8216",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up(1480)]: {
      fontSize: "5rem",
    },
  },
  subTitle: {
    marginTop: "0.25rem",
    color: "#fff",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "column",
    margin: "3rem auto 0",
    display: "flex",
    maxWidth: 488,
    alignItems: "center",
    "&>*": {
      color: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "inherit",
      marginRight: "inherit",
      flexDirection: "row",
    },
  },
  btn: {
    width: 218,
    marginBottom: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
  },
}));

const CountDownBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3">
        FLASH <span>SALE!!</span>
      </Typography>
      <Typography className={classes.subTitle}>
        Fishbite Superbike Express 2020
      </Typography>
      <div className={classes.action}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          size="large"
        >
          Buy Now
        </Button>
        <div>10 Units Remaining</div>
      </div>
    </div>
  );
};

export default CountDownBanner;
