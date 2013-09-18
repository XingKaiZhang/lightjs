# Function Overview #

    function Function() { [native code] }
        arguments: null
        caller: null
        length: 1
        name: "Function"
        prototype: function Empty() {}
            apply: function apply() { [native code] }
            arguments: null
            bind: function bind() { [native code] }
            call: function call() { [native code] }
            caller: null
            constructor: function Function() { [native code] }
            length: 0
            name: "Empty"
            toString: function toString() { [native code] }
            __proto__: Object
            <function scope>
        __proto__: function Empty() {}
        <function scope>

## Function ##

    // 将 JavaScript 代码串转换为一个函数.
    var functionObjectName = new Function ([arg1, arg2, ... argn], functionBody);

    var setBGColor = new Function("document.bgColor = 'antiquewhite'");

## Function.prototype ##

### apply ###

### call ###

### bind ###