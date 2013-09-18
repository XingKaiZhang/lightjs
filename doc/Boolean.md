# Boolean Overview #

    console.dir(Boolean)
    function Boolean() { [native code] }
        arguments: null
        caller: null
        length: 1
        name: "Boolean"
        prototype: Boolean
            constructor: function Boolean() { [native code] }
            toString: function toString() { [native code] }
            valueOf: function valueOf() { [native code] }
            __proto__: Object
            [[PrimitiveValue]]: false
        __proto__: function Empty() {}

    // An Boolean Instance
    console.dir(new Boolean());
    Boolean
        __proto__: Boolean
            constructor: function Boolean() { [native code] }
            toString: function toString() { [native code] }
            valueOf: function valueOf() { [native code] }
            __proto__: Object
            [[PrimitiveValue]]: false
        [[PrimitiveValue]]: false

## 表达式 ##

    var b = new Boolean(false);

    // 即使 Boolean 对象的 primitive value 为 false, 下面的代码也输出 true.
    if (b) {
        console.log(true);
    } else {
        console.log(false);
    }
    // true

    if (!b) {
        console.log(true);
    } else {
        console.log(false);
    }
    // false

    b === false;    // false
    b == false;     // true