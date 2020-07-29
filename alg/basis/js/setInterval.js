var interv = new Map()
function myInterval(cb, ti) {
  var id = Symbol()
  function doing(cb, ti) {
    setTimeout(() => {
      if(interv.get(id)) {
        cb()
        doing(cb, ti)
      }
    },ti)
    interv.set(id, true)
  }
  doing(cb, ti)
  return id
}

function clearMyInterval(timerId) {
  interv.delete(timerId)
}

const timer = myInterval(() => console.log('xxx'), 1000)

setTimeout(() => clearMyInterval(timer), 10000)