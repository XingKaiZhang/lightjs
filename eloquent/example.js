// Closure Example
;(function(global, undefined) {

    function makeAdder(amount) {
        return function(number) {
            return number + amount;
        };
    }

    var addTwo = makeAdder(2);
    addTwo(3);

})(this)


// Dictionary Example
;(function(global, undefined) {

    function Dictionary(startValues) {
        this.values = startValues || {};
    }
    Dictionary.prototype.store = function(name, value) {
        this.values[name] = value;
    };
    Dictionary.prototype.lookup = function(name) {
        return this.values[name];
    };
    Dictionary.prototype.contains = function(name) {
        return Object.prototype.propertyIsEnumerable.call(this.values, name);
    };
    Dictionary.prototype.each = function(action) {
        forEachIn(this.values, action);
    }

})(this)


// Class Definition Example
;(function(global, undefined) {

    function StrangeArray() {}
    StrangeArray.inherit(Array);
    StrangeArray.method("push", function(value) {
        Array.prototype.push.call(this, value);
        Array.prototype.push.call(this, value);
    });

    var strange = new StrangeArray();
    strange.push(4);

})(this)


// Class Prototype Example
;(function(global, undefined) {

    var Item = {
        construt: function(name) {
            this.name = name;
        },
        inspect: function() {
            console.log("it is ", this.name, ".");
        },
        kick: function() {
            console.log("klunk!");
        }
    };

    var lantern = Item.create("the brass lantern");
    lantern.kick();

    var DetailedItem = Item.extend({
        construt: function(name, details) {
            Item.construt.call(this, name);
            this.details = details;
        },
        inspect: function() {
            console.log("you see ", this.name, ", ", this.details, ".");
        }
    });

    var giantSloth = DetailedItem.create("the giant sloth", "it is quietly hanging from a tree, munching leaves");

    var SmallItem = Item.extend({
        kick: function() {
            console.log(this.name, " flies across the room.");
        }
    });

    var pencil = SmallItem.create("the red pencil");
    pencil.kick();

    pencil.isA(Item); // true
    pencil.isA(DetailedItem); // false

})(this)