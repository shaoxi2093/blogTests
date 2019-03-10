const promiseF = new Promise((resolve, reject) => {
  resolve('ok')
})
promiseF.then(result => {
  return Promise.reject('error1')
}).then(result => {
  console.log(result) // 不会执行
  return Promise.resolve('ok1') // 不会执行
}).then(result => {
  console.log(result) // 不会执行
}).catch(error => {
  console.log(error) // error1
})