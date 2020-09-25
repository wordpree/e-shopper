import React from "react";
import { Typography, makeStyles, Checkbox } from "@material-ui/core";
import FormInput from "./FormInput";
import FormAction from "./FormAction";
import useFormLogin from "./useFormLogin";
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
    "&>span": {
      color: "#EF8216",
    },
  },
}));

const FormSignup = () => {
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
      <FormInput
        type="password"
        value={password}
        handleChange={handleChange}
        placeholder="confirm password"
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
        <Typography
          component="span"
          variant="body2"
          className={classes.labelText}
        >
          I Accept With <span>Terms & Agreement</span>
        </Typography>
      </div>
      <FormAction to="/login" btn1="Have An Account" btn2="Sign Up" />
    </form>
  );
};
export default FormSignup;
