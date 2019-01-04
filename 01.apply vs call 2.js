var func = function( a, b, c ){
  console.log ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ]
};
func.apply( null, [ 1, 2, 3 ] );//传参带下标的集合（这里是数组）

var func = function( a, b, c ){
  console.log ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ]
};
func.call( null, 1, 2, 3 );//从第二个参数开始，每个参数依次传入函数
