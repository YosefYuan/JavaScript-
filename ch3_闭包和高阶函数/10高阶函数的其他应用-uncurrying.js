// uncurrying 的另外一种实现方式

Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
    return Function.prototype.call.apply(self,arguments);
  }
}