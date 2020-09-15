import React from "react";
import bike from "../../assets/biek.jpg";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    background: `center / cover no-repeat url(${bike})`,
    maxHeight: "528",
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <section>
      <header>
        <Paper className={classes.bgImg}></Paper>
      </header>
    </section>
  );
};

export default Signup;
