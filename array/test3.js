Array.prototype.unique = function () {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] === this[j]) {
        j = ++i;
      }
    }
    newArray.push(this[i]);
  }
  return newArray;
}

const arr = [];
// 生成[0, 100000]之间的随机数
for (let i = 0; i < 100000; i++) {
  arr.push(0 + Math.floor((100000 - 0 + 1) * Math.random()))
}

// ...实现算法

console.time('test');
arr.unique();
console.timeEnd('test');


