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
import { Discount, HotDeal, DiscountPrice } from "./Alert";

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
  const discountPrice = (price * discount) / 100;
  const salePrice = price - discountPrice;
  return (
    <Card className={classes.card} style={{ position: "relative" }}>
      {discount !== 0 && <Discount discount={discount} />}
      {hot && <HotDeal />}
      <CardActionArea style={{ padding: "1em" }} className={classes.actionArea}>
        <CardMedia image={image} className={classes.media} />
      </CardActionArea>
      <CardContent className={classes.content}>
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
        <Typography variant="caption" color="textSecondary">
          {des}
        </Typography>
      </CardContent>
      <CardActions className={classes.btnAction}>
        <span style={{ color: "#ef8216", fontWeight: "bold" }}>
          {sold ? <span>Sold Out</span> : `${salePrice}`}
          {discount !== 0 && !sold && <DiscountPrice price={discountPrice} />}
        </span>
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
