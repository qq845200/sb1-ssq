export const getBallStyles = (type, small = false) => {
  const baseClasses = small 
    ? "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-xs backdrop-blur-sm transition-all duration-300 ease-out"
    : "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg sm:text-xl backdrop-blur-sm transition-all duration-300 ease-out";
  
  const colorClasses = type === 'red' 
    ? "bg-gradient-to-br from-red-400 to-red-500 shadow-lg shadow-red-500/20 hover:shadow-red-500/30" 
    : "bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30";

  return { baseClasses, colorClasses };
};