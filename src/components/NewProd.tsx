import React from "react";
import {
  Grid,
  withStyles,
  createStyles,
  Theme,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { newArrival } from "../data";
import ItemCard from "./ItemCard";

const styles = ({ breakpoints }: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "100%",
      backgroundSize: "contain",
    },
    content: {
      minHeight: 152,
    },
    btnAction: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 0,
      paddingBottom: "1em",
    },
  });

const useStyles = makeStyles((theme) => ({
  gridWrapper: {
    maxWidth: 408,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "none",
    },
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "3rem",
  },
}));

const NewProd = () => {
  const WithItemCard = withStyles(styles)(ItemCard);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        New Arrivals
      </Typography>
      <div className={classes.gridWrapper}>
        <Grid container spacing={2}>
          {newArrival.map((n) => (
            <Grid key={n.id} item xs={12} sm={6} md={3}>
              <WithItemCard {...n} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default NewProd;
