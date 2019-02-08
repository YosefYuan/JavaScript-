// 原始方案
var ary = [];

for(var i = 1; i <= 1000; i++){
  ary.push(i);
};

var renderFriendList = function(data){
  for(var i = 0, l = data.length; i < l; i ++){
    var div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
  }
};

renderFriendList(ary);

// 优化方案 timeChunk 函数
var timeChunk = function(ary, fn, count){
  var obj,t;

  var start = function(){
    for(var i = 0; i < Math.min(count || 1,ary.length); i ++ ){
      obj = ary.shift();
      fn(obj);
    }
  };

  return function(){
    t = setInterval(function(){
      if(ary.length === 0){
        return clearInterval(t);
      }
      start();
    },200);
  };
};  

// 利用timeChunk 函数，每批只往页面中创建8个节点

var ary = [];

for(var i = 1; i <= 1000; i++) {
  ary.push(i);
};

var renderFriendList = timeChunk(ary, function(n){
  var div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div);
}, 8);

renderFriendList();