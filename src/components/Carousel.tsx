import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { makeStyles, Button } from "@material-ui/core";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { indexRanger } from "../utils";

interface ICProps {
  imgs: string[];
}

const useStyles = makeStyles((theme) => ({
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  nav: {
    display: "none",
    [theme.breakpoints.up(768)]: {
      zIndex: 99,
      display: "flex",
      width: "100%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      "&>button": {
        width: 130,
        height: 130,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "&>button": {
        width: 160,
        height: 160,
        padding: 0,
      },
    },
  },
  prev: {
    marginRight: "auto",
    transform: "translate(-50%) rotate(45deg)",
    "& svg": {
      transform: "rotate(-45deg) translate(75%) ",
    },
  },
  next: {
    transform: "translate(50%) rotate(-45deg)",
    "& svg": {
      transform: "rotate(45deg) translate(-75%) ",
    },
  },
  arrow: { color: "#fff", fontSize: "2.5rem" },
  dotWrapper: {
    zIndex: 99,
    position: "absolute",
    left: "50%",
    bottom: "5%",
    transform: "translate(-50%)",
  },
  dot: {
    height: 12,
    width: 12,
    marginRight: "2em",
    transform: "rotate(45deg)",
    display: "inline-block",
    background: "#fff",
    cursor: "pointer",
    transition: "background 0.4s ease",
    "&:last-child": {
      marginRight: 0,
    },
    "&.active": {
      background: "#EF8216",
    },
  },
}));

const Carousel = ({ imgs }: ICProps) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const handlePaginate = (direction: number) => {
    setIndex(index + direction);
  };
  const handleDotClick = (index: number) => {
    setIndex(index);
  };
  const imgIndex = indexRanger(0, imgs.length, index);
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.1 },
          }}
          className={classes.slider}
          key={index}
          style={{
            background: `center /cover no-repeat url(${imgs[imgIndex]})`,
          }}
        />
      </AnimatePresence>
      <div className={classes.nav}>
        <Button
          color="primary"
          variant="contained"
          className={classes.prev}
          onClick={() => handlePaginate(-1)}
        >
          <ArrowBackIosOutlined className={classes.arrow} />
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.next}
          onClick={() => handlePaginate(1)}
        >
          <ArrowForwardIosOutlined className={classes.arrow} />
        </Button>
      </div>
      <div className={classes.dotWrapper}>
        {[0, 1, 2, 3].map((d) => (
          <span
            key={d}
            className={`${classes.dot} ${d === imgIndex ? "active" : ""}`}
            onClick={() => handleDotClick(d)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
