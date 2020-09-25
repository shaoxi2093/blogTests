/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  if (position.length == 0) {
    return 0;
  }
  let pos = position.map((value, index) => ({ index, value }));
  pos.sort((a, b) => b.value - a.value);
  const result = [];
  let count = 8;
  while (1) {
    const cars = [pos[0]];
    const max = (target - pos[0].value) / speed[pos[0].index];
    if (pos.length > 1) {
      for (let i = 1; i < pos.length; i++) {
        const t = (target - pos[i].value) / speed[pos[i].index];
        if (t > max || i == pos.length - 1) {
          pos.splice(0, i);
          break;
        } else {
          cars.push(pos[i]);
        }
      }
    } else {
      pos = [];
    }
    if (count > 1) {
      console.log(pos, count--);
    }

    result.push(cars);

    if (pos.length == 0) {
      return result.length;
    }
  }
};

console.log(carFleet(10, [2, 4], [3, 2]));
