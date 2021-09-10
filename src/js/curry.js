// 函数科里化
// 思路: 比较函数参数，不足返回函数等待接收参数，够了就执行
function curry(fn, ...args) {
  // TODO: 比较参数 
  if (args.length < fn.length) {
    // TODO: 返回函数 等待接收参数
    return function (...args2) {
      return curry(fn, ...args, ...args2)
    }
  } else {
    // TODO: 函数参数够了 执行该函数返回结果
    return fn.apply(this, args)
  }
}

// 使用
function sum(a, b, c, d) {
  return a + b + c + d
}
let curriedSum = curry(sum, 1) // 保存函数和参数
let res = curriedSum(2) // 保存第2个参数与sum函数
let res2 = res(3) // 保存第3个参数
// 传进第四个参数 参数足够了 执行函数 返回执行结果 不能再传递参数了
let res3 = res2(4)
console.log('res', curriedSum, res, res2, res3)