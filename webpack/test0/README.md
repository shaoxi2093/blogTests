## 前言
先写了一个最简单的入口依赖其他模块的示例，观察webpack会打包出什么样的文件，分析打包后的文件、或者说webpack是怎样处理依赖关系的。  

> 备注：本示例中用了es6语法，但是没有搭配babel转换，方便与之后的babel-loader对比  

## 食用方法
可以直接打开dist目录下已经打包好的文件看，或者手动操作如下：  
```
// 安装依赖的webpack
npm install
// 或者
yarn

// 然后
npm run testBuild
```


## 分析
打包后的js结构，为一个自执行函数，结构大概如下：
```
(function(modules){
    /* ... */
    function __webpack_require__(moduleId) {
        // 是否加载过
        // ...
        // 未加载过从入参 modules中找
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports
    }
    return __webpack_require__(__webpack_require__.s = 0); // 默认入口文件
})(
    [
        /* 0 默认入口文件*/
        function(module, __webpack_exports__, __webpack_require__) {
            // ... your code
        },
        /* 1 */
        function(module, __webpack_exports__, __webpack_require__) {
            // ... your code
        },
        // ...
    ]
)
```

可以看出以下几个关键点：
1. 我们写的模块，都被各个封装在了个function中，保证了变量的作用域
2. 不同模块，最后通过moduleId（根据引入顺序，0是入口文件，12345...）来相互引用，引用后，返回的是一个对象，module.export
3. 自执行函数的最终返回是，入口文件的执行，执行完成后，没有export ，返回`{}`