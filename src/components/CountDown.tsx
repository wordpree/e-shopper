import React from "react";
import useCountdown from "./useCountdown";
import { makeStyles } from "@material-ui/core";
import { largeThanOne } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    "&>span": { color: "#fff", fontWeight: "bold", fontSize: "5rem" },
  },
  date: {
    lineHeight: "65px",
    fontWeight: "bold",
    "&:last-child": { color: "#EF8216" },
  },
  flag: {
    fontSize: "0.9rem",
    textTransform: "uppercase",
  },
}));

const CountDown = () => {
  const classes = useStyles();
  const countdown = useCountdown("18 Sep 2020 00:00:00");
  return (
    <div className={classes.root}>
      {countdown.map((c) => (
        <span key={c.name} className={classes.date}>
          {c.count}
          <br />
          <span className={classes.flag}>
            {largeThanOne(c.count) ? c.name + "S" : c.name}
          </span>
        </span>
      ))}
    </div>
  );
};

export default CountDown;
