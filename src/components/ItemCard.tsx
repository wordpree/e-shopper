import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { IProduction } from "../type";

type IIProps = IProduction & { classes: { [key: string]: string } };

const ItemCard = ({
  item,
  image,
  count,
  rate,
  des,
  price,
  sold,
  hot,
  discount,
  classes,
}: IIProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" src={image} className={classes.media} />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5">{item}</Typography>
        <div
          style={{ paddingTop: "1em", display: "flex", alignItems: "center" }}
        >
          <Rating value={rate} readOnly precision={0.5} size="small" />
          <Typography
            component="span"
            variant="caption"
            style={{ marginLeft: "0.25rem" }}
          >
            {count}
          </Typography>
        </div>
        <Typography variant="body2">{des}</Typography>
      </CardContent>
      <CardActions className={classes.btnAction}>
        <span style={{ color: "#ef8216" }}>{price}</span>
        <Button
          disabled={sold}
          style={{ color: "#fff", width: 88, fontWeight: "bold" }}
          color="primary"
          variant="contained"
          size="small"
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
