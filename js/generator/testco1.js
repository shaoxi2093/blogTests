// 结合Promise来实现简易版执行器
function run(gen){
  let genert = gen()

  return next(genert.next())

  function next({value, done}){
    return new Promise(resolve => {
      if(done){
        resolve(value)
      } else {
        if(value instanceof Promise){
          value.then(data => next(genert.next(data))).then(resolve)
        } else {
          resolve(next(genert.next()))
        }
      }
    })
  }
}
function * main(){
  yield 1
  yield new Promise(resolve => resolve(2))
  yield 3
  yield 4
  return 5
}
run(main).then(data => {
  console.log(data)
})