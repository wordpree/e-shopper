import React from "react";
import useCountdown from "./useCountdown";
import { makeStyles } from "@material-ui/core";
import { largeThanOne, isCountdownFinished } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    maxWidth: 568,
    margin: "0 auto",
    "&>div:first-child": {
      color: "#ddd",
      textAlign: "center",
      marginBottom: "1rem",
    },
  },
  wrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    "&>span": {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "auto",
      "&>span": {
        fontSize: "3.5rem",
      },
    },
    [theme.breakpoints.up(1480)]: {
      "&>span": {
        fontSize: "5rem",
      },
    },
  },
  date: {
    lineHeight: "inherit",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {},
    "&:last-child": { color: "#EF8216" },
  },
  flag: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
  },
}));

const CountDown = () => {
  const classes = useStyles();
  const countdown = useCountdown("18 Sep 2020 10:18:00");
  const isFinished = isCountdownFinished(countdown);
  return (
    <div className={classes.root}>
      {isFinished && <div>(Our Special Order is Over)</div>}
      <div className={classes.wrapper}>
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
    </div>
  );
};

export default CountDown;
