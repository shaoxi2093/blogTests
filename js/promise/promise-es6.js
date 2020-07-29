class PromiseA {
  constructor(doFn) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.resolveCbs = [];
    this.rejectCbs = [];

    let resolve = value => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.resolveCbs.forEach(fn => fn());
      }
    };

    let reject = reason => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.rejectCbs.forEach(fn => fn());
      }
    };

    then = (onFulfilled, onRejected) => {
      let promise2 = new PromiseA((resolve, reject) => {
        if (this.state == "fulfilled") {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } else if (this.state == "rejected") {
          let x = onRejected(this.rejectCbs);
          resolvePromise(promise2, x, resolve, reject);
        } else {
          this.resolveCbs.push(() => {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          });
          this.rejectCbs.push(() => {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          });
        }
      });
      return promise2; // 达到满足链式Promise().then().then()... ，但是不能返回this，因为每个then要的都是上一个then里的返回值而不是第一个promise
    };

    try {
      doFn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
}
/**
 * 处理当前promise和上一个promise之间的关系
 * @param {*} promise2
 * @param {*} x
 * @param {*} resolve
 * @param {*} reject
 * 1. 若then里返回的是当前then的promise，则抛错
 * 2. 若是普通值，直接resolve
 * 3. 若是object，function，默认它是promise
 * 4. 普通对象，直接resolve
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (x === promise2) {
    // 1 reject报错
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  let called;
  if (x !== null && (typeof x == "object" || typeof x == "function")) {
    try {
      // 3 
      let then = x.then;
      if (typeof then == "function") {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(x, y, resolve, reject);
          },
          e => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        // 4 x为普通对象
        resolve(x)
      }
    } catch (e) {
      reject(e);
    }
  } else {
    // 2 直接resolve
    resolve(x);
  }
}
