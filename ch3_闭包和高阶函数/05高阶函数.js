// 高阶函数：至少满足以下条件之一
// 函数可以作为参数被传递
// 函数可以作为返回值输出

// method 1: 函数作为参数传递
// A. 回调函数
var getUserInfo = function(userId, callback){
  $.ajax('testurl' + userId,function(data){
    if(typeof callback === 'function'){
      callback(data);
    }
  });
}

getUserInfo(13157,function(data){
  console.log(data.userName);
})


// ======================
// 优化前

var appendDiv = function(){
  for(var i = 0; i< 100; i++){
    var div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
    div.style.display = 'none';
  }
}

appendDiv();

// 优化后
var appendDiv = function(callback){
  for(var i = 0; i< 100; i++){
    var div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
    if(typeof callback === 'function'){
      callback(div);
    }
  }
}

appendDiv(function(node){
  node.style.display = 'none';
})

