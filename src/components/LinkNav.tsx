import React from "react";
import { motion } from "framer-motion";
import { Button, useMediaQuery } from "@material-ui/core";
import { linkRef } from "../utils";
import { nav, variantsNavList } from "../data";

interface ILProps {
  classes: {
    [key: string]: string;
  };
}

const LinkNav = ({ classes }: ILProps) => {
  const mobile = useMediaQuery("(max-width:959px)");
  return (
    <>
      {nav.map((n) => {
        const link = linkRef(n.link);
        return (
          <motion.li
            key={n.id}
            className={classes.navList}
            variants={mobile ? variantsNavList : undefined}
          >
            <Button
              variant="text"
              component={link}
              className={classes.navBtn && classes.navBtn}
              size="large"
            >
              {n.label}
            </Button>
          </motion.li>
        );
      })}
    </>
  );
};

export default LinkNav;
