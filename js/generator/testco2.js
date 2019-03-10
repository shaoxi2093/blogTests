// 结合Promise来实现简易版执行器2
function step(gen){
  gen = gen()

  let lastValue
  return () => Promise.resolve(gen.next(lastValue).value).then(value => {
    lastValue = value
    return lastValue
  })
}
function * main(){
  yield 1
  yield 2
  yield 3
  yield 4
  return 5
}
const run = step(main)

function recursive(prom){
  prom().then(result => {
    if(result){
      recursive(prom)
    }
  })
}
recursive(run)