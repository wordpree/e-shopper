import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Checkbox } from "@material-ui/core";
import FormInput from "./FormInput";
import FormAction from "./FormAction";
import useFormLogin from "./useForm";
import { emailVandilation } from "../utils";

const useStyles = makeStyles((theme) => ({
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

const FormLogin = () => {
  const classes = useStyles();
  const submit = () => console.log(input);
  const { input, handleChange, handleSubmit } = useFormLogin(
    submit,
    emailVandilation
  );
  const { email, password, checkbox, error } = input;
  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <FormInput
        type="email"
        value={email}
        handleChange={handleChange}
        label="email"
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
        label="password"
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
  );
};
export default FormLogin;
