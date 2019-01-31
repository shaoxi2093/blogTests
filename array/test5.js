function returnHeat(arrA, arrB) {
  const arrsLength = arrA.length + arrB.length
  let num,
    arrAMid = arrA[Math.ceil(arrA.length/2)],
    arrBMid = arrB[Math.ceil(arrB.length/2)]
  arrA.sort(sortFn)
  arrB.sort(sortFn)
  if (arrsLength % 2 === 0) {
    num = (arrAMid + arrBMid) / 2
  }else {
    num = (arrAMid - arrBMid) > 0 ? arrBMid:arrAMid
  }
  return num
}
function sortFn(a,b) {
  return a - b
}