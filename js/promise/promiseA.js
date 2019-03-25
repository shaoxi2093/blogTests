function PromiseA (fn){
  this.status = 'pending'
  this.value = undefined
  this.reason = undefined
  this.thenCb = function () {}
  this.errorCb = function () {}

  this.resolve = (value) => {
    if(this.status == 'pending'){
      this.status = 'resolve'
      this.value = value
    }
    this.thenCb(value)
  }
  this.reject = (reason) => {
    if(this.status == 'pending'){
      this.status = 'reject'
      this.reason = reason
    }
    this.errorCb(reason)
  }
  fn(this.resolve, this.reject)
}

PromiseA.prototype.then = function (fn) {
  this.thenCb = fn
  return this
}
PromiseA.prototype.catch = function (fn) {
  this.errorCb = fn
  return this
}

// TODO 第二个then方法应该执行，value2应该是前一个then方法返回的值
new Promise((resolve, reject) => {
  setTimeout(function() {
    var rand = Math.random() * 3
    if(rand >= 2){
      resolve(`resolve ${rand}`)
    } else {
      reject(`reject ${rand}`)
    }
  }, 1000)
}).then(value => {
  console.log(value)
  return 1111
}).then(value2 => {
  console.log('then2', value2)
}).catch(error => {
  console.log(error)
})