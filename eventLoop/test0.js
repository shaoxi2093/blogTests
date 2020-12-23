/**
 * test1 ============================= 主要测试node10及以下，node11+，浏览器(低版本请去掉immediate)的区别
 * 建议暂且抛开timeout+immediate的特殊情况来考虑结果
 * 结论node10 start>end>promise3>time1>time2>promise1>promise2>immediate2>immediate1>immediate3>immediate4
 * 结论node11+ start>end>promise3>time1>promise1>time2>promise2>immediate2>immediate1>immediate3>immediate4
 * 浏览器 start>end>promise3>immediate2>time1>promise1>time2>promise2>immediate1>immediate3>immediate4
 */
// console.log('start')
// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(function() {
//     console.log('promise1')
//   })
//   setImmediate(() => console.log('immediate1'))
// }, 0)
// setImmediate(() => console.log('immediate2'))

// setTimeout(() => {
//   console.log('timer2')
//   setImmediate(() => console.log('immediate3'))

//   Promise.resolve().then(function() {
//     console.log('promise2')
//   })
//   setImmediate(() => console.log('immediate4'))

// }, 0)
// Promise.resolve().then(function() {
//   console.log('promise3')
// })
// console.log('end')

/**
 * test2 附加 node中的timeout和immediate的执行顺序
 */
setTimeout(() => {
  console.log('timeout')
}, 0)
setImmediate(() => {
  console.log('immediate')
})

/**
 * test2 ==============================
 */
// const fs = require('fs')
// const path = require('path')
// fs.readFile(path.resolve(__dirname, 'package.json'), () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0)
//     setImmediate(() => {
//         console.log('immediate')
//     })
// })

/**
 * test3 ===================
 */
// setTimeout(() => {
//   console.log('timeout');
//   Promise.resolve().then(function() {
//         console.log('promise1')
//       })
//       Promise.resolve().then(function() {
//         console.log('promise2')
//       })
//       Promise.resolve().then(function() {
//         console.log('promise3')
//       })
// }, 0)
// setImmediate(() => {
//   console.log('immediate')
// })
// const p = new Promise(resolve => {
//   let count = 1
//   for(var i = 0; i < 100000; i++) {
//     count++
//   }
//   console.log('for 结束')
//   resolve()
// }).then(() => console.log('for promise 结束'))
// Promise.resolve().then(function() {
//   console.log('promise4')
// })

// var setTimeout1 = setTimeout(function() {
//   console.log('---1---')
// }, 0)
// var setTimeout2 = setTimeout(function() {
//   setTimeout(() => console.log('---3---'), 0)

//   Promise.resolve().then(() => {
//     console.log('---2---')
//   })
// }, 0)
// new Promise(function(resolve) {
//   console.time('Promise')
//   for (var i = 0; i < 1000000; i++) {
//     i === 1000000 - 1 && resolve()
//   }
//   console.timeEnd('Promise')
// }).then(function() {
//   console.log('---4---')
// })
// console.log('---5---')
