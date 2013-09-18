# Array Overview #

    function Array() {}
        arguments: null
        caller: null
        isArray: function isArray() {}      // 判断一个对象是否数组类型。
        length: 1
        name: "Array"
        prototype: Array[0]    // Array.prototype 也是一个 Array 对象。
            constructor: function Array() {}
            length: 0
            concat: function concat() {}    // 连接两个数组并返回一个新的
            join: function join() {}        // 将数组中的所有元素连接成一个字符串.
            push: function push() {}        // 向数组中添加元素并返回数组的新长度.
            pop: function pop() {}          // 删除一个数组中的最后的一个元素, 并且返回这个元素.
            shift: function shift() {}      // 删除数组的第一个元素并返回, 该方法会改变数组长度.
            unshift: function unshift() {}  // 在数组的开始位置添加一个或者多个成员,并返回新的数组成员个数.
            slice: function slice() {}      // 将原数组中的一部分元素拷贝到一个新数组,拷贝规则为"一级深拷贝".
            splice: function splice() {}    // 修改数组内容, 删除一些旧元素, 用一些新元素替换.
            reverse: function reverse() {}  // 将数组倒序排列.
            sort: function sort() {}        // 根据指定的比较函数排序.
            indexOf: function indexOf() {}  // 查找数组中指定元素第一次出现的位置,没有则返回-1.
            lastIndexOf: function lastIndexOf() {}    // 和indexOf类似,不过从末尾开始匹配.
            forEach: function forEach() {}  // 为每个数组元素执行一次指定的函数.
            map: function map() {}          // 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组.
            filter: function filter() {}    // 返回过滤后的新数组,用法和 map 类似.
            every: function every() {}      // 如果每一项元素都符合条件,则返回 true.
            some: function some() {}        // 如果某一项元素符合条件,则返回 true.
            reduce: function reduce() {}    // 使用一个累加器函数,对数组中的每个元素从左到右进行计算,减少到单一值并返回.
            reduceRight: function reduceRight() {}    // 和reduce类似,不过从右到左.
            toLocaleString: function toLocaleString() {}
            toString: function toString() {}
            __proto__: Object
        __proto__: function Empty() {}

## Array ##

### isArray ###

    // Returns true if an object is an array, false if it is not.
    // @param obj The object to be checked.
    // @since ES3
    Array.isArray(obj)


    // es5-shim
    if(!Array.isArray) {
      Array.isArray = function (vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
      };
    }

## Array.prototype ##

### concat ###

    // 将传入的数组或非数组值与原数组合并,组成一个新的数组并返回.
    // @description
    //     该函数返回的是一个新数组，并不修改原数组对象。
    // @param valueN 需要与原数组合并的数组或非数组值.
    // @since ES3
    // @usage
    //     ["a", "b", "c"].concat(1, 2, 3);
    //     ["a", "b", "c"].concat([1, 2, 3]);
    //     ["a", "b", "c"].concat([1, 2, 3], [4, 5, 6]);
    //     ["a", "b", "c"].concat([1, 2, 3], 4, 5, 6);
    array.concat(value1, value2, ..., valueN)

### join ###

    // 将数组中的所有元素连接成一个字符串.
    // @description
    //     所有的数组元素被转换成字符串,再用一个分隔符将这些字符串连接起来.
    // @param separator
    //     指定连接每个数组元素的分隔符.如果省略的话,默认为一个逗号.
    // @since ES1
    // @usage
    //     ["I", "am", "jpuncle."].join(' ');    // output: 'I am jpuncle.'
    string = array.join(separator)

### push ###

    // 向数组中添加元素并返回数组的新长度.
    // @description
    //     push 有意被设计成为通用方法, 这样就可以通过 call 或 apply 方法
    //     来让一个类数组对象成为调用者, 类数组对象就是一个拥有 length 属性的对象.
    // @param elementN 需要添加到原数组的元素.
    // @return 返回数组的新长度.
    // @since ES3
    // @usage
    //     [1, 2].push(3);            // result: [1, 2, 3]
    //     [1, 2].push(3, 4);         // result: [1, 2, 3, 4]
    //     [1, 2].push(3, [4, 5]);    // result: [1, 2, 3, [4, 5]]
    array.push(element1, ..., elementN)

