# Array #

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
            splice: function splice() {}    // 修改数组内容, 删除一些旧元素, 用一些新元素.
            reverse: function reverse() {}  // 将数组倒序排列.
            sort: function sort() {}        // 根据指定的比较函数排序.
            indexOf: function indexOf() {}
            lastIndexOf: function lastIndexOf() {}
            forEach: function forEach() {}
            map: function map() {}
            filter: function filter() {}
            every: function every() {}
            some: function some() {}
            reduce: function reduce() {}
            reduceRight: function reduceRight() {}
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

    // 修改数组内容,删除一些旧元素, 用一些新元素.
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

### forEach ###

    // 为每个数组元素执行一次指定的函数.
    // @description 
    //     forEach 方法为数组中的每个有值的元素执行一次给定的callback函数,
    //     只有在那些有值的索引上才会调用callback函数,那些被删除掉的索引或
    //     者从未赋值过的索引将会被跳过.
    // @since ES5
    array.forEach(callback[, thisArg])


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


## 类数组对象 ##

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


## Others ##


通过修改 length 可以添加元素或者删除元素。

delete array[index] 将导致 index 位置上的值变成 undefined 。