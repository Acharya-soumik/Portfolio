import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GradientText = () => {
  const colors = [
    "#472e02",
    "#304e02",
    "#07563c",
    "#062e6f",
    "#07095a",
    "#470426",
  ];

  return (
    <motion.h1
      className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
      animate={{ color: colors }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Hey there, I&apos;m Soumik
    </motion.h1>
  );
};

export default GradientText;