### pop ###

    // 删除一个数组中的最后的一个元素,并且返回这个元素.
    // @description
    //     pop 有意被设计成为通用方法, 这样就可以通过 call 或 apply 方法
    //     来让一个类数组对象成为调用者, 类数组对象就是一个拥有 length 属性的对象.
    // @since ES3
    array.pop()

### shift ###

    // 删除数组的第一个元素并返回, 该方法会改变数组长度.
    // @description
    //     shift 特意被设计成通用型的方法；这个方法能够对类似于数组的对象执行 called 或者 applied. 
    //     不过对于没有length属性(代表从0开始的一系列连续的数字属性的最后一个)
    //     的对象，调用该方法可能没有任何意义。
    // @since ES3
    array.shift()

### unshift ###

    // 在数组的开始位置添加一个或者多个成员,并返回新的数组成员个数.
    // @description
    //     unshift 特意被设计成通用型的方法；这个方法能够对类似于数组的对象执行 called 或者 applied. 
    //     不过对于没有length属性(代表从0开始的一系列连续的数字属性的最后一个)
    //     的对象，调用该方法可能没有任何意义。
    // @param elementN 需要添加到原数组的元素.
    // @return 返回数组的新长度.
    // @since ES3
    // @usage
    //     [1, 2].unshift(3);            // result: [3, 1, 2]
    //     [1, 2].unshift(3, 4);         // result: [3, 4, 1, 2]
    //     [1, 2].unshift(3, [4, 5]);    // result: [3, [4, 5], 1, 2]
    array.unshift(element1, ..., elementN)

### slice ###

    // 将原数组中的一部分元素拷贝到一个新数组,拷贝规则为"一级深拷贝"(one-level deep copy).
    // @description
    //     slice不修改原数组, slice会抽取原数组中索引从begin到end的所有元素(包含begin,但不包含end).
    //     一级深拷贝即拷贝字符串和数字的值，拷贝对象的引用。
    // @param begin
    //     从该索引处开始抽取原数组元素(从0开始).
    //     如果该参数为负数, 则它表示从原数组中的倒数第几个元素开始抽取, 比如
    //     slice(-2)表示抽取了原数组中的倒数第二个元素到最后一个元素(包含最后一个元素)
    // @param end
    //     在该索引处结束抽取原数组元素(从0开始).
    //     slice(1,4) 抽取了原数组中的第二个元素开始直到第四个元素的所有元素 (索引为 1, 2, 3的元素).
    //     如果该参数为负数, 则它表示在原数组中的倒数第几个元素结束抽取.
    //     slice(-2,-1)表示抽取了原数组中的倒数第二个元素到最后一个元素
    //     (不包含最后一个元素,也就是只有倒数第二个元素).
    // @since ES3
    // @usage
    //     [1, 2, 3, 4, 5, 6].slice(1)       // result: [2, 3, 4, 5, 6]
    //     [1, 2, 3, 4, 5, 6].slice(1, 3)    // result: [2, 3]
    //     [1, 2, 3, 4, 5, 6].slice(-3)      // result: [4, 5, 6]
    //     [1, 2, 3, 4, 5, 6].slice(-3, 5)   // result: [4, 5]
    //     [1, 2, 3, 4, 5, 6].slice(-3, -1)  // result: [4, 5]
    //     [1, 2, 3, 4, 5, 6].slice(4, -2)   // result: []
    array.slice(begin[, end])

