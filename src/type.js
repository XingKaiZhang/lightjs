;(function(global, undefined) {

    // Detecting Primitive Values
    // use typeof (sometimes use === and !==)
    // ========================

    typeof name === "string";
    typeof count === "number";
    typeof found === "boolean";
    typeof MyApp === "undefined";

    // 这个应该是程序设计上的错误
    typeof null === "object";    // Bad
    // 导致我们只能使用 value === null ，但是容易用错。
    // 比如你期望 items 是一个 Array ，那么下面的代码是无效的。
    if (items !== null) {
        items.sort();
    }

    // Detecting Reference Values
    // use instanceof
    // ========================

    function Person(name) {
        this.name = name;
    }

    var me = new Person("jpuncle"),
        now = new Date(),
        pattern = /^\s/g;

    me instanceof Person;
    me instanceof Object;
    now instanceof Date;
    pattern instanceof RegExp;

    // Detecting Functions
    // 因为每一个 Frame 都会有一份自己的 Function 构造函数，所以不能使用 instanceof 判断函数。
    // use typeof (sometimes use in)
    // ========================

    function foo() {
        // do foo...
    }

    foo instanceof "function";    // true, 但是不能跨 Frame
    typeof foo === "function";    // true, 而且能够跨 Frame

    // 对于 IE8 以及更早的浏览器来说，DOM 没有被实现成为本地 JavaScript 函数。
    typeof document.getElementById;    // "object", bad
    // 所以我们可以使用 in ，虽然不太完美，但是有效
    if ("getElementById" in document) {
        document.getElementById("myId");
    }

    // Detecting Arrays
    // 同样因为每一个 Frame 都会有一份自己的 Array 构造函数，所以也不能使用 instanceof
    // ========================

    function isArray(value) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(value);
        } else {
            return Object.prototype.toString.call(value) === "[object Array]";
        }
    }

    // Detecting Properties
    // ========================

    var object = {
        count: 0,
        related: null
    };

    // Good
    if ("count" in object) {
        // this executes
    }

    // Bad: Checking falsy values
    if (object["count"]) {
        // this doesn't execute
    }

    // Good
    if ("related" in object) {
        // this executes
    }

    // Bad: Checking against null
    if (object["related"] != null) {
        // this doesn't execute
    }

    // Good for all non-DOM objects
    if (object.hasOwnProperty("related")) {
        // this executes
    }

    // Good when you are not sure
    if ("hasOwnProperty" in object && object.hasOwnProperty("related")) {
        // this executes
    } else if ("related" in object) {    // for DOM objects
        // this executes
    }

}())