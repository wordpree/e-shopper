import React from "react";
import { motion } from "framer-motion";
import { CloseOutlined } from "@material-ui/icons";
import {
  makeStyles,
  withStyles,
  Typography,
  createStyles,
  Button,
} from "@material-ui/core";
import LinkNav from "./LinkNav";
import { variantsNavLists, variantsNav } from "../data";

interface IHProps {
  close(): void;
}

const useStyles = makeStyles((theme) => ({
  entry: {
    height: "90vh",
    width: "85%",
    boxShadow: "0 0 0 999em rgba(0,0,0,0.55)",
    background: "rgb(2, 65, 96)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9999,
    paddingTop: "1em",
    paddingLeft: "1em",
  },
  navHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    fontWeight: "bold",
    padding: "1.5em 0",
    "&>span": {
      fontSize: "2.25rem",
    },
    "&>span:nth-child(2)": {
      color: "#fff",
    },
  },
  close: {
    color: "#fff",
  },
  lists: {
    padding: 0,
  },
}));

const style = createStyles({
  navList: { listStyle: "none", padding: "0.5em 0.25em" },
  navBtn: { color: "#fff", width: "100%", display: "block" },
});

const HeaderMobileNav = ({ close }: IHProps) => {
  const WithLinkNav = withStyles(style)(LinkNav);
  const classes = useStyles();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variantsNav}
      className={classes.entry}
    >
      <div className={classes.navHeader}>
        <div className={classes.brand}>
          <Typography component="span" variant="h3" color="primary">
            Old
          </Typography>
          <Typography component="span" variant="h3">
            Gold
          </Typography>
        </div>
        <Button variant="text" className={classes.close} onClick={close}>
          <CloseOutlined />
        </Button>
      </div>
      <motion.ul className={classes.lists} variants={variantsNavLists}>
        <WithLinkNav />
      </motion.ul>
    </motion.div>
  );
};

export default HeaderMobileNav;
