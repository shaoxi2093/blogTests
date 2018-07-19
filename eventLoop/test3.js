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