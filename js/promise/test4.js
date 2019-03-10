const promiseF = new Promise((resolve, reject) => {
  resolve('ok')
})
promiseF.then(result => {
  console.log(result) // ok
  return "ok2333"  // 相当于Promise.resolve("ok2333")
}).then(result => {
  console.log(result) // ok2333
  return Promise.resolve('ok1') // 传给下一个then
}).then(result => {
  console.log(result) // ok1
}).catch(error => {
  console.log(error) // 不会执行
})