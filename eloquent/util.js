// Math
// =========================

function square(x) {
    return x * x;
}

function power(base, exponent) {
    var result = 1;
    if (exponent === undefined) {
        exponent = 2;
    }
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}


// Array
// =========================

// range(end)
// range(start, end)
function range(start, end) {
    if (arguments.length < 2) {
        end = start;
        start = 0;
    }
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


// String
// =========================

function startsWith(string, pattern) {
    return string.slice(0, pattern.length) == pattern;
}


// Functional Programming
// =========================

function forEach(array, action) {
    for (var i = 0, len = array.length; i < len; i++) {
        action(array[i]);
    }
}

function forEachIn(object, action) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var property in object) {
        if (hasOwnProperty.call(object, property)) {
            action(property, object[property]);
        }
    }
}

function reduce(combine, base, array) {
    forEach(array, function(element) {
        base = combine(base, element);
    });
    return base;
}

function map(func, array) {
    var result = [];
    forEach(array, function(element) {
        result.push(func(element));
    });
    return result;
}

function partial(func) {
    var knownArgs = arguments;
    return function() {
        var realArgs = [];
        for (var i = 1; i < knownArgs.length; i++) {
            realArgs.push(knownArgs[i]);
        }
        for (var i = 0; i < arguments.length; i++) {
            realArgs.push(arguments[i]);
        }
        return func.apply(null, realArgs);
    }
}

function compose(func1, func2) {
    return function() {
        return f1(f2.apply(null, arguments));
    }
}

function bind(func, object) {
    return function() {
        func.apply(object, arguments);
    };
}

function method(object, name) {
    return function() {
        object[name].apply(object, arguments);
    }
}


// Object-oriented Programming
// =========================

Object.prototype.properties = function() {
    var result = [],
        hasOwn = Object.prototype.hasOwnProperty;
    for (var property in this) {
        if (hasOwn.call(this, property)) {
            result.push(property);
        }
    }
    return result;
};

// 继承
function clone(object) {
    function OneShotConstructor(){}
    OneShotConstructor.prototype = object;
    return new OneShotConstructor();
}

// Class Definition
Object.prototype.inherit = function(baseConstructor) {
    this.prototype = clone(baseConstructor);
    this.prototype.constructor = this;
};
Object.prototype.method = function(name, func) {
    this.prototype[name] = func;
};

// Class Prototype
Object.prototype.create = function() {
    var object = clone(this);
    if (object.construct != undefined) {
        object.construct.apply(object, arguments);
    }
    return object;
};
Object.prototype.extend = function(properties) {
    var result = clone(this);
    forEachIn(properties, function(name, value) {
        result[name] = value;
    });
    return result;
};
// 这种情况下，instanceof 就不能聪明的工作了，写一个方法替代它。
Object.prototype.isA = function(prototype) {
    function DummyConstructor() {}
    DummyConstructor.prototype = prototype;
    return this instanceof DummyConstructor;
};

// mix
function mixInto(object, mixIn) {
    forEachIn(mixIn, function(name, value) {
        object[name] = value;
    });
}


// Modular
// =========================

function buildFooModule() {
    var foo = function() {};

    window.foo = foo;
}
buildFooModule();

(function() {

    var foo = function() {};

    window.foo = foo;

})();

var Foo = (function() {

    var foo = function() {};

    return {
        foo: foo,
        another: function() {}
    };

})();