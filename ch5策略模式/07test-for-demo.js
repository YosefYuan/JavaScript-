var arr = [1,2,3];
var len = arr.length;
var fns = [
  function(){
    console.log(1)
    // return 1;
  },
  function(){
    console.log(2)
    // return 2;
  }
]
// for break
for(var i = 0,fn;fn = fns[i++];){
  console.log({i});
  console.log(fn);
  var msg = fn();
  if(msg){
    return msg;
  }
}