;(function(global, undefined) {

    var lightjs = {
        namespace: function(ns) {
            var parts = ns.split("."),
                object = this,
                i, len;

            for (i = 0, len = parts.length; i++) {
                if (!object[parts[i]]) {
                    object[parts[i]] = {};
                }
                object = object[parts[i]];
            }

            return object;
        }
    };

    global.lightjs = lightjs;

}(this))