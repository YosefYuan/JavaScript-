// 策略模式的目的就是将  算法的使用  与  算法的实现  分离开来

// 策略模式的必要2个部分
// 1.策略类 封装了具体的算法
// 2.环境类 context 它接受客户的请求 随后吧请求委托给某一个策略类； 要做到这点，说明Context中要维持对某个策略对象的引用


// 策略类
var performanceS = function(){};

performanceS.prototype.calculate = function(salary){
  return salary * 4;
};

var performanceA = function(){};

performanceA.prototype.calculate = function(salary){
  return salary * 3;
};

var performanceB = function(){};

performanceB.prototype.calculate = function(salary){
  return salary * 2;
};

// 奖金类 Bonus

var Bonus = function(){
  this.salary = null;
  this.strategy = null;
};

Bonus.prototype.setSalary = function(salary){
  this.salary = salary;
};

Bonus.prototype.setStrategy = function(strategy){
  this.strategy = strategy;
};

Bonus.prototype.getBonus = function(){
  return this.strategy.calculate(this.salary);
};

//demo

var bonus = new Bonus();

bonus.setSalary(10000);
bonus.setStrategy(new performanceS());

console.log(bonus.getBonus());

bonus.setStrategy(new performanceA());
console.log(bonus.getBonus());



