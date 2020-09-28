import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Typography, makeStyles, Checkbox, Tooltip } from "@material-ui/core";
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
  inputWrapper: {
    marginTop: "2rem",
    "&>div": { marginTop: "0.25rem" },
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
  const [awsUser, setAwsUser] = useState<{ user: any; awsErr: null | string }>({
    user: null,
    awsErr: null,
  });
  const signup = async (username: string, password: string, email: string) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setAwsUser({ awsErr: null, user: user.getUsername() });
    } catch (error) {
      setAwsUser({ user: null, awsErr: error.message });
    }
  };
  const { input, handleChange, handleSubmit } = useFormLogin(
    signup,
    emailVandilation
  );
  const { email, password, checkbox, error, username } = input;

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <FormInput
        type="text"
        value={username}
        handleChange={handleChange}
        label="user name"
        name="username"
      />
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
      <div className={classes.inputWrapper}>
        <Tooltip
          title={
            <Typography variant="body2">
              must contain numbers,special characters,uppercase/lowercase
              letters and 8 minimum length.
            </Typography>
          }
          placement="bottom-start"
        >
          <Typography>password rules</Typography>
        </Tooltip>
        <FormInput
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          name="password"
        />
      </div>
      <FormInput
        type="password"
        value={password}
        handleChange={handleChange}
        label="confirm password"
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
