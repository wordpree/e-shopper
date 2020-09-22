import React from "react";
import { Link, LinkProps } from "react-router-dom";
import {
  Button,
  Typography,
  makeStyles,
  Container,
  TextField,
  Checkbox,
} from "@material-ui/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";

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
  textfield: {
    marginTop: "2rem",
    "& input": {
      fontSize: "0.875rem",
    },
  },
  checkbox: {
    margin: "2rem 0",
  },
  labelText: {
    fontWeight: "bold",
  },
  action: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  btn: {
    minWidth: "85%",
    fontWeight: "bold",
    [theme.breakpoints.up(768)]: {
      width: 258,
      minWidth: "inherit",
    },
    "&.submit": {
      color: "#fff",
      marginTop: "1em",
      [theme.breakpoints.up(768)]: {
        marginTop: 0,
      },
    },
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
  const pswLinkRef = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => <Link to="/signup" ref={ref} {...props} />
  );
  return (
    <Container>
      <section className={classes.root}>
        <div className={classes.header}>
          <Typography>LOGIN</Typography>
          <Button>
            <CloseOutlined />
          </Button>
        </div>
        <form className={classes.form}>
          <TextField
            placeholder="Email/Username"
            className={classes.textfield}
            fullWidth
            variant="outlined"
          />
          <TextField
            placeholder="password"
            type="password"
            className={classes.textfield}
            fullWidth
            variant="outlined"
          />
          <div className={classes.checkbox}>
            <Checkbox
              inputProps={{ "aria-label": "remember me", id: "remember" }}
              color="primary"
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
          <div className={classes.action}>
            <Button
              component={pswLinkRef}
              variant="outlined"
              color="primary"
              className={classes.btn}
            >
              Forgot Password
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={`${classes.btn} submit`}
            >
              Login
            </Button>
          </div>
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
