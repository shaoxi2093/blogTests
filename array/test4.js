const HardMan = name => {
  class HardMan {
    constructor(name) {
      this.queue = [this.init(name)]
      setTimeout(async () => {
        for (let todo of this.queue) {
          await todo()
        }
      }, 0)
    }
    init(name) {
      return () => console.log(`I am ${name}`)
    }
    learn(subject) {
      this.queue.push(() => console.log(`Learning ${subject}`))
      return this
    }
    holdon(time) {
      return () => new Promise(resolve => setTimeout(() => {
        resolve(console.log(`Start learning after ${time} second`))
      }, time * 1000))
    }
    rest(time) {
      this.queue.push(this.holdon(time))
      return this
    }
    restFirst(time) {
      this.queue.unshift(this.holdon(time))
      return this
    }
  }
  return new HardMan(name)
}
HardMan("jack")
HardMan("jack").rest(10).learn("computer")
HardMan("jack").restFirst(5).learn("chinese")