function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  });
}
const ajax1 = () =>
  timeout(2100).then(() => {
    console.log('1');
    return 1;
  });

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log('2');
    return 2;
  });

const ajax3 = () =>
  timeout(2000).then(() => {
    console.log('3');
    return 3;
  });

const mergePromise1 = (ajaxArray) => {
  return new Promise((resolve, reject) => {
    // 返回一个新的Promise
    const arr = []; // 定义一个空数组存放结果
    let count = 0;
    function handleData(index, data) {
      arr[index] = data;
      count++;
      if (count === ajaxArray.length) {
        resolve(arr); // resolve,并将结果放入
      }
    }
    // 串行方案
    // function handlePromise(i) {
    //   if (i >= ajaxArray.length) return;
    //   ajaxArray[i]().then((data) => {
    //     handleData(i, data); // 将结果和索引传入handleData函数
    //     handlePromise(i + 1);
    //   }, reject);
    // }
    // handlePromise(0);

    // 并行方案
    for (let i = 0; i < ajaxArray.length; i++) {
      //循环遍历数组
      ajaxArray[i]().then((data) => {
        handleData(i, data); //将结果和索引传入handleData函数，也可以使用node event通知与监听
      }, reject);
    }
  });
};
// 同步async await方式
const mergePromise2 = (ajaxArray) =>
  new Promise((resolve) => {
    const len = ajaxArray.length;
    const data = [];
    async function fn(ajaxArray) {
      for (let i = 0; i < len; i++) {
        const item = await ajaxArray[i]();
        data.push(item);
      }
      resolve(data);
    }
    fn(ajaxArray);
  });

const mergePromise3 = (ajaxArray) =>
  new Promise((resolve, reject) => {
    const len = ajaxArray.length
    const data = []
    let count = 0
    const EventEmitter = require('events').EventEmitter
    const events = new EventEmitter()
    events.on('onePromOk', () => {
      if(count !== len) return
      resolve(data)
    })
    for(let i = 0;i < len;i++){
      ajaxArray[i]().then((resp) => {
        data[i] = resp
        count ++
        events.emit('onePromOk')
      }, () => reject('error'))
    }
  })
mergePromise3([ajax1, ajax2, ajax3]).then((data) => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});