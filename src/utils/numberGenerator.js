import { redNumberWeights, blueNumberWeights } from '../constants/weights';
import { generateWeightedNumber, adjustWeightsByPatterns } from './weightedRandom';
import { calculateOddEvenRatio, hasConsecutiveNumbers, calculateZoneDistribution } from './analysisUtils';
import { recentPatterns } from '../constants/historicalPatterns';

const validateNumbers = (numbers) => {
  const oddEvenRatio = calculateOddEvenRatio(numbers);
  const hasConsecutive = hasConsecutiveNumbers(numbers);
  const zoneDistribution = calculateZoneDistribution(numbers);
  
  // 检查奇偶比例是否合理
  if (!recentPatterns.oddEvenRatios[oddEvenRatio]) {
    return false;
  }
  
  // 检查连号情况
  if (hasConsecutive && Math.random() > recentPatterns.consecutiveProbability) {
    return false;
  }
  
  // 检查区间分布是否均匀
  const isBalanced = Object.entries(zoneDistribution).every(([zone, count]) => {
    const expectedCount = 6 * recentPatterns.zoneDistribution[zone];
    return Math.abs(count - expectedCount) <= 1;
  });
  
  return isBalanced;
};

export const generateLotteryNumbers = () => {
  let redNumbers;
  let isValid = false;
  
  // 调整权重
  const adjustedRedWeights = adjustWeightsByPatterns(redNumberWeights, 'red');
  const adjustedBlueWeights = adjustWeightsByPatterns(blueNumberWeights, 'blue');
  
  // 生成符合规律的红球号码
  while (!isValid) {
    const numbers = new Set();
    while (numbers.size < 6) {
      const excludeNumbers = Array.from(numbers);
      numbers.add(generateWeightedNumber(adjustedRedWeights, excludeNumbers));
    }
    redNumbers = Array.from(numbers).sort((a, b) => a - b);
    isValid = validateNumbers(redNumbers);
  }
  
  // 生成蓝球号码
  const blueNumber = generateWeightedNumber(adjustedBlueWeights);
  
  return {
    red: redNumbers,
    blue: blueNumber
  };
};