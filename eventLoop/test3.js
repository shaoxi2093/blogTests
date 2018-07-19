setImmediate(()=>{
  console.log('setImmediate1')
  setTimeout(()=>{
    console.log('setTimeout1')
  },0)
})
setTimeout(()=>{
  console.log('setTimeout2')
  process.nextTick(()=>{console.log('nextTick1')})
  setImmediate(()=>{
    console.log('setImmediate2')
  })
},0)


//多次运行，会发现，会有两种情况出现
/*
* 可以理解的是，最外面的setImmediate、setTimeout之间的时间忽略不计，而它们是不同模块，因此最后进入队列的先后顺序都有可能
*
*
*
* */