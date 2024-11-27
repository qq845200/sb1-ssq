// 计算奇偶比例
export const calculateOddEvenRatio = (numbers) => {
  const odds = numbers.filter(n => n % 2 === 1).length;
  const evens = numbers.filter(n => n % 2 === 0).length;
  return `${odds}:${evens}`;
};

// 检查是否有连号
export const hasConsecutiveNumbers = (numbers) => {
  const sorted = [...numbers].sort((a, b) => a - b);
  return sorted.some((num, i) => i > 0 && num === sorted[i - 1] + 1);
};

// 计算区间分布
export const calculateZoneDistribution = (numbers) => {
  const zones = {
    '1-11': 0,
    '12-22': 0,
    '23-33': 0
  };
  
  numbers.forEach(num => {
    if (num <= 11) zones['1-11']++;
    else if (num <= 22) zones['12-22']++;
    else zones['23-33']++;
  });
  
  return zones;
};