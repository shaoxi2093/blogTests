function* generatorB(count) {
  console.log(count)
  const result = yield 5
  console.log(result * count)
}
const genB = generatorB(2)
genB.next() // 2，第一个next，停在yield，将在下次执行next时传入5
const genBValue = genB.next(7).value // 14，next(7)传入了yield返回值7