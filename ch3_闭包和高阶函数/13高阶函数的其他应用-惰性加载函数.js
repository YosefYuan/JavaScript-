// method 1

var addEvent = function(elem, type, handler){
  if(window.addEventListener){
    return elem.addEventListener(type,handler,false);
  }
  if(window.attachEvent){
    return elem.attachEvent('on' + type, handler);
  }
};


// method 2

var addEvent = (function(){
  if(window.addEventListener){
    return function(elem,type,handler){
      elem.addEventListener(type,handler,false);
    }
  }
  if(window.attachEvent){
    return function(elem,type,handler){
      elem.attachEvent('on' + type, handler);
    }
  }
})();

// method 3
// 第一次进入条件分支之后，在函数内部会重写这个函数，重写之后的函数就是我们期望的addEvent函数
// 第二次之后进入addEvent函数的时候，addEvent函数里不再存在条件分支语句
var addEvent = function(elem, type, handler){
  if(window.addEventListener){
    addEvent = function(elem,type, handler){
      elem.addEventListener(type, handler, false);
    }
  }else if(window.attachEvent){
    addEvent = function(elem,type,handler){
      elem.attachEvent('on' + type, handler);
    }
  }
  addEvent(elem,type,handler);
}