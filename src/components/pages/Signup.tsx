import React from "react";
import FormSignup from "../FormSignup";
import SignHero from "../SignHero";
import FormHeader from "../FormHeader";
import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "6rem auto 2rem",
    maxWidth: 600,
    boxShadow: "0 0 18px rgba(0,0,0,0.25)",
    borderRadius: 8,
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <SignHero>
      <Container>
        <section className={classes.root}>
          <FormHeader title="Sign Up" />
          <FormSignup />
        </section>
      </Container>
    </SignHero>
  );
};

export default Signup;
