import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const GenerateButton = ({ onClick, isGenerating }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={isGenerating}
      className={clsx(
        "w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-medium text-white text-sm sm:text-base",
        "bg-gradient-to-r from-blue-500 to-blue-600",
        "shadow-lg shadow-blue-500/20",
        "transition-all duration-300",
        "backdrop-blur-sm",
        "hover:shadow-blue-500/30",
        "active:from-blue-600 active:to-blue-700",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      )}
    >
      {isGenerating ? '生成中...' : '生成新号码'}
    </motion.button>
  );
};

export default GenerateButton;