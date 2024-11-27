import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Ball from '../Ball/Ball';
import { recentResults } from '../../constants/recentResults';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const RecentResults = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm sm:text-base font-medium text-gray-700 text-center">
        近期开奖号码
      </h2>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {recentResults.map((result, index) => (
          <motion.div
            key={result.date}
            variants={item}
            className="bg-white/50 rounded-lg p-2 sm:p-3 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">
                {format(new Date(result.date), 'MM月dd日')}
              </span>
              <span className="text-xs text-gray-400">
                {`第${5 - index}期`}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
              {result.red.map((number, idx) => (
                <Ball 
                  key={`${result.date}-red-${idx}`} 
                  number={number} 
                  type="red"
                  small
                />
              ))}
              <Ball 
                number={result.blue} 
                type="blue"
                small
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentResults;