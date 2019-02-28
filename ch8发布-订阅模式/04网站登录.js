// 原有的代码
login.succ(function(data){
  headers.setAvatar(data.avatar);
  nav.setAvatar(data.avatar);
  MessageChannel.refresh();
  CaretPosition.refresh;
  // 增加这行代码
  PaymentAddress.refresh();
})

// 改善后的代码
$.ajax('http://xxx.com?login', function(data){
  login.trigger('loginSucc',data);
});

var header = (function(){ //header 模块
  login.listen('loginSucc', function(data){
    header.setAvatar(data.avatar);
  });
  return {
    setAvatar: function(data){
      console.log('设置header模块的头像');
    }
  }
})();

var nav = (function(){ //nav 模块
  login.listen('loginSucc', function(data){
    nav.setAvatar(data.avatar);
  });
  return {
    setAvatar: function(data){
      console.log('设置nav模块的头像');
    }
  }
})();

var address = (function(){ //nav 模块
  login.listen('loginSucc', function(obj){
    address.refresh(obj);
  });
  return {
    refresh: function(avatar){
      console.log('刷新收获地址列表');
    }
  }
})();

