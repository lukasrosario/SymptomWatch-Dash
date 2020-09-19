import React from "react";
import { motion } from "framer-motion";

const AnimatedIcon = ({ iconFamily, icon }) => {
  return (
    <motion.i className={`${iconFamily} ${icon}`} whileHover={{ scale: 1.2 }} />
  );
};

export default AnimatedIcon;
