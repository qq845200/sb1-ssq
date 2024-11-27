import React from 'react';
import { motion } from 'framer-motion';

const AlgorithmExplanation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-medium text-gray-800">号码生成规律</h2>
      <div className="space-y-4 text-sm text-gray-600">
        <div>
          <h3 className="font-medium text-gray-700 mb-2">历史数据分析</h3>
          <p>基于近期开奖数据，系统会动态分析：</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>号码冷热走势</li>
            <li>奇偶比例分布</li>
            <li>区间号码分布</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700 mb-2">智能权重系统</h3>
          <p>根据以下因素动态调整号码权重：</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>热号权重提升20%</li>
            <li>冷号权重降低20%</li>
            <li>蓝球热点提升15%</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-2">平衡优化</h3>
          <p>生成号码时会确保：</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>奇偶比例均衡</li>
            <li>避免过多连号</li>
            <li>区间分布合理</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AlgorithmExplanation;