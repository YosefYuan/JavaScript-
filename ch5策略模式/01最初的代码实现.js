// 策略模式定义:
// 定义一系列的算法，把它们一个个封装起来，并且使他们可以相互替换

// 发放年终奖
// 最初的代码实现
var calculateBonus = function(performanceLevel, salary){
  if(performanceLevel === 'S'){
    return salary * 4;
  }
  
  if(performanceLevel === 'A'){
    return salary * 3;
  }
  
  if(performanceLevel === 'B'){
    return salary * 2;
  }
};

console.log(calculateBonus('B', 20000));
console.log(calculateBonus('S', 6000)); 