// 1.利用jquery的 one 绑定一次

var bindEvent = function(){
  $('div').one('click',function(){
    console.log('click');
  });
};

var render = function(){
  console.log('开始渲染列表');
  bindEvent();
};

render();
render();
render();

// 2.利用getSingle函数
var getSingle = function(fn){
  // 首次为undefined
  // 第二次之后被赋值(此处的示例是 true)
  var result;
  return function(){
    return result || (result = fn.apply(this, arguments));
  }
}

var bindEvent2 = getSingle(function(){
  document.getElementById('div1').onclick = function(){
    console.log('click');
  }
  // 第二次之后被赋值为true
  return true;
});

var render = function(){
  console.log('开始渲染列表');
  bindEvent2();
};

render();
render();
render();