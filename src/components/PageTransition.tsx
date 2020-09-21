import React from "react";
import { motion } from "framer-motion";

interface IPProps {
  children: React.ReactNode;
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ children }: IPProps) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
