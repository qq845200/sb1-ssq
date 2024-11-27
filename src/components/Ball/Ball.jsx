import React from 'react';
import { motion } from 'framer-motion';
import { ballVariants } from './ballAnimations';
import { getBallStyles } from './ballStyles';

const Ball = ({ number, type, small }) => {
  const { baseClasses, colorClasses } = getBallStyles(type, small);

  return (
    <motion.div
      variants={ballVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`${baseClasses} ${colorClasses}`}
    >
      {number.toString().padStart(2, '0')}
    </motion.div>
  );
};

export default Ball;