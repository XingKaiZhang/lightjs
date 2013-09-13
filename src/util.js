




// array 去重
Array.prototype.distinct = function() {
    var self = this,
        result = [],
        len = self.length,
        i,
        j;

    for (i = 0; i < len; i++) {
        var original = self[i],
            flag = true;

        for (j = 0; j < result.length; j++) {
            if (original === result[j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            result.push(original);
        }
    }

    // this = result;    // will throw ReferenceError: Invalid left-hand side in assignment
    // so 
    this.length = 0;
    this.push(result);
};

// 上面的代码中使用了两个 for 循环。
// 也可以借助一个对象来实现，但是有一些问题，因为对象的 key 只能是字符串。
// var tag = {}
// tag[self[i]] = 1
// if (!tag[self[i]])

// See also https://github.com/lifesinger/lifesinger.github.com/issues/113