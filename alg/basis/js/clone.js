function clone(obj) {
  if(typeof obj === 'object') {
    const result = Array.isArray(obj) ? [] : {}
    for(const key in obj) {
      result[key] = clone(obj[key])
    }
    return result
  }
  return obj
}

// 处理循环饮用
function clone2(obj, map = new WeakMap()) {
  if(typeof obj === 'object') {
    const result = Array.isArray(obj) ? [] : {}
    if(map.get(obj)) {
      return map.get(obj)
    }
    map.set(obj, obj)
    for(const key in obj) {
      result[key] = clone2(obj[key], map)
    }
    return result
  }
  return obj
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;

console.log(clone2(target))


