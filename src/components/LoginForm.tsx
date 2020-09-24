import React from "react";
import { Link } from "react-router-dom";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import {
  Button,
  Typography,
  makeStyles,
  Container,
  Checkbox,
} from "@material-ui/core";
import FormInput from "./FormInput";
import FormAction from "./FormAction";
import useFormLogin from "./useFormLogin";
import { emailVandilation } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "6rem auto 2rem",
    maxWidth: 600,
    boxShadow: "0 0 18px rgba(0,0,0,0.25)",
    borderRadius: 8,
  },
  header: {
    display: "flex",
    padding: "1em 1.5em",
    justifyContent: "space-between",
    background: "#EF8216",
    alignItems: "center",
    maxHeight: 58,
    "&>*": { color: "#fff" },
  },
  form: {
    padding: "1em ",
    margin: "0 auto",
    [theme.breakpoints.up(768)]: {
      padding: "2em",
    },
  },
  error: {
    color: "#ef6716",
    fontWeight: "bold",
  },
  checkbox: {
    margin: "2rem 0",
  },
  labelText: {
    fontWeight: "bold",
  },
  account: {
    textAlign: "right",
    marginTop: "0.5rem",
    display: "block",
    textDecoration: "none",
    "&>span": {
      fontWeight: "bold",
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const submit = () => console.log(input);
  const { input, handleChange, handleSubmit } = useFormLogin(
    submit,
    emailVandilation
  );
  const { email, password, checkbox, error } = input;
  return (
    <Container>
      <section className={classes.root}>
        <div className={classes.header}>
          <Typography>LOGIN</Typography>
          <Button>
            <CloseOutlined />
          </Button>
        </div>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <FormInput
            type="email"
            value={email}
            handleChange={handleChange}
            placeholder="email"
            name="email"
          />
          {error && (
            <Typography
              component="span"
              variant="caption"
              className={classes.error}
            >
              {error}
            </Typography>
          )}
          <FormInput
            type="password"
            value={password}
            handleChange={handleChange}
            placeholder="password"
            name="password"
          />
          <div className={classes.checkbox}>
            <Checkbox
              inputProps={{
                "aria-label": "remember me",
                name: "checkbox",
                id: "remember",
              }}
              color="primary"
              onChange={handleChange}
              checked={checkbox}
            />
            <label htmlFor="remember">
              <Typography
                component="span"
                variant="body2"
                className={classes.labelText}
              >
                Remember Me
              </Typography>
            </label>
          </div>
          <FormAction to="/" btn1="Forgot Password" btn2="LOGIN" />
          <Link to="/signup" className={classes.account}>
            <Typography component="span" variant="caption" color="primary">
              Don't Have An Account?
            </Typography>
          </Link>
        </form>
      </section>
    </Container>
  );
};

export default LoginForm;
