export const recentPatterns = {
  // 红球热温冷区间统计
  redZones: {
    hot: [3, 5, 12, 21, 25, 29], // 高频出现
    warm: [1, 7, 11, 15, 18, 22, 27, 31], // 中频出现
    cold: [2, 4, 6, 8, 9, 10, 13, 14, 16, 17, 19, 20, 23, 24, 26, 28, 30, 32, 33] // 低频出现
  },
  
  // 蓝球近期热点
  blueHotSpots: [3, 6, 10, 12, 15],
  
  // 连号出现概率
  consecutiveProbability: 0.35,
  
  // 奇偶比例概率
  oddEvenRatios: {
    '4:2': 0.3,
    '3:3': 0.4,
    '2:4': 0.3
  },
  
  // 区间比例
  zoneDistribution: {
    '1-11': 0.33,
    '12-22': 0.34,
    '23-33': 0.33
  }
};