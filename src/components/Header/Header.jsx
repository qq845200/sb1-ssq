import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center space-x-3">
        <ChartBarIcon className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
          双色球智能预测
        </h1>
      </div>
      <p className="text-sm sm:text-base text-gray-500">
        {format(new Date(), 'yyyy年MM月dd日')} · 基于机器学习的智能预测系统
      </p>
    </motion.div>
  );
};

export default Header;