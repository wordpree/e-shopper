import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@material-ui/icons";
import { Typography, Button, makeStyles, withStyles } from "@material-ui/core";
import LinkNav from "./LinkNav";
import HeaderMobileNav from "./HeaderMobileNav";

interface IHProps {
  bg?: boolean;
}

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1em",
    zIndex: 1,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: "1.5em 2em",
      display: "flex",
      alignItems: "center",
    },
  },
  brand: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    "&>*": {
      fontSize: "2.25rem",
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
      color: "#EF8216",
      fontWeight: "bold",
      display: "inline-block",
    },
    "&>*:nth-child(2)": {
      color: "#fff",
    },
  },
  nav: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginLeft: "auto",
      fontSize: "1.15rem",
      marginRight: "1.5em",
    },
  },
  loginBtn: {
    color: "#fff",
    background: "#EF8216",
    width: 89,
  },
  actionBtn: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
      width: "auto",
    },

    "&>button": {
      color: "#fff",
    },
  },
  menu: {
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  search: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cart: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "1.5em",
    },
  },
}));

const btn = {
  navBtn: {
    color: "#fff",
    minWidth: 89,
    marginRight: "0.5em",
  },
  navList: {
    listStyle: "none",
  },
};

const Header = ({ bg = true }: IHProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };
  const WithLinkNav = withStyles(btn)(LinkNav);
  return (
    <>
      <header
        className={classes.header}
        style={{ backgroundColor: bg ? `#083750` : `inherit` }}
      >
        <div className={classes.brand}>
          <Typography variant="h2">Old</Typography>
          <Typography variant="h2">Gold</Typography>
        </div>
        <nav className={classes.nav}>
          <WithLinkNav />
          <Button className={classes.loginBtn}>Login</Button>
        </nav>
        <div className={classes.actionBtn}>
          <Button className={classes.menu} onClick={handleMenuOpen}>
            <MenuOutlined fontSize="large" />
          </Button>
          <Button className={classes.search}>
            <SearchOutlined fontSize="large" />
          </Button>
          <Button className={classes.cart}>
            <ShoppingCartOutlined fontSize="large" />
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {open && <HeaderMobileNav close={handleMenuClose} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
