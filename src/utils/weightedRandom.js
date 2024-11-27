import { recentPatterns } from '../constants/historicalPatterns';

export const generateWeightedNumber = (weights, excludeNumbers = []) => {
  const availableWeights = { ...weights };
  excludeNumbers.forEach(num => delete availableWeights[num]);
  
  const totalWeight = Object.values(availableWeights).reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const [number, weight] of Object.entries(availableWeights)) {
    random -= weight;
    if (random <= 0) {
      return parseInt(number);
    }
  }
  
  return parseInt(Object.keys(availableWeights)[0]);
};

export const adjustWeightsByPatterns = (weights, type = 'red') => {
  const adjustedWeights = { ...weights };
  
  if (type === 'red') {
    // 调整热温冷区间权重
    recentPatterns.redZones.hot.forEach(num => {
      adjustedWeights[num] *= 1.2;
    });
    recentPatterns.redZones.cold.forEach(num => {
      adjustedWeights[num] *= 0.8;
    });
  } else {
    // 调整蓝球热点权重
    recentPatterns.blueHotSpots.forEach(num => {
      if (adjustedWeights[num]) {
        adjustedWeights[num] *= 1.15;
      }
    });
  }
  
  return adjustedWeights;
};