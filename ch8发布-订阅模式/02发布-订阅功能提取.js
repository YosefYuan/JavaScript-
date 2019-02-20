var event = {
  clientList: [],
  listen: function(key, fn){
    if(!this.clientList[key]){
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger: function(){
    var key = Array.prototype.shift.call(arguments),
    fns = this.clientList[key];

    if(!fns || fns.length === 0) {
      return false;
    }

    for(var i = 0, fn; fn = fns[i++];){
      fn.apply(this, arguments);
    }
  }
};

// 取消订阅的事件
event.remove = function(key, fn){
  var fns = this.clientList[key];

  if(!fns){
    return false;
  }
  if(!fn){
    fns && (fns.length = 0);
  }else{
    for(var l = fns.length - 1; l >= 0; l--){
      var _fn = fns[l];
      if(_fn === fn){
        fns.splice(l, 1);
      }
    }
  }
};

// 所有对象动态安装帆布-订阅功能
var installEvent = function(obj){
  for(var i in event){
    obj[i] = event[i];
  }
};

// 售楼处对象 salesOffices 动态增加发布-订阅功能
var salesOffices = {};
installEvent(salesOffices);

salesOffices.listen('squareMeter88', fn1 = function(price){
  console.log('价格= ' + price);
});

salesOffices.listen('squareMeter110', fn2 = function(price){
  console.log('价格= ' + price);
});

salesOffices.trigger('squareMeter88', 2000000);
salesOffices.trigger('squareMeter110', 3000000);

// 删除订阅
salesOffices.remove('squareMeter88', fn1);
salesOffices.trigger('squareMeter88', 2000000);