### splice ###

    // 修改数组内容,删除一些旧元素, 用一些新元素替换.
    // @param index
    //     开始修改数组内容的起始位置,
    //     如果大于数组长度则不删除内容(相当于 push),
    //     如何为负值，则从末尾倒数 index 个元素开始修改.
    // @param howMany
    //     指定要删除的元素个数, 如果为0, 则不删除元素.
    // @param elementN
    //     需要添加到数组中的新元素,当没有时则不添加.
    // @return
    //     一个包含被替换元素的数组,
    //     在 Netscape Navigator 4 中当被替换的元素只有一个时, 直接返回该元素.
    // @since ES3
    // @usage
    //     [1, 2, 3, 4, 5].splice(1, 3, 'a', 'b')          // result: [1, 'a', 'b', 5]
    //     [1, 2, 3, 4, 5].splice(1, Number.MAX_VALUE);    // result: [1]
    array.splice(index , howMany[, element1[, ...[, elementN]]])

### reverse ###

    // 将数组倒序排列
    // @since ES1
    array.reverse()

### sort ###

    // 排序, 排序结果不必是稳定的.
    // @param compareFunction(a, b)
    //     指定一个定义排序顺序的函数, 如果省略则按词法顺序排序(转换为 string 比较).
    //     如果函数计算结果大于0, b在前面,
    //     如果函数计算结果小于0, a在前面.
    // @since ES5
    // @usage
    //     var numbers = [4, 2, 5, 1, 3];
    //     numbers.sort(function(a, b) {
    //       return a - b;
    //     });
    //     console.log(numbers);    // output: [1, 2, 3, 4, 5]
    //     numbers.sort(function(a, b) {
    //       return b - a;
    //     });
    //     console.log(numbers);    // output: [5, 4, 3, 2, 1]
    array.sort([compareFunction])

### indexOf ###

    // 查找数组中指定元素第一次出现的位置,没有则返回-1.
    // @param searchElement 需要查找的元素.
    // @param fromIndex 默认值为0.
    // @return 返回第一次匹配到的索引值,从0开始计数,没有匹配成功则返回-1.
    // @since ES5
    // @usage
    //     var a = ['a', 'b', 'a', 'b', 'a'];
    //     console.log(a.indexOf('b'));    // output: 1
    //     console.log(a.indexOf('b', 2));    // output: 3
    //     console.log(a.indexOf('z'));    // output: -1
    array.indexOf(searchElement[, fromIndex])


    // example: finding all the occurrences of an element
    var indices = [];
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }


    // es5
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        'use strict';
        if (this == null) {
          throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
          return -1;
        }
        n = 0;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
            n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }
        if (n >= len) {
          return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }
        return -1;
      };
    }

### lastIndexOf ###

    // 和indexOf类似,不过从末尾开始匹配
    // @param fromIndex 默认值为数组长度.
    // @since ES5
    // @usage
    //     var a = ['a', 'b', 'c', 'd', 'a', 'b'];
    //     console.log(a.lastIndexOf('b'));    // output: 5
    //     console.log(a.lastIndexOf('b', 4));    // output: 1
    //     console.log(a.lastIndexOf('z'));    // output: -1
    array.lastIndexOf(searchElement[, fromIndex])


    // example: finding all the occurrences of an element
    var indices = [];
    var idx = array.lastIndexOf(element);

    while (idx != -1) {
      indices.push(idx);
      idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
    }


    // es5
    if (!Array.prototype.lastIndexOf) {
      Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
        'use strict';

        if (this == null) {
          throw new TypeError();
        }

        var n, k,
            t = Object(this),
            len = t.length >>> 0;
        if (len === 0) {
          return -1;
        }

        n = len;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) {
            n = 0;
          }
          else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }

        for (k = n >= 0
              ? Math.min(n, len - 1)
              : len - Math.abs(n); k >= 0; k--) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }
        return -1;
      };
    }

### forEach ###

