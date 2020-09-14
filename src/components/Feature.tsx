import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
  Typography,
} from "@material-ui/core";
import { feature } from "../data";
import ItemCard from "./ItemCard";

const style = ({ breakpoints }: Theme) =>
  createStyles({
    card: {
      height: "100%",
      [breakpoints.up("sm")]: {
        display: "flex",
        "& > div:nth-of-type(2)": {
          alignSelf: "flex-end",
        },
      },
    },
    actionArea: {
      flexGrow: 0,
      flexBasis: "30%",
    },
    media: {
      paddingTop: "100%",
      backgroundSize: "contain",
    },
    content: {
      marginRight: "auto",
    },
    btnAction: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "1em",
    },
  });

const useStyles = makeStyles((theme) => ({
  title: { textAlign: "center", fontWeight: "bold", marginBottom: "3rem" },
  root: { marginTop: "8rem" },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: 410,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "none",
    },
  },
  card: {
    padding: "0.5em",
    flexGrow: 0,
    flexBasis: "100%",
    maxWidth: "100%",
    minHeight: 268,
    [theme.breakpoints.up(1024)]: {
      flexBasis: "50%",
      maxWidth: "50%",
    },
  },
}));

const Feature = () => {
  const classes = useStyles();
  const WithFeatherCard = withStyles(style)(ItemCard);
  return (
    <section className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Our Feature Products
      </Typography>
      <div className={classes.cardWrapper}>
        {feature.map((f) => (
          <div key={f.id} className={classes.card}>
            <WithFeatherCard {...f} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
