document.getElementById = (function(func){
  return function(){
    return func.apply(document,arguments);
  }
})(document.getElementById);

var getId = document.getElementById;
var div = getId('div1');