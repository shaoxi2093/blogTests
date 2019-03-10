const promiseF = new Promise((resolve, reject) => {
  resolve('ok')
})
promiseF.then(result => {
  console.log(result) // ok
}).then(result => {
  console.log(result) // 上一个没有return，因此是undefined
  return Promise.resolve('ok1') // 传给下一个then
}).then(result => {
  console.log(result) // ok1
}).catch(error => {
  console.log(error) // 不会执行
})