function deepClone(obj) {
  const result = Array.isArray(obj) ? [] : {};
  const map = new Map();

  const deepObjArr = [
    {
      parent: result,
      key: undefined,
      data: obj,
    },
  ];
  while (deepObjArr.length) {
    const curObj = deepObjArr.pop();
    const parent = curObj.parent;
    const key = curObj.key;
    const data = curObj.data;

    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }

    if (map.has(data)) {
      res = map.get(data);
    }

    for (var k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (isObject(data[k])) {
          deepObjArr.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
    map.set(data, res);
  }

  return result;
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object object]";
}

const b = { ddd: 1 };
const a = { a1: b, a2: b };
const copyA = deepClone(a)
console.log(copyA.a1 === copyA.a2);
