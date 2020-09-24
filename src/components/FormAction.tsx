import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

interface IFProps {
  to: string;
  btn1: string;
  btn2: string;
}

const useStyles = makeStyles((theme) => ({
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
    "&:not(.submit)": {
      textTransform: "capitalize",
    },
    "&.submit": {
      color: "#fff",
      marginTop: "1em",
      [theme.breakpoints.up(768)]: {
        marginTop: 0,
      },
    },
  },
}));

const FormAction = ({ to, btn1, btn2 }: IFProps) => {
  const classes = useStyles();
  const pswLinkRef = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => <Link to={to} ref={ref} {...props} />
  );
  return (
    <div className={classes.action}>
      <Button
        component={pswLinkRef}
        variant="outlined"
        color="primary"
        className={classes.btn}
      >
        {btn1}
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={`${classes.btn} submit`}
      >
        {btn2}
      </Button>
    </div>
  );
};

export default FormAction;
