setTimeout(function () {
  console.log(11111)
}, 0);

new Promise(function (resolve, reject) {
  resolve()
}).then(function () {
  console.log(22222)
}).then(function () {
  console.log(44444)
})

process.nextTick(function () {
  console.log(33333)
})