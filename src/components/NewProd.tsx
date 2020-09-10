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
      height: 328,
      padding: "0 0.75em",
      objectFit: "none",
    },
    btnAction: {
      display: "flex",
      justifyContent: "space-between",
    },
  });

const useStyles = makeStyles((theme) => ({
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
      <Typography variant="h2" className={classes.title}>
        New Arrivals
      </Typography>
      <Grid container spacing={2}>
        {newArrival.map((n) => (
          <Grid key={n.id} item xs={12} sm={6} md={3}>
            <WithItemCard {...n} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewProd;
