import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { services } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "7rem",
    minHeight: 238,
    padding: "3em 1em",
    backgroundColor: "#fefefe",
    "&>p": {
      textAlign: "left",
      fontWeight: "bold",
      color: "#373535",
      [theme.breakpoints.up("sm")]: {
        textAlign: "center",
      },
    },
  },
  title: {
    lineHeight: "75px",
    textAlign: "left",
    fontSize: "2rem",
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: "3rem",
    },
  },
  services: {
    textAlign: "center",
    padding: "2em 0 0 0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  service: {
    listStyle: "none",
    borderRadius: 5,
    width: "100%",
    display: "inline-flex",
    padding: "1em",
    marginBottom: "1rem",
    background: "#EF8216",
    alignItems: "center",
    textAlign: "left",
    color: "rgb(2, 65, 96)",
    boxShadow: "0 0 8px rgba(0,0,0,0.28)",
    maxWidth: 420,
    [theme.breakpoints.up(768)]: {
      width: "calc(50% - 1rem)",
      marginRight: "1rem",
      "&:nth-child(2n)": {
        marginRight: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "1rem !important",
      width: "auto",
      flex: 1,
      "&:last-child": {
        marginRight: "0 !important",
      },
    },
  },
  icon: {
    color: "rgb(2, 65, 96)",
    fontSize: "2rem",
  },
  content: {
    marginLeft: "1.25em",
    "&>h6": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    "&>span": {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
}));

const Service = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Our Services
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Dedicated to a fast-delivering and customer-prioritized service.
      </Typography>
      <ul className={classes.services}>
        {services.map((s) => (
          <li key={s.id} className={classes.service}>
            <div>
              <s.Icon fontSize="inherit" className={classes.icon} />
            </div>
            <div className={classes.content}>
              <Typography variant="subtitle1">{s.title}</Typography>
              <Typography component="span" variant="caption">
                {s.subtitle}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Service;
