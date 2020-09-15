import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: "5rem",
    "&>span": {
      color: "#EF8216",
    },
  },
  subTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  action: {
    marginTop: "3rem",
    display: "flex",
    maxWidth: 488,
    alignItems: "center",
    "&>*": {
      color: "#fff",
    },
  },
  btn: {
    width: 268,
    marginRight: "auto",
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
