import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  band: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#ef8216",
    color: "#fff",
    fontWeight: "bold",
    position: "absolute",
    right: "1em",
    top: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.hot": {
      backgroundColor: "#ef6716",
      left: "1em",
    },
  },
  price: {
    color: "#8a8a8a",
    position: "relative",
    marginLeft: "1em",
    fontSize: "0.75rem",
    fontWeight: 400,
    display: "inline-block",
    "&::after": {
      display: "inline-block",
      content: "''",
      position: "absolute",
      height: 1,
      width: "100%",
      backgroundColor: "#8C8C8C",
      transform: "rotate(-22.5deg)",
      top: "50%",
      left: 0,
    },
  },
});

export const Discount = ({ discount }: { discount: number }) => {
  const classes = useStyles();
  return <span className={classes.band}>{`-${discount}%`}</span>;
};

export const HotDeal = () => {
  const classes = useStyles();
  return <span className={`${classes.band} hot`}>Hot</span>;
};

export const DiscountPrice = ({ price }: { price: number }) => {
  const classes = useStyles();
  return <span className={classes.price}>${price}</span>;
};
