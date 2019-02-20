var salesOffices = {}; 

salesOffices.clientList = [];

salesOffices.listen = function(fn){
  this.clientList.push(fn);
};

salesOffices.trigger = function(){
  for(var i = 0, fn; fn = this.clientList[i++];){
    fn.apply(this, arguments);
  }
};

// 测试
// salesOffices.listen(function(price, squareMeter){
//   console.log('价格= ' + price);
//   console.log('squareMeter= ' + squareMeter);
// });

// salesOffices.listen(function(price, squareMeter){
//   console.log('价格= ' + price);
//   console.log('squareMeter= ' + squareMeter);
// });

// salesOffices.trigger(2000000, 88);
// salesOffices.trigger(3000000, 110);

// 优化
var salesOffices = {};

salesOffices.clientList = [];

salesOffices.listen = function(key, fn){
  if(!this.clientList[key]){
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};

salesOffices.trigger = function(){
  var key = Array.prototype.shift.call(arguments),
  fns = this.clientList[key];

  if(!fns || fns.length === 0){
    return false;
  }

  for(var i = 0, fn; fn = fns[i++];){
    console.log(arguments);
    fn.apply(this, arguments);
  }
};

salesOffices.listen('squareMeter88', function(price){
  console.log('价格= ' + price);
});

salesOffices.listen('squareMeter110', function(price){
  console.log('价格= ' + price);
});

salesOffices.trigger('squareMeter88', 2000000);
salesOffices.trigger('squareMeter110', 3000000);