当一个数组运行 forEach 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 forEach 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. forEach 方法都不会知道.如果数组元素增加,则新增加的元素不会被 forEach 遍历到,如果数组元素减少.则 forEach 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 为每个数组元素执行一次指定的函数.
    // @description 
    //     forEach 方法为数组中的每个有值的元素执行一次给定的callback函数,
    //     只有在那些有值的索引上才会调用callback函数,那些被删除掉的索引或
    //     者从未赋值过的索引将会被跳过.
    // @param callback
    //     callback(element, index, array)
    // @param thisArg
    //     在执行callback函数时指定的this值.
    //     在非严格模式下, thisArg如果没有传参,则表示 window 对象,
    //     在严格模式下, 必须给thisArg传参.?
    // @since ES5
    array.forEach(callback[, thisArg])


    // example
    [2, 5, 9].forEach(function(element, index, array) {
        console.log('array[' + index + '] = ' + element);
    });
    // output:
    // array[0] = 2
    // array[1] = 5
    // array[2] = 9


    // es5-shim
    if ( !Array.prototype.forEach ) {
      Array.prototype.forEach = function(fn, scope) {
        for(var i = 0, len = this.length; i < len; ++i) {
          fn.call(scope, this[i], i, this);
        }
      }
    }


    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.com/#x15.4.4.18
    if ( !Array.prototype.forEach ) {

      Array.prototype.forEach = function forEach( callback, thisArg ) {

        var T, k;

        if ( this == null ) {
          throw new TypeError( "this is null or not defined" );
        }

        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0; // Hack to convert O.length to a UInt32

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if ( {}.toString.call(callback) !== "[object Function]" ) {
          throw new TypeError( callback + " is not a function" );
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if ( thisArg ) {
          T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while( k < len ) {

          var kValue;

          // a. Let Pk be ToString(k).
          //   This is implicit for LHS operands of the in operator
          // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
          //   This step can be combined with c
          // c. If kPresent is true, then
          if ( Object.prototype.hasOwnProperty.call(O, k) ) {

            // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
            kValue = O[ k ];

            // ii. Call the Call internal method of callback with T as the this value and
            // argument list containing kValue, k, and O.
            callback.call( T, kValue, k, O );
          }
          // d. Increase k by 1.
          k++;
        }
        // 8. return undefined
      };
    }


### map ###

当一个数组运行 map 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 map 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. map 方法都不会知道.如果数组元素增加,则新增加的元素不会被 map 遍历到,如果数组元素减少.则 map 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组.
    // @description
    //     map 方法会给原数组中的每个元素(必须有值)都调用一次 callback 函数.
    //     callback 每次执行后的返回值组合起来形成一个新数组. 
    //     callback函数只会在有值的索引上被调用; 
    //     那些从来没被赋过值或者使用delete删除的索引则不会被调用.
    //     
    //     callback 函数会被自动传入三个参数: 数组元素, 元素索引,原数组本身.
    // @param thisArg
    //     如果thisArg参数有值,则每次callback函数被调用的时候,this都会指向thisArg参数上的这个对象.
    //     如果省略了thisArg参数,或者赋值为null, 则this指向全局对象window.?
    // @since ES5
    // @usage
    //     var roots = [1, 4, 9].map(Math.sqrt);    // result: [1, 2, 3]
    array.map(callback[, thisArg])

    // 下面代码的运行结果是什么,如何修正?
    ["1", "2", "3"].map(parseInt);    // [1, NaN, NaN]

    // es5 shim
    // 实现 ECMA-262, Edition 5, 15.4.4.19
    // 参考: http://es5.github.com/#x15.4.4.19
    if (!Array.prototype.map) {
      Array.prototype.map = function(callback, thisArg) {

        var T, A, k;

        if (this == null) {
          throw new TypeError(" this is null or not defined");
        }

        // 1. 将O赋值为调用map方法的数组.
        var O = Object(this);

        // 2.将len赋值为数组O的长度.
        var len = O.length >>> 0;

        // 4.如果callback不是函数,则抛出TypeError异常.
        if ({}.toString.call(callback) != "[object Function]") {
          throw new TypeError(callback + " is not a function");
        }

        // 5. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
        if (thisArg) {
          T = thisArg;
        }

        // 6. 创建新数组A,长度为原数组O长度len
        A = new Array(len);

        // 7. 将k赋值为0
        k = 0;

        // 8. 当 k < len 时,执行循环.
        while(k < len) {

          var kValue, mappedValue;

          //遍历O,k为原数组索引
          if (k in O) {

            //kValue为索引k对应的值.
            kValue = O[ k ];

            // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
            mappedValue = callback.call(T, kValue, k, O);

            // 返回值添加到新书组A中.
            A[ k ] = mappedValue;
          }
          // k自增1
          k++;
        }

        // 9. 返回新数组A
        return A;
      };      
    }

### filter ###

当一个数组运行 filter 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 filter 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. filter 方法都不会知道.如果数组元素增加,则新增加的元素不会被 filter 遍历到,如果数组元素减少.则 filter 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 返回过滤后的新数组,用法和 map 类似.
    // @since ES5
    array.filter(callback[, thisObject])


    // es5 shim
    if (!Array.prototype.filter) {
      Array.prototype.filter = function(fun /*, thisp*/) {
        'use strict';

        if (!this) {
          throw new TypeError();
        }

        var objects = Object(this);
        var len = objects.length >>> 0;
        if (typeof fun !== 'function') {
          throw new TypeError();
        }

        var res = [];
        var thisp = arguments[1];
        for (var i in objects) {
          if (objects.hasOwnProperty(i)) {
            if (fun.call(thisp, objects[i], i, objects)) {
              res.push(objects[i]);
            }
          }
        }

        return res;
      };
    }

### every ###

当一个数组运行 every 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 every 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. every 方法都不会知道.如果数组元素增加,则新增加的元素不会被 every 遍历到,如果数组元素减少.则 every 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 如果每一项元素都符合条件,则返回 true.
    // @since ES5
    array.every(callback[, thisObject])


    // es5-shim
    if (!Array.prototype.every) {
      Array.prototype.every = function(fun /*, thisp */) {
        'use strict';
        var t, len, i, thisp;

        if (this == null) {
          throw new TypeError();
        }

        t = Object(this);
        len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        thisp = arguments[1];
        for (i = 0; i < len; i++) {
          if (i in t && !fun.call(thisp, t[i], i, t)) {
            return false;
          }
        }

        return true;
      };
    }

### some ###

当一个数组运行 some 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 some 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. some 方法都不会知道.如果数组元素增加,则新增加的元素不会被 some 遍历到,如果数组元素减少.则 some 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 如果某一项元素符合条件,则返回 true.
    // @since ES5
    array.some(callback[, thisObject])


    // es5-shim
    if (!Array.prototype.some) {
      Array.prototype.some = function(fun /*, thisp */) {
        'use strict';

        if (this == null) {
          throw new TypeError();
        }

        var thisp, i,
            t = Object(this),
            len = t.length >>> 0;
        if (typeof fun !== 'function') {
          throw new TypeError();
        }

        thisp = arguments[1];
        for (i = 0; i < len; i++) {
          if (i in t && fun.call(thisp, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

### reduce ###

当一个数组运行 reduce 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 reduce 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. reduce 方法都不会知道.如果数组元素增加,则新增加的元素不会被 reduce 遍历到,如果数组元素减少.则 reduce 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 使用一个累加器函数,对数组中的每个元素从左到右进行计算,减少到单一值并返回.
    // @param callback
    //     callback(previousValue, currentValue, index, array)
    //     index为currentValue的索引
    // @param initialValue
    //     第一次调用callback时的第一个参数.
    //     如果提供initialValue,则第一次执行callback时,previousValue为initialValue,currentValue为array的第一个元素.
    //     如果没有提供initialValue,则第一次执行callback时,previousValue和currentValue分别为array的第一个和第二个元素.
    // @since ES5
    array.reduce(callback[, initialValue])


    // example: Sum up all values within an array
    var total = [0, 1, 2, 3].reduce(function(a, b) {
        return a + b;
    });
    // result: 6

    // example: Flatten an array of arrays
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
        return a.concat(b);
    });

    // es5-shim
    if ('function' !== typeof Array.prototype.reduce) {
      Array.prototype.reduce = function(callback, opt_initialValue){
        'use strict';
        if (null === this || 'undefined' === typeof this) {
          // At the moment all modern browsers, that support strict mode, have
          // native implementation of Array.prototype.reduce. For instance, IE8
          // does not support strict mode, so this check is actually useless.
          throw new TypeError(
              'Array.prototype.reduce called on null or undefined');
        }
        if ('function' !== typeof callback) {
          throw new TypeError(callback + ' is not a function');
        }
        var index, value,
            length = this.length >>> 0,
            isValueSet = false;
        if (1 < arguments.length) {
          value = opt_initialValue;
          isValueSet = true;
        }
        for (index = 0; length > index; ++index) {
          if (this.hasOwnProperty(index)) {
            if (isValueSet) {
              value = callback(value, this[index], index, this);
            }
            else {
              value = this[index];
              isValueSet = true;
            }
          }
        }
        if (!isValueSet) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        return value;
      };
    }

### reduceRight ###

当一个数组运行 reduceRight 方法时,数组的长度在调用第一次 callback 方法之前就已经确定.在 reduceRight 方法整个运行过程中,不管 callback 函数中的操作给原数组是添加还是删除了元素. reduceRight 方法都不会知道.如果数组元素增加,则新增加的元素不会被 reduceRight 遍历到,如果数组元素减少.则 reduceRight 方法还会认为原数组的长度没变,从而导致数组访问越界.

    // 和reduce类似,不过从右到左.
    // @since ES5
    array.reduceRight(callback[, initialValue])

## 类数组对象 ##

有一些 JavaScript 对象, 比如使用 `document.getElementByTagName` 返回的 `NodeList` 或者函数内的 `arguments`, 表现的很像数组但却不能共享所有的数组方法. 比如 `arguments` 对象有一个 `length` 属性但不能调用 `forEach` 方法.

### 数组泛化 ###

在 JavaScript1.6中引入了 JavaScript 泛化的特性，可以参考这里 [Javascript 中的 Generics](http://www.gracecode.com/posts/2197.html)

### 借助 call 和 apply ###

使用 push/pop/unshift/shift 操作类数组对象

    array.push(element1, ..., elementN)
    array.pop();
    array.unshift(element1, ..., elementN)
    array.shift();

    var obj = { name: 'jpuncle' };
    Array.prototype.push.apply(obj, ['value1', 'value2']);
    // obj: Object {0: "value1", 1: "value2", name: "jpuncle", length: 2}

slice 方法可以用来将一个类数组(Array-like)对象/集合转换成一个数组. 你只需要用数组原型上的slice方法call这个对象. 

    function list() {
      return Array.prototype.slice.call(arguments);
    }
    var list1 = list(1, 2, 3); // output: [1, 2, 3]

除了使用Array.prototype.slice.call(arguments),你也可以简单的使用 [].slice.call(arguments)来代替. 另外你也可以使用 bind来构造一个绑定slice的call函数.

    var unboundSlice = Array.prototype.slice;
    var slice = Function.prototype.call.bind(unboundSlice);

    function list() {
      return slice(arguments);
    }

    var list1 = list(1, 2, 3); // [1, 2, 3]

## 列表解析(Array comprehensions)

常常用来代替 `map()` 和 `filter()`

    var numbers = [1, 2, 3, 4];
    var doubled = [i * 2 for (i of numbers)];
    alert(doubled); // Alerts 2,4,6,8

这和下面的使用 `map()` 的代码是等效的:

    var doubled = numbers.map(function(i){return i * 2;});

使用列表解析完成 map 和 filter 的结合:

    var numbers = [1, 2, 3, 21, 22, 30];
    var doubledEvens = [i * 2 for (i of numbers) if (i % 2 === 0)];
    alert(doubledEvens); // Alerts 4,44,60

列表解析不仅仅可以用在数组上, 也可以用在[迭代器和生成器](https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators):

    var str = 'abcdef';
    var consonantsOnlyStr = [c for (c of str) if (!(/[aeiouAEIOU]/).test(c))  ].join(''); // 'bcdf'
    var interpolatedZeros = [c+'0' for (c of str) ].join(''); // 'a0b0c0d0e0f0'

## Others ##

通过修改 length 可以添加元素或者删除元素。

delete array[index] 将导致 index 位置上的值变成 undefined 。