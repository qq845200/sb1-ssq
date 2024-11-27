import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateLotteryNumbers } from './utils/numberGenerator';
import Header from './components/Header/Header';
import NumberDisplay from './components/NumberDisplay/NumberDisplay';
import GenerateButton from './components/GenerateButton/GenerateButton';
import RecentResults from './components/RecentResults/RecentResults';
import AlgorithmExplanation from './components/AlgorithmExplanation/AlgorithmExplanation';

function App() {
  const [numbers, setNumbers] = useState(generateLotteryNumbers());
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setNumbers(generateLotteryNumbers());
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8"
            >
              <NumberDisplay numbers={numbers} />
              <div className="mt-8">
                <GenerateButton 
                  onClick={handleGenerate}
                  isGenerating={isGenerating}
                />
              </div>
              <div className="mt-4 text-center text-sm text-gray-500/80">
                智能算法基于历史数据分析
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8"
            >
              <RecentResults />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <AlgorithmExplanation />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;