var createIframe = (function(){
  var iframe;
  return function(){
    if(!frame){
      iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    return iframe;
  }
})();

var getSingle = function(fn){
  var result;
  return function(){
    return result || (result = fn.apply(this, arguments));
  };
};

// 01.浮窗创建方法
var createLoginLayer = function(){
  var div = document.createElement('div');
  div.innerHTML = '我是登录弹窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}

var createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};

// 02.创建唯一的iframe

var createSingleIframe = getSingle(function(){
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
});

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleIframe();
  loginLayer.src = 'http://baidu.com';